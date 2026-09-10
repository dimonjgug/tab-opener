@echo off
setlocal enabledelayedexpansion

REM Ищем Chrome в стандартных местах
set "chromePath="

if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    set "chromePath=C:\Program Files\Google\Chrome\Application\chrome.exe"
) else if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    set "chromePath=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
) else if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
    set "chromePath=%LocalAppData%\Google\Chrome\Application\chrome.exe"
)

if "!chromePath!"=="" (
    echo Chrome не найден! Пожалуйста, установите Google Chrome.
    pause
    exit /b 1
)

start "" "!chromePath!" --disable-popup-blocking "https://raw.githubusercontent.com/dimonjgug/tab-opener/main/index.html"
