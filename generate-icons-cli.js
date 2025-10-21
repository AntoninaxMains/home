#!/usr/bin/env node

/**
 * CLI tool to generate extension icons using Node.js Canvas
 * 使用 Node.js Canvas 生成擴充功能圖示的命令行工具
 */

const fs = require('fs');
const path = require('path');

// 簡單的圖示生成（使用 SVG 轉換）
function createSimpleIcon(size, outputPath) {
    // 創建一個簡單的 SVG
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad)"/>
  <path d="M ${size*0.2} ${size*0.2} L ${size*0.8} ${size*0.2} L ${size*0.8} ${size*0.8} L ${size*0.5} ${size*0.6} L ${size*0.2} ${size*0.8} Z" 
        fill="white" stroke="white" stroke-width="${size*0.08}"/>
  <circle cx="${size*0.7}" cy="${size*0.35}" r="${size*0.08}" fill="#ffd700"/>
</svg>`;
    
    fs.writeFileSync(outputPath, svg);
    console.log(`✓ 已創建 SVG: ${outputPath}`);
}

// 主函數
function main() {
    console.log('📦 開始生成擴充功能圖示...\n');
    
    const sizes = [
        { size: 16, name: 'icon16.svg' },
        { size: 48, name: 'icon48.svg' },
        { size: 128, name: 'icon128.svg' }
    ];
    
    sizes.forEach(({ size, name }) => {
        const outputPath = path.join(__dirname, name);
        createSimpleIcon(size, outputPath);
    });
    
    console.log('\n✅ 所有 SVG 圖示已生成！');
    console.log('\n⚠️  注意：Chrome 擴充功能建議使用 PNG 格式');
    console.log('請使用以下方法之一轉換為 PNG：');
    console.log('  1. 在瀏覽器中打開 create-icons.html');
    console.log('  2. 使用線上轉換工具（如 CloudConvert）');
    console.log('  3. 使用 ImageMagick: convert icon.svg icon.png\n');
}

main();

