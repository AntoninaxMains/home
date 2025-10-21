#!/bin/bash

# Chrome Extension Verification Script
# 驗證擴充功能文件是否完整

set -e

echo "================================================"
echo "  Chrome 擴充功能檔案驗證工具"
echo "================================================"
echo ""

ERRORS=0
WARNINGS=0

# 顏色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 檢查必需文件
echo "🔍 檢查核心文件..."

check_file() {
    if [ -f "$1" ]; then
        echo -e "  ${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "  ${RED}✗${NC} $1 ${RED}[缺失]${NC}"
        ERRORS=$((ERRORS + 1))
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "  ${GREEN}✓${NC} $1/"
        return 0
    else
        echo -e "  ${RED}✗${NC} $1/ ${RED}[缺失]${NC}"
        ERRORS=$((ERRORS + 1))
        return 1
    fi
}

check_file_warning() {
    if [ -f "$1" ]; then
        echo -e "  ${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "  ${YELLOW}⚠${NC} $1 ${YELLOW}[建議生成]${NC}"
        WARNINGS=$((WARNINGS + 1))
        return 1
    fi
}

# 檢查核心文件
check_file "manifest.json"
check_file "index.html"
check_file "script.js"
check_file "app.css"
check_file "style.css"

echo ""
echo "🎨 檢查圖示文件..."
check_file_warning "icon16.png"
check_file_warning "icon48.png"
check_file_warning "icon128.png"

echo ""
echo "📁 檢查資源資料夾..."
check_dir "assets"
check_dir "i18n"

echo ""
echo "🌍 檢查語言文件..."
if [ -d "i18n" ]; then
    check_file "i18n/en.js"
    check_file "i18n/zh-CN.js"
    check_file "i18n/zh-TW.js"
    check_file "i18n/ja.js"
fi

echo ""
echo "📋 檢查 manifest.json 內容..."

if [ -f "manifest.json" ]; then
    # 檢查 JSON 格式
    if command -v jq &> /dev/null; then
        if jq empty manifest.json 2>/dev/null; then
            echo -e "  ${GREEN}✓${NC} JSON 格式正確"
        else
            echo -e "  ${RED}✗${NC} JSON 格式錯誤"
            ERRORS=$((ERRORS + 1))
        fi
        
        # 檢查必需欄位
        NAME=$(jq -r '.name' manifest.json 2>/dev/null)
        VERSION=$(jq -r '.version' manifest.json 2>/dev/null)
        MANIFEST_VERSION=$(jq -r '.manifest_version' manifest.json 2>/dev/null)
        
        if [ "$NAME" != "null" ] && [ -n "$NAME" ]; then
            echo -e "  ${GREEN}✓${NC} 名稱: $NAME"
        else
            echo -e "  ${RED}✗${NC} 缺少名稱欄位"
            ERRORS=$((ERRORS + 1))
        fi
        
        if [ "$VERSION" != "null" ] && [ -n "$VERSION" ]; then
            echo -e "  ${GREEN}✓${NC} 版本: $VERSION"
        else
            echo -e "  ${RED}✗${NC} 缺少版本欄位"
            ERRORS=$((ERRORS + 1))
        fi
        
        if [ "$MANIFEST_VERSION" == "3" ]; then
            echo -e "  ${GREEN}✓${NC} Manifest 版本: 3"
        else
            echo -e "  ${YELLOW}⚠${NC} Manifest 版本: $MANIFEST_VERSION ${YELLOW}[建議使用版本 3]${NC}"
            WARNINGS=$((WARNINGS + 1))
        fi
    else
        echo -e "  ${YELLOW}⚠${NC} 未安裝 jq，無法驗證 JSON 格式"
        WARNINGS=$((WARNINGS + 1))
    fi
fi

echo ""
echo "================================================"
echo "  驗證結果"
echo "================================================"
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ 完美！所有文件都已準備就緒${NC}"
    echo ""
    echo "🚀 您可以立即安裝此擴充功能："
    echo "  1. 前往 chrome://extensions/"
    echo "  2. 啟用「開發人員模式」"
    echo "  3. 點擊「載入未封裝項目」"
    echo "  4. 選擇此資料夾"
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  警告: $WARNINGS 個警告${NC}"
    echo ""
    echo "擴充功能可以安裝，但建議："
    if [ ! -f "icon16.png" ] || [ ! -f "icon48.png" ] || [ ! -f "icon128.png" ]; then
        echo "  - 打開 create-icons.html 生成圖示文件"
    fi
    echo ""
    echo "您仍然可以安裝此擴充功能："
    echo "  1. 前往 chrome://extensions/"
    echo "  2. 啟用「開發人員模式」"
    echo "  3. 點擊「載入未封裝項目」"
    echo "  4. 選擇此資料夾"
else
    echo -e "${RED}❌ 錯誤: $ERRORS 個錯誤, $WARNINGS 個警告${NC}"
    echo ""
    echo "請修復上述錯誤後再安裝擴充功能"
fi

echo ""
echo "================================================"

exit $ERRORS

