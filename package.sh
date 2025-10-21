#!/bin/bash

# Chrome Extension Packager Script
# 用於將起始頁打包成 Chrome 擴充功能

set -e

EXTENSION_NAME="my-start-page"
VERSION=$(grep '"version"' manifest.json | sed 's/.*"version": "\(.*\)".*/\1/')
OUTPUT_DIR="dist"
ZIP_FILE="${EXTENSION_NAME}-${VERSION}.zip"

echo "================================================"
echo "  Chrome 擴充功能打包工具"
echo "  擴充功能名稱: ${EXTENSION_NAME}"
echo "  版本: ${VERSION}"
echo "================================================"
echo ""

# 檢查必需文件
echo "🔍 檢查必需文件..."
REQUIRED_FILES=(
    "manifest.json"
    "index.html"
    "script.js"
    "app.css"
    "style.css"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ 缺少必需文件: $file"
        exit 1
    fi
    echo "  ✓ $file"
done

# 檢查圖示文件
echo ""
echo "🎨 檢查圖示文件..."
ICON_FILES=("icon16.png" "icon48.png" "icon128.png")
ICONS_MISSING=false

for icon in "${ICON_FILES[@]}"; do
    if [ ! -f "$icon" ]; then
        echo "  ⚠️  缺少: $icon"
        ICONS_MISSING=true
    else
        echo "  ✓ $icon"
    fi
done

if [ "$ICONS_MISSING" = true ]; then
    echo ""
    echo "⚠️  警告: 部分圖示文件缺失"
    echo "請打開 create-icons.html 生成圖示文件"
    echo ""
    read -p "是否繼續打包？(y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "已取消打包"
        exit 1
    fi
fi

# 創建輸出目錄
echo ""
echo "📁 創建輸出目錄..."
mkdir -p "$OUTPUT_DIR"
echo "  ✓ 已創建 $OUTPUT_DIR"

# 創建文件列表
echo ""
echo "📦 準備打包文件..."
FILES_TO_PACK=(
    "manifest.json"
    "index.html"
    "script.js"
    "app.css"
    "style.css"
)

# 添加存在的圖示
for icon in "${ICON_FILES[@]}"; do
    if [ -f "$icon" ]; then
        FILES_TO_PACK+=("$icon")
    fi
done

# 添加資料夾
DIRS_TO_PACK=("assets" "i18n")

# 打包
echo "  正在打包..."
cd "$(dirname "$0")"

# 使用 zip 命令打包
if command -v zip &> /dev/null; then
    # 刪除舊的 zip 文件
    rm -f "${OUTPUT_DIR}/${ZIP_FILE}"
    
    # 打包文件
    zip -q -r "${OUTPUT_DIR}/${ZIP_FILE}" "${FILES_TO_PACK[@]}" "${DIRS_TO_PACK[@]}" \
        -x "*.git*" \
        -x "*node_modules*" \
        -x "*.DS_Store*" \
        -x "*dist/*" \
        -x "*.md" \
        -x "*.txt" \
        -x "create-icons.html" \
        -x "package.sh"
    
    echo "  ✓ 已創建 ZIP 檔案"
else
    echo "  ❌ 未找到 zip 命令，請安裝 zip 工具"
    exit 1
fi

# 顯示結果
echo ""
echo "================================================"
echo "  ✅ 打包完成！"
echo "================================================"
echo ""
echo "📦 輸出文件: ${OUTPUT_DIR}/${ZIP_FILE}"
echo "📏 文件大小: $(du -h "${OUTPUT_DIR}/${ZIP_FILE}" | cut -f1)"
echo ""
echo "🚀 接下來的步驟:"
echo "  1. 前往 chrome://extensions/"
echo "  2. 啟用「開發人員模式」"
echo "  3. 點擊「載入未封裝項目」"
echo "  4. 選擇本專案資料夾"
echo ""
echo "或者解壓縮 ZIP 文件後載入"
echo ""
echo "================================================"

