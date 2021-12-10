@ECHO OFF
WHERE PYTHON 2>&1 >nul
IF ERRORLEVEL 1 (
  ECHO - PYTHON was not found!
  EXIT /B 1
)
ECHO * Running unit-tests...

ECHO   * Test if oConsole can output to the console...
CALL PYTHON "%~dpn0\%~n0.py" %*
IF ERRORLEVEL 1 GOTO :ERROR

ECHO   * Test if oConsole can detect redirected output...
CALL PYTHON "%~dpn0\%~n0.py" %* >nul
IF ERRORLEVEL 1 GOTO :ERROR

ECHO   + Passed unit-tests.
EXIT /B 0

:ERROR
  ECHO     - Failed with error level %ERRORLEVEL%
  ENDLOCAL & EXIT /B %ERRORLEVEL%
