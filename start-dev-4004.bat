@echo off
title Dev Server - Port 4004

echo [1] Killing existing processes on port 4004...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":4004 " ^| findstr "LISTENING"') do (
    taskkill /PID %%a /F >nul 2>&1
)

echo [2] Opening browser in 3 seconds...
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:4004"

echo [3] Starting Next.js dev server on port 4004...
npm run dev -- -p 4004
