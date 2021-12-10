from fTestDependencies import fTestDependencies;
fTestDependencies();

import time;

# Some tests require visual checks. This delay is used to slow these tests down
# in order to do so.
nDelayInSecondsForVisualChecks = 1.0

try:
  import mDebugOutput;
except:
  mDebugOutput = None;
try:
  #Import the test subject
  from oConsole import oConsole;
  
  for uBackground in xrange(0, 0x10):
    asLineOutput = [];
    for uForeground in xrange(0, 0x10, 1):
      uColor = uForeground + uBackground * 0x10;
      asLineOutput.extend([0xFF00 + uColor, "##"]);
    oConsole.fPrint(*asLineOutput);
  
  # Use a large value, as this will be very slow unless the progress bar is not drawn when it's not changed as it should be.
  uStartTime = time.time();
  uEndTime = uStartTime + nDelayInSecondsForVisualChecks;
  while 1:
    nProgress = (time.time() - uStartTime) / nDelayInSecondsForVisualChecks;
    if nProgress > 1:
      break;
    oConsole.fProgressBar(nProgress, "Screen width = %d" % (oConsole.uWindowWidth or 100));
  
  if oConsole.uWindowWidth is not None:
    # These tests apply to non-redirected output (to a window) only
    sTestMessage = "\t\tx\tTabs to spaces";
    uTestMessageLength = len(sTestMessage);
    oConsole.fStatus(sTestMessage);
    assert oConsole.uLastLineLength == uTestMessageLength, \
        "Expected last line to be %d chars, got %d" % (uTestMessageLength, oConsole.uLastLineLength);
    uTestMessageLength = len(sTestMessage.replace("\t\tx\t", "12341234x234"));
    oConsole.fStatus(sTestMessage, uConvertTabsToSpaces = 4);
    assert oConsole.uLastLineLength == uTestMessageLength, \
        "Expected last line to be %d chars, got %d" % (uTestMessageLength, oConsole.uLastLineLength);
  
  oConsole.fPrint(0xFF1E, "Padding test", sPadding = " -");
  oConsole.fPrint("This tests ", 0x10000, "underlined", 0, " text.");
  if oConsole.bStdOutIsConsole:
    # Colors are only processed when outputting to a console. If you specify an invalid color, the code assumes you
    # accidentally output a number without first converting it to a string. If output is redirected, the color is not
    # processed and this error is not detected.
    try:
      oConsole.fPrint(0x20000);
    except Exception:
      pass;
    else:
      raise AssertionFailure("Using a color number that is outside the value range did not cause an exception!");
  
  # Check log functionality:
  a0sLog = oConsole.fa0sGetLog();
  assert a0sLog is None, \
      "Log contains unexpected value %s" % (repr(a0sLog),);
  oConsole.fEnableLog();
  a0sLog = oConsole.fa0sGetLog();
  assert a0sLog == [], \
      "Log contains unexpected value %s" % (repr(a0sLog),);
  oConsole.fStatus("This should not be in the log");
  assert a0sLog == [], \
      "Log contains unexpected value %s" % (repr(a0sLog),);
  oConsole.fPrint("This should be in the log");
  a0sLog = oConsole.fa0sGetLog();
  assert a0sLog == ["This should be in the log", "\r\n"], \
      "Log contains unexpected value %s" % (repr(a0sLog),);
  oConsole.fDisableLog();
  a0sLog = oConsole.fa0sGetLog();
  assert a0sLog is None, \
      "Log contains unexpected value %s" % (repr(a0sLog),);
  
  oConsole.fPrint("Tests succeeded");
  oConsole.fStatus("This should not be visible");
  oConsole.fMinimizeWindow();
  oConsole.fPrint("Window should now be minimized");
  time.sleep(1);
  oConsole.fMaximizeWindow();
  oConsole.fPrint("Window should now be maximize");
  time.sleep(1);
  oConsole.fRestoreWindow();
  oConsole.fPrint("Window should now be normal");
  time.sleep(1);
  oConsole.fCleanup();
  
  oConsole.fOutput("+ Done.");
  
except Exception as oException:
  if mDebugOutput:
    mDebugOutput.fTerminateWithException(oException, bShowStacksForAllThread = True);
  raise;
