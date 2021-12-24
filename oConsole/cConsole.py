import threading;

import mCP437;
from mWindowsSDK import *;
oKernel32 = foLoadKernel32DLL(); # We need this throughout the class, so might as well load it now.

try:
  from cFileSystemItem import cFileSystemItem;
except ImportError:
  cFileSystemItem = None;

class cConsole(object):
  uColumnsForRedirectedOutput = 80;
  
  def __init__(oSelf, bCodepage437 = False):
    oSelf.oLock = threading.RLock();

    oSelf.uLastLineLength = 0;
    oSelf.ohStdOut = oKernel32.GetStdHandle(STD_OUTPUT_HANDLE);
    odwMode = DWORD(0);
    oSelf.bStdOutIsConsole = True if oKernel32.GetConsoleMode(oSelf.ohStdOut, odwMode.foCreatePointer()).value else False;
    oSelf.bByteOrderMarkWritten = False;
    oSelf.sLastBar = None; # No progress bar is being shown
    oSelf.bCodepage437 = bCodepage437;
    if oSelf.bStdOutIsConsole:
      oSelf.uOriginalColor = oSelf.uCurrentColor;
      oSelf.uDefaultColor = 0;
      oSelf.uDefaultBarColor = 0xFF00 | (oSelf.uOriginalColor & 0xFF);
      oSelf.uDefaultProgressColor = 0xFF00 | ((oSelf.uOriginalColor & 0xF0) >> 4) | ((oSelf.uOriginalColor & 0x0F) << 4);
      oSelf.bLastSetColorIsNotOriginal = False;
    else:
      if not bCodepage437:
        # UTF-8 encoded output to file; write BOM (https://en.wikipedia.org/wiki/Byte_order_mark);
        oSelf.__fWriteToStdOutFile("\xEF\xBB\xBF");
    oSelf.__aoCopyOutputToFileSystemItems = [];
    oSelf.__a0sLog = None;
    oSelf.__oUser32 = None; # Lazy loaded as not every program needs it.
  
  @property
  def oUser32(oSelf):
    if oSelf.__oUser32 is None:
      oSelf.__oUser32 = foLoadUser32DLL(); # We need this throughout the class, so might as well load it now.
    return oSelf.__oUser32;
  
  def fEnableLog(oSelf):
    if oSelf.__a0sLog is None:
      oSelf.__a0sLog = [];
  def fDisableLog(oSelf):
    oSelf.__a0sLog = None;
  def fa0sGetLog(oSelf):
    return oSelf.__a0sLog[:] if oSelf.__a0sLog is not None else None;
  
  def fbCopyOutputToFilePath(oSelf, sFilePath, bOverwrite = False, bIncludeLog = True):
    assert cFileSystemItem, \
        "The cFileSystemItem module is required to copy console output to files!";
    oFileSystemItem = cFileSystemItem(sFilePath);
    if oFileSystemItem.fbIsFolder():
      return False; # We will never overwrite a folder.
    elif oFileSystemItem.fbIsFile():
      if not bOverwrite:
        return False;
      assert oFileSystemItem.fbOpenAsFile(bWritable = True, bAppend = False, bParseZipFiles = True, bThrowErrors = True), \
         "Cannot open existing file %s!" % (sFilePath,);
    else:
     assert oFileSystemItem.fbCreateAsFile(bCreateParents = True, bParseZipFiles = True, bKeepOpen = True, bThrowErrors = True), \
        "Cannot create file %s!" % (sFilePath,);
    assert oFileSystemItem.fbWrite("\xEF\xBB\xBF", bKeepOpen = True, bParseZipFiles = True, bThrowErrors = True), \
        "Cannot write to file %s!" % (sFilePath,);
    if bIncludeLog and oSelf.__a0sLog is not None:
      for sLog in oSelf.__a0sLog:
        assert oFileSystemItem.fbWrite(sLog, bKeepOpen = True, bParseZipFiles = True, bThrowErrors = True), \
            "Cannot write to file %s!" % (sFilePath,);
    oSelf.__aoCopyOutputToFileSystemItems.append(oFileSystemItem);
    return True;
  
  def fLock(oSelf):
    oSelf.oLock.acquire();
  
  def fUnlock(oSelf):
    oSelf.oLock.release();
  
  def fCleanup(oSelf):
    # If we are outputting to a console and the last set color is not the original color, the user must have
    # interrupted Python: set the color back to the original color the console will look as expected.
    # Also, if the last output was a status message, we need to clean it up.
    if oSelf.bStdOutIsConsole:
      if oSelf.bLastSetColorIsNotOriginal:
        oSelf.__fSetColor(oSelf.uOriginalColor);
      if oSelf.uLastLineLength:
        assert oSelf.bStdOutIsConsole, \
            "This is unexpected!";
        oSelf.__fBackToStartOfLine();
        oSelf.__fWriteOutput(u" " * oSelf.uLastLineLength, bIsStatusMessage = True);
        oSelf.__fBackToStartOfLine();
        oSelf.uLastLineLength = 0;
      oSelf.sLastBar = None; # Any progress bar needs to be redrawn
    for oFileSystemItem in oSelf.__aoCopyOutputToFileSystemItems:
      oFileSystemItem.fbClose(bThrowErrors = True);
    oSelf.__aoCopyOutputToFileSystemItems = [];
    oSelf.__a0sLog = None;
    
  def __foGetConsoleScreenBufferInfo(oSelf):
    assert oSelf.bStdOutIsConsole, \
        "Cannot get colors when output is redirected";
    oConsoleScreenBufferInfo = CONSOLE_SCREEN_BUFFER_INFO()
    assert oKernel32.GetConsoleScreenBufferInfo(oSelf.ohStdOut, oConsoleScreenBufferInfo.foCreatePointer()), \
        "GetConsoleScreenBufferInfo(%d, ...) => Error %08X" % \
        (oSelf.ohStdOut, oKernel32.GetLastError());
    return oConsoleScreenBufferInfo;
  
  @property
  def uCurrentColor(oSelf):
    if not oSelf.bStdOutIsConsole: return None;
    oConsoleScreenBufferInfo = oSelf.__foGetConsoleScreenBufferInfo();
    uColor = oConsoleScreenBufferInfo.wAttributes.value & 0xFF;
    bUnderlined = oConsoleScreenBufferInfo.wAttributes.value & 0x8000;
    return (bUnderlined and 0x10000 or 0) | 0xFF00 | uColor;

  @property
  def uWindowWidth(oSelf):
    if not oSelf.bStdOutIsConsole: return None;
    oConsoleScreenBufferInfo = oSelf.__foGetConsoleScreenBufferInfo();
    return oConsoleScreenBufferInfo.srWindow.Right.value - oConsoleScreenBufferInfo.srWindow.Left.value;
  
  @property
  def uWidth(oSelf):
    if not oSelf.bStdOutIsConsole: return None;
    oConsoleScreenBufferInfo = oSelf.__foGetConsoleScreenBufferInfo();
    return oConsoleScreenBufferInfo.dwSize.X.value;
  
  def __fSetColor(oSelf, uColor):
    assert oSelf.bStdOutIsConsole, \
        "Cannot set colors when output is redirected";
    
    uMask = (uColor >> 8) & 0xFF;
    bUnderline = (uColor >> 16);
    assert bUnderline in [0, 1], \
        "You cannot use color 0x%X; maybe you are trying to print a number without converting it to a string?" % uColor;
    uAttribute = (oSelf.uCurrentColor & (uMask ^ 0xFF)) | (uColor & uMask) | (bUnderline and 0x8000 or 0);
    assert oKernel32.SetConsoleTextAttribute(oSelf.ohStdOut, uAttribute), \
        "SetConsoleTextAttribute(%d, %d) => Error %08X" % \
        (oSelf.ohStdOut, uAttribute, oKernel32.GetLastError());
    # Track if the current color is not the original, so we know when to set it back.
    oSelf.bLastSetColorIsNotOriginal = uAttribute != oSelf.uOriginalColor;
  
  def __fWriteOutput(oSelf, sxMessage, bIsStatusMessage):
    if oSelf.bStdOutIsConsole:
      # We always output Unicode to console, so convert ASCII strings to
      # Unicode assuming CP437 encoding.
      suMessage = mCP437.fsuToUnicode(sxMessage) if isinstance(sxMessage, str) else sxMessage;
      oSelf.__fWriteToStdOutConsole(suMessage);
    if bIsStatusMessage:
      return; # status messages are not logged, written when stdout is redirected or copied to files.
    if not oSelf.bStdOutIsConsole or oSelf.__aoCopyOutputToFileSystemItems or oSelf.__a0sLog is not None:
      # We always output byte strings to file.
      if oSelf.bCodepage437:
        # The users was CP437 encoding, so convert Unicode:
        sMessage = mCP437.fsFromUnicode(sxMessage) if isinstance(sxMessage, unicode) else sxMessage;
      else:
        # The user wants UTF-8 encoded Unicode strings, so convert ASCII to Unicode assuming CP437 encoding:
        suMessage = mCP437.fsuToUnicode(sxMessage) if isinstance(sxMessage, str) else sxMessage;
        # Now convert Unicode to UTF-8 encoded byte strings.
        sMessage = suMessage.encode('utf-8', "backslashreplace");
      if not oSelf.bStdOutIsConsole:
        oSelf.__fWriteToStdOutFile(sMessage);
      for oFileSystemItem in oSelf.__aoCopyOutputToFileSystemItems:
        oFileSystemItem.fbWrite(sMessage, bKeepOpen = True, bParseZipFiles = True, bThrowErrors = True);
      if oSelf.__a0sLog is not None:
        oSelf.__a0sLog.append(sMessage);
  
  def __fBackToStartOfLine(oSelf): # CR
    assert oSelf.bStdOutIsConsole, \
        "This is unexpected";
    oSelf.__fWriteToStdOutConsole(u"\r");
  
  def __fNextLine(oSelf): # LF
    if oSelf.bStdOutIsConsole:
      oSelf.__fWriteToStdOutConsole(u"\n");
    else:
      oSelf.__fWriteToStdOutFile("\n");
    for oFileSystemItem in oSelf.__aoCopyOutputToFileSystemItems:
      oFileSystemItem.fbWrite("\r\n", bKeepOpen = True, bParseZipFiles = True, bThrowErrors = True);
    if oSelf.__a0sLog is not None:
      oSelf.__a0sLog.append("\r\n");
  
  def __fWriteToStdOutFile(oSelf, sMessage):
    odwCharsWritten = DWORD(0);
    while sMessage:
      uCharsToWrite = min(len(sMessage), 10000);
      poBuffer = PCSTR(sMessage[:uCharsToWrite]);
      assert oKernel32.WriteFile(
        oSelf.ohStdOut,
        poBuffer,
        uCharsToWrite,
        odwCharsWritten.foCreatePointer(),
        NULL
      ), \
          "%s(0x%X, 0x%X, 0x%X, 0x%X, NULL) => Error %08X" % \
          (sWriteFunctionName, oSelf.ohStdOut, poBuffer, uCharsToWrite, \
          odwCharsWritten.fuGetAddress(), oKernel32.GetLastError());
      sMessage = sMessage[odwCharsWritten.value:];
  def __fWriteToStdOutConsole(oSelf, suMessage):
    odwCharsWritten = DWORD(0);
    while suMessage:
      uCharsToWrite = min(len(suMessage), 10000);
      poBuffer = PCWSTR(suMessage[:uCharsToWrite]);
      assert oKernel32.WriteConsoleW(
        oSelf.ohStdOut,
        poBuffer,
        uCharsToWrite,
        odwCharsWritten.foCreatePointer(),
        NULL
      ), \
          "%s(0x%X, 0x%X, 0x%X, 0x%X, NULL) => Error %08X" % \
          (sWriteFunctionName, oSelf.ohStdOut, poBuffer, uCharsToWrite, \
          odwCharsWritten.fuGetAddress(), oKernel32.GetLastError());
      suMessage = suMessage[odwCharsWritten.value:];
  
  def __fOutputHelper(oSelf, axCharsAndColors, bIsStatusMessage, uConvertTabsToSpaces, sPadding):
    ### !!!NOTE!!! axCharsAndColors will be modified by this function !!!NOTE!!! ###
    assert oSelf.bStdOutIsConsole or not bIsStatusMessage, \
        "Status messages should not be output when output is redirected.";
    oSelf.oLock.acquire();
    axProcessedArguments = [];
    try:
      # Go to the start of the current line if needed
      if oSelf.uLastLineLength:
        oSelf.__fBackToStartOfLine();
      uCharsOutput = 0;
      # setup colors if outputting to a console.
      if oSelf.bStdOutIsConsole:
        uColumns = oSelf.uWidth;
        if oSelf.uDefaultColor != -1:
          oSelf.__fSetColor(oSelf.uDefaultColor);
      else:
        uColumns = oSelf.uColumnsForRedirectedOutput;
      try:
        while axCharsAndColors:
          xCharsOrColor = axCharsAndColors.pop(0);
          if isinstance(xCharsOrColor, list):
            # elements in lists are processesed in order (this allows you to more easily generate output).
            axCharsAndColors = xCharsOrColor + axCharsAndColors;
          elif isinstance(xCharsOrColor, int) or isinstance(xCharsOrColor, long):
            axProcessedArguments.append(xCharsOrColor);
            # integers and longs are interpreted as colors.
            if oSelf.bStdOutIsConsole: # If output is redirected, colors will not be set, so don't try
              if xCharsOrColor == -1:
                uColor = oSelf.uOriginalColor;
              else:
                uColor = xCharsOrColor;
              oSelf.__fSetColor(uColor);
          else:
            axProcessedArguments.append(xCharsOrColor);
            # strings are written to stdout
            assert isinstance(xCharsOrColor, str) or isinstance(xCharsOrColor, unicode), \
                "You cannot print %s (type = %s) directly; it must be converted to a string (processed arguments = %s)" % \
                (repr(xCharsOrColor), xCharsOrColor.__class__.__name__, repr(axProcessedArguments));
            if oSelf.bStdOutIsConsole:
              uCharsLeftOnLine = uColumns - uCharsOutput - 1;
            if uConvertTabsToSpaces:
              uCurrentColumn = uCharsOutput;
              sMessage = "";
              for sChar in xCharsOrColor:
                if bIsStatusMessage and uCharsLeftOnLine == 0: break;
                if ord(sChar) == ord('\t'):
                  sChar = " ";
                  uCount = (uConvertTabsToSpaces - (uCurrentColumn % uConvertTabsToSpaces)) or uConvertTabsToSpaces;
                  if bIsStatusMessage:
                    uCount = min(uCount, uCharsLeftOnLine);
                else:
                  uCount = 1;
                sMessage += sChar * uCount;
                uCurrentColumn += uCount;
                if oSelf.bStdOutIsConsole:
                  uCharsLeftOnLine -= uCount;
            else:
              sMessage = xCharsOrColor;
              if bIsStatusMessage and len(sMessage) > uCharsLeftOnLine:
                # Do not let a status message span multiple lines.
                sMessage = sMessage[:uCharsLeftOnLine];
            oSelf.__fWriteOutput(sMessage, bIsStatusMessage);
            uCharsOutput += len(sMessage);
            if bIsStatusMessage and uCharsOutput == uColumns - 1:
              # We've reached the end of the line and the remained of the arguments will not be output.
              break;
        if sPadding and uCharsOutput < uColumns:
          uPaddingColumns = uColumns - uCharsOutput - 1;
          sLinePadding = (sPadding * (uPaddingColumns / len(sPadding)))[:uPaddingColumns];
          oSelf.__fWriteOutput(sLinePadding, bIsStatusMessage);
          uCharsOutput += uPaddingColumns;
      finally:
        if oSelf.bStdOutIsConsole and oSelf.bLastSetColorIsNotOriginal:
          oSelf.__fSetColor(oSelf.uOriginalColor);
      if oSelf.bStdOutIsConsole:
        # Optionally output some padding if this is a status message that is smaller than the previous status message.
        # Then go back to the start of the line and move to the next line if this is not a status message.
        oSelf.__fWriteOutput("".join([
          uCharsOutput < oSelf.uLastLineLength and u" " * (oSelf.uLastLineLength - uCharsOutput) or "",
        ]), True);
        if bIsStatusMessage:
          oSelf.uLastLineLength = uCharsOutput
        else:
          oSelf.uLastLineLength = 0;
          oSelf.__fNextLine();
      else:
        oSelf.__fNextLine();
        oSelf.uLastLineLength = 0;
    finally:
      oSelf.oLock.release();
  
  def fPrint(oSelf, *axCharsAndColors, **dxFlags):
    for sFlag in dxFlags.keys():
      assert sFlag in ["uConvertTabsToSpaces", "sPadding"], \
          "Unknown flag %s" % sFlag;
    oSelf.__fOutputHelper(
      list(axCharsAndColors),
      bIsStatusMessage = False,
      uConvertTabsToSpaces = dxFlags.get("uConvertTabsToSpaces", 0),
      sPadding = dxFlags.get("sPadding", None),
    );
    oSelf.sLastBar = None; # Any progress bar needs to be redrawn
  fOutput = fPrint;
  
  def fStatus(oSelf, *axCharsAndColors, **dxFlags):
    # Status messages are not shown if output is redirected.
    if not oSelf.bStdOutIsConsole: return;
    for sFlag in dxFlags.keys():
      assert sFlag in ["uConvertTabsToSpaces", "sPadding"], \
          "Unknown flag %s" % sFlag;
    oSelf.__fOutputHelper(
      list(axCharsAndColors),
      bIsStatusMessage = True,
      uConvertTabsToSpaces = dxFlags.get("uConvertTabsToSpaces", 0),
      sPadding = dxFlags.get("sPadding", None),
    );
    oSelf.sLastBar = None; # Any progress bar needs to be redrawn
  
  def fProgressBar(oSelf, nProgress, sMessage = "", bCenterMessage = True, uProgressColor = None, uBarColor = None):
    # Converting tabs to spaces in sMessage is not possible because this requires knowning which column each character
    # is going to be located. However, sMessage will be centered, so the location of each character depends on its
    # length, which we cannot know until after converting the tabs to spaces. This is a Catch-22 type issue.
    if not oSelf.bStdOutIsConsole: return;
    if uBarColor is None:
      uBarColor = oSelf.uDefaultBarColor;
    if uProgressColor is None:
      uProgressColor = oSelf.uDefaultProgressColor;
    assert nProgress >=0 and nProgress <= 1, \
        "Progress must be [0, 1], not %s" % repr(nProgress);
    uBarWidth = oSelf.uWindowWidth - 1;
    sBar = sMessage.center(uBarWidth) if bCenterMessage else sMessage.ljust(uBarWidth);
    uProgress = long(oSelf.uWindowWidth * nProgress);
    # If this progress bar looks the same as the previous, we haven't made progress and won't show it.
    if (
      sBar != oSelf.sLastBar
      or uBarColor != oSelf.uLastBarColor
      or uProgressColor != oSelf.uLastProgressColor
      or uProgress != oSelf.uLastProgress
    ):
      oSelf.__fOutputHelper(
        [uProgressColor, sBar[:uProgress], uBarColor, sBar[uProgress:]],
        bIsStatusMessage = True,
        uConvertTabsToSpaces = 0,
        sPadding = None,
      );
      oSelf.uLastBarColor = uBarColor;
      oSelf.uLastProgressColor = uProgressColor;
      oSelf.sLastBar = sBar;
      oSelf.uLastProgress = uProgress;
  
  def fSetTitle(oSelf, sTitle):
    poBuffer = PCWSTR(sTitle);
    assert oKernel32.SetConsoleTitleW(poBuffer), \
        "SetConsoleTitleW(%s) => Error %08X" % (repr(poBuffer), oKernel32.GetLastError());
  
  def fHideWindow(oSelf):
    oSelf.__fSetWindowShowCommand(SW_HIDE);
  def fShowWindow(oSelf, bActivate = False):
    oSelf.__fSetWindowShowCommand(SW_SHOW if bActivate else SW_SHOWNA);
  def fMinimizeWindow(oSelf):
    oSelf.__fSetWindowShowCommand(SW_SHOWMINIMIZED);
  def fMaximizeWindow(oSelf):
    oSelf.__fSetWindowShowCommand(SW_SHOWMAXIMIZED);
  def fRestoreWindow(oSelf):
    oSelf.__fSetWindowShowCommand(SW_SHOWNORMAL);
  def __fSetWindowShowCommand(oSelf, uShowCommand):
    oHWindow = oKernel32.GetConsoleWindow();
    assert oHWindow, \
        "GetConsoleWindow() => Error %08X" % oKernel32.GetLastError();
    oWindowPlacement = WINDOWPLACEMENT();
    oWindowPlacement.length = UINT(oWindowPlacement.fuGetSize());
    assert oSelf.oUser32.GetWindowPlacement(oHWindow, oWindowPlacement.foCreatePointer()), \
        "user32.GetWindowPlacement(%08X, %08X) => Error %08X" % \
            (oHWindow.value, oWindowPlacement.fuGetAddress(), oKernel32.GetLastError());
    oWindowPlacement.flags = WPF_ASYNCWINDOWPLACEMENT;
    oWindowPlacement.showCmd = uShowCommand;
    assert oSelf.oUser32.SetWindowPlacement(oHWindow, oWindowPlacement.foCreatePointer()), \
        "user32.SetWindowPlacement(%08X, %08X) => Error %08X" % \
            (oHWindow.value, oWindowPlacement.fuGetAddress(), oKernel32.GetLastError());
