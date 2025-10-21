@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM Chrome Extension Packager Script for Windows
REM 用於將起始頁打包成 Chrome 擴充功能

echo ================================================
echo   Chrome 擴充功能打包工具
echo ================================================
echo.

REM 檢查必需文件
echo 🔍 檢查必需文件...

set ERROR=0

if not exist "manifest.json" (
    echo   ❌ 缺少: manifest.json
    set ERROR=1
) else (
    echo   ✓ manifest.json
)

if not exist "index.html" (
    echo   ❌ 缺少: index.html
    set ERROR=1
) else (
    echo   ✓ index.html
)

if not exist "script.js" (
    echo   ❌ 缺少: script.js
    set ERROR=1
) else (
    echo   ✓ script.js
)

if not exist "app.css" (
    echo   ❌ 缺少: app.css
    set ERROR=1
) else (
    echo   ✓ app.css
)

if not exist "style.css" (
    echo   ❌ 缺少: style.css
    set ERROR=1
) else (
    echo   ✓ style.css
)

if !ERROR! equ 1 (
    echo.
    echo ❌ 缺少必需文件，無法繼續打包
    pause
    exit /b 1
)

echo.
echo 🎨 檢查圖示文件...

set ICONS_MISSING=0

if not exist "icon16.png" (
    echo   ⚠️  缺少: icon16.png
    set ICONS_MISSING=1
) else (
    echo   ✓ icon16.png
)

if not exist "icon48.png" (
    echo   ⚠️  缺少: icon48.png
    set ICONS_MISSING=1
) else (
    echo   ✓ icon48.png
)

if not exist "icon128.png" (
    echo   ⚠️  缺少: icon128.png
    set ICONS_MISSING=1
) else (
    echo   ✓ icon128.png
)

if !ICONS_MISSING! equ 1 (
    echo.
    echo ⚠️  警告: 部分圖示文件缺失
    echo 請打開 create-icons.html 生成圖示文件
    echo.
    set /p CONTINUE="是否繼續打包？(y/N) "
    if /i not "!CONTINUE!"=="y" (
        echo 已取消打包
        pause
        exit /b 1
    )
)

echo.
echo ================================================
echo   ✅ 所有檢查通過！
echo ================================================
echo.
echo 📦 擴充功能已準備就緒，可以在 Chrome 中載入
echo.
echo 🚀 安裝步驟:
echo   1. 打開 Chrome 瀏覽器
echo   2. 前往 chrome://extensions/
echo   3. 啟用右上角的「開發人員模式」
echo   4. 點擊「載入未封裝項目」
echo   5. 選擇此資料夾: %CD%
echo   6. 完成！
echo.
echo ================================================
echo.
pause

