#!/bin/bash

# 自動生成擴充功能圖示
# 使用 ImageMagick 或 rsvg-convert 從 SVG 轉換

set -e

echo "================================================"
echo "  擴充功能圖示生成工具"
echo "================================================"
echo ""

# 檢查是否有 SVG 文件
if [ ! -f "assets/favicon.svg" ]; then
    echo "❌ 找不到 assets/favicon.svg"
    exit 1
fi

echo "✓ 找到 assets/favicon.svg"
echo ""

# 檢查可用的轉換工具
CONVERTER=""

if command -v convert &> /dev/null; then
    CONVERTER="imagemagick"
    echo "✓ 找到 ImageMagick"
elif command -v rsvg-convert &> /dev/null; then
    CONVERTER="rsvg"
    echo "✓ 找到 rsvg-convert"
elif command -v inkscape &> /dev/null; then
    CONVERTER="inkscape"
    echo "✓ 找到 Inkscape"
else
    echo "❌ 未找到任何 SVG 轉換工具"
    echo ""
    echo "請安裝以下工具之一："
    echo "  - ImageMagick: sudo apt install imagemagick"
    echo "  - rsvg-convert: sudo apt install librsvg2-bin"
    echo "  - Inkscape: sudo apt install inkscape"
    echo ""
    echo "或者使用瀏覽器打開 create-icons.html 手動生成"
    exit 1
fi

echo ""
echo "🎨 開始生成圖示..."
echo ""

# 生成圖示
generate_icon() {
    local size=$1
    local output="icon${size}.png"
    
    case $CONVERTER in
        imagemagick)
            convert -background none -density 300 -resize ${size}x${size} assets/favicon.svg "$output"
            ;;
        rsvg)
            rsvg-convert -w $size -h $size assets/favicon.svg -o "$output"
            ;;
        inkscape)
            inkscape -w $size -h $size assets/favicon.svg -o "$output"
            ;;
    esac
    
    if [ -f "$output" ]; then
        echo "  ✓ 已生成 $output (${size}x${size})"
    else
        echo "  ❌ 生成 $output 失敗"
    fi
}

generate_icon 16
generate_icon 48
generate_icon 128

echo ""
echo "================================================"
echo "  ✅ 圖示生成完成！"
echo "================================================"
echo ""
echo "已生成的文件："
ls -lh icon*.png 2>/dev/null || echo "  請檢查上述錯誤訊息"
echo ""

