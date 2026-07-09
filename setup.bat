@echo off
color 0A
cls

echo.
echo ════════════════════════════════════════════════════════════════
echo          SAGE COUTURE USA - Setup Script
echo ════════════════════════════════════════════════════════════════
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    color 0C
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org
    echo Then run this script again.
    pause
    exit /b 1
)

:: Check Node version
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js found: %NODE_VERSION%
echo.

:: Install dependencies
echo Installing dependencies... this may take a few minutes...
echo.
call npm install

if %errorlevel% neq 0 (
    color 0C
    echo ERROR: npm install failed!
    pause
    exit /b 1
)

echo.
color 0A
echo ════════════════════════════════════════════════════════════════
echo          Setup Complete! ✓
echo ════════════════════════════════════════════════════════════════
echo.
echo Next steps:
echo.
echo 1. Run the dev server:
echo    npm run dev
echo.
echo 2. Open your browser:
echo    http://localhost:3000
echo.
echo 3. Read QUICK_START.md for testing guide
echo.
echo ════════════════════════════════════════════════════════════════
echo.

pause
