REM https://conemu.github.io/en/NewConsole.html
REM https://conemu.github.io/en/ConEmuArgs.html
REM https://conemu.github.io/en/TableOfContents.html
REM https://superuser.com/questions/593612/run-series-of-commands-in-different-tabs-in-conemu
start /d "C:\Program Files\ConEmu\" ConEmu64.exe /cmdlist ^> cmd -cur_console:t:"Project":d:C:\MyLearn\MeanSimpleCMS  ^|^|^| cmd -cur_console:t:"NodeBackend":d:C:\MyLearn\MeanSimpleCMS\nodecmsapi /k "nodemon ./app.js" ^|^|^| cmd -cur_console:t:"AngularFrontend":d:C:\MyLearn\MeanSimpleCMS\angularcms /k "ng serve"

REM https://stackoverflow.com/questions/36969586/running-visual-studio-code-in-the-current-folder-with-batch-file
start /d "C:\Users\jaypal\AppData\Local\Programs\Microsoft VS Code\" Code.exe C:\MyLearn\MeanSimpleCMS\nodecmsapi
start /d "C:\Users\jaypal\AppData\Local\Programs\Microsoft VS Code\" Code.exe C:\MyLearn\MeanSimpleCMS\angularcms

ping 127.0.0.1 -n 8
start /d "C:\Program Files\Git\cmd\" git-gui.exe --working-dir C:\MyLearn\MeanSimpleCMS

start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "http://localhost:4200/"
