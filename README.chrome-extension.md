# 🎯 我的起始頁 - Chrome 擴充功能

一個美觀、功能豐富的自訂新標籤頁和主頁 Chrome 擴充功能。

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/AntoninaxMains/home/releases)
[![Chrome](https://img.shields.io/badge/Chrome-Extension-green.svg)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)

[English](README.md) | [繁體中文](README.zh-TW.md) | [簡體中文](README.zh-CN.md) | [日本語](README.ja.md)

## ✨ 功能特點

- 🔍 **多搜尋引擎支援** - Google、Bing、DuckDuckGo、Baidu 等
- 📚 **書籤管理** - 自訂書籤和分類，輕鬆管理常用網站
- 🌍 **多語言介面** - 支援繁體中文、簡體中文、英文、日文
- 🎨 **自訂外觀** - 漸層色、圖片背景、純色背景任你選擇
- 🌙 **夜間模式** - 保護眼睛的深色主題
- 🌤️ **天氣小工具** - 顯示當地即時天氣資訊
- 💨 **背景模糊效果** - 讓內容更突出
- 📱 **響應式設計** - 完美支援桌面和移動裝置
- 🎯 **搜尋建議** - 即時顯示搜尋歷史和建議
- ⚡ **快速操作** - 便捷的快捷鍵和操作按鈕

## 📦 安裝方法

### 方法 1: 從 GitHub Releases 下載（推薦）

1. 前往 [Releases 頁面](https://github.com/AntoninaxMains/home/releases)
2. 下載最新版本的 `my-start-page-x.x.x.zip`
3. 解壓縮文件到任意資料夾
4. 打開 Chrome，前往 `chrome://extensions/`
5. 啟用「**開發人員模式**」
6. 點擊「**載入未封裝項目**」
7. 選擇解壓縮後的資料夾

### 方法 2: 從源碼安裝

#### 克隆倉庫

```bash
git clone git@github.com:AntoninaxMains/home.git
cd home
```

#### 生成圖示

```bash
# Linux/Mac
./generate-icons.sh

# 或在瀏覽器中打開
open create-icons.html
```

#### 載入擴充功能

1. 打開 Chrome，前往 `chrome://extensions/`
2. 啟用「**開發人員模式**」
3. 點擊「**載入未封裝項目**」
4. 選擇本專案資料夾

### 方法 3: 打包並安裝

```bash
# 執行打包腳本
./package.sh

# ZIP 文件會生成在 dist/ 資料夾
# 然後按照方法 1 的步驟 3-7 進行安裝
```

## 🔧 配置說明

### manifest.json

這是 Chrome 擴充功能的核心配置文件：

```json
{
  "manifest_version": 3,
  "name": "我的起始頁",
  "version": "1.0.0",
  "description": "一個美觀的自訂新標籤頁和主頁",
  "chrome_url_overrides": {
    "newtab": "index.html"
  },
  "permissions": ["storage"],
  "host_permissions": ["https://*/*"]
}
```

### 自訂選項

您可以在 `manifest.json` 中自訂以下內容：

- `name`: 擴充功能名稱
- `version`: 版本號
- `description`: 描述文字
- `author`: 作者名稱
- `homepage_url`: 專案主頁

## 🎨 使用指南

### 基本操作

1. **搜尋**: 在搜尋框中輸入關鍵字，按 Enter 或點擊「搜尋」按鈕
2. **切換搜尋引擎**: 點擊搜尋框左側的引擎圖示
3. **新增書籤**: 點擊右上角的「+」按鈕
4. **管理分類**: 點擊右上角的資料夾圖示
5. **開啟設定**: 點擊右上角的齒輪圖示

### 進階功能

#### 自訂背景

1. 點擊右上角的設定按鈕
2. 選擇「背景設定」
3. 可選擇：
   - **漸層色**: 多種預設漸層可選
   - **圖片**: 輸入圖片 URL 或上傳本地圖片
   - **純色**: 選擇任意顏色

#### 天氣小工具

1. 在設定中啟用「天氣小工具」
2. 搜尋並選擇您的城市
3. 天氣資訊會顯示在頁面上
4. 資料來源：Open-Meteo（免費且無需 API 金鑰）

#### 夜間模式

1. 點擊右上角的月亮圖示快速切換
2. 或在設定中調整深色強度

## 🔄 更新擴充功能

當您修改了任何文件後：

1. 前往 `chrome://extensions/`
2. 找到「我的起始頁」擴充功能
3. 點擊刷新按鈕 🔄

## 📂 專案結構

```
my-start-page/
├── manifest.json          # 擴充功能配置文件
├── index.html             # 主頁面
├── script.js              # JavaScript 主腳本
├── app.css                # 主要樣式文件
├── style.css              # 樣式入口文件
├── icon16.png             # 16x16 圖示
├── icon48.png             # 48x48 圖示
├── icon128.png            # 128x128 圖示
├── assets/                # 資源文件夾
│   ├── *.svg              # 各種圖示
│   ├── *.jpg/webp         # 背景圖片
│   └── weather/           # 天氣圖示
├── i18n/                  # 語言文件
│   ├── en.js              # 英文
│   ├── zh-CN.js           # 簡體中文
│   ├── zh-TW.js           # 繁體中文
│   └── ja.js              # 日文
├── create-icons.html      # 圖示生成工具
├── package.sh             # Linux/Mac 打包腳本
├── package.bat            # Windows 打包腳本
└── README.*.md            # 說明文件
```

## 🌐 設定為主頁（可選）

如果您想將此頁面同時設為 Chrome 的主頁：

1. 點擊 Chrome 右上角的三個點 (⋮)
2. 選擇「**設定**」
3. 在「外觀」區段中：
   - 啟用「**顯示首頁按鈕**」
   - 選擇「**輸入自訂網址**」
   - 輸入：`chrome-extension://[您的擴充功能ID]/index.html`
4. 擴充功能 ID 可在 `chrome://extensions/` 頁面找到

## 🚀 效能優化

- ✅ 使用 localStorage 儲存設定，快速載入
- ✅ 圖片使用 WebP 格式，體積更小
- ✅ CSS 使用現代化的特性，流暢動畫
- ✅ 最少的外部依賴（僅 Lucide Icons）
- ✅ 響應式設計，自適應各種螢幕尺寸

## 📱 相容性

- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Brave（基於 Chromium）
- ✅ Opera（基於 Chromium）
- ⚠️ Firefox 需要修改 manifest.json（使用 manifest_version: 2）

## 🛠️ 開發者工具

內建除錯面板功能：

1. 開啟設定
2. 選擇「開發者工具」
3. 啟用「顯示除錯面板」
4. 右下角會顯示即時除錯訊息

## ❓ 常見問題

### Q: 為什麼擴充功能無法載入？

**A**: 請檢查：
- 是否正確啟用「開發人員模式」
- 資料夾中是否包含 `manifest.json`
- 圖示文件是否存在（使用 `create-icons.html` 生成）

### Q: 新標籤頁沒有顯示自訂頁面？

**A**: 請確認：
- 擴充功能已成功安裝並啟用
- 沒有其他新標籤頁擴充功能衝突
- 嘗試重新載入擴充功能

### Q: 天氣小工具無法顯示？

**A**: 請檢查：
- 網路連線是否正常
- 是否正確選擇了城市
- 瀏覽器控制台是否有錯誤訊息

### Q: 背景圖片無法顯示？

**A**: 請確認：
- 圖片 URL 是否有效
- 圖片來源是否允許跨域存取
- 或嘗試上傳本地圖片

### Q: 如何備份我的書籤和設定？

**A**: 所有資料儲存在 `localStorage` 中。您可以：
1. 開啟開發者工具（F12）
2. 前往 Application → Local Storage
3. 複製相關資料
4. 或使用設定中的「匯出資料」功能（如果實作）

## 🔒 隱私說明

- ✅ 所有資料儲存在本地（localStorage）
- ✅ 不收集任何個人資訊
- ✅ 天氣資料來自 Open-Meteo（免費公開服務）
- ✅ 搜尋記錄僅儲存在本地
- ✅ 不向任何伺服器傳送您的瀏覽資料

## 📄 授權

本專案使用 MIT 授權條款。您可以自由使用、修改和分發。

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📮 聯絡方式

如有任何問題或建議，請透過以下方式聯絡：

- GitHub Issues
- Email: your-email@example.com

## 🚀 開發和部署

### 本地開發

```bash
# 克隆倉庫
git clone git@github.com:AntoninaxMains/home.git
cd home

# 生成圖示
./generate-icons.sh

# 驗證文件完整性
./verify.sh

# 在 Chrome 中載入擴充功能進行測試
# chrome://extensions/ → 開發人員模式 → 載入未封裝項目
```

### 打包發布

```bash
# 打包擴充功能
./package.sh

# 生成的 ZIP 文件位於 dist/my-start-page-1.0.0.zip
```

### 發布到 GitHub Releases

```bash
# 1. 提交所有更改
git add -A
git commit -m "chore: Release v1.0.0"

# 2. 創建標籤
git tag -a v1.0.0 -m "Release version 1.0.0"

# 3. 推送代碼和標籤
git push origin main
git push origin v1.0.0

# 4. 前往 GitHub 創建 Release
# https://github.com/AntoninaxMains/home/releases/new
# - 選擇標籤 v1.0.0
# - 填寫發布說明
# - 上傳 dist/my-start-page-1.0.0.zip
# - 發布 Release
```

### 工具腳本

- `generate-icons.sh` - 從 SVG 生成圖示
- `verify.sh` - 驗證文件完整性
- `package.sh` - 打包擴充功能為 ZIP
- `create-icons.html` - 瀏覽器中生成圖示

## 🎉 致謝

- 圖示來源: [Lucide Icons](https://lucide.dev/)
- 天氣資料: [Open-Meteo](https://open-meteo.com/)
- 地理編碼: [OpenStreetMap Nominatim](https://nominatim.org/)

## 📄 授權

本專案使用 MIT 授權條款。詳見 [LICENSE](LICENSE) 文件。

---

**享受您的自訂起始頁！** 🚀

如有問題或建議，歡迎提交 [Issue](https://github.com/AntoninaxMains/home/issues) 或 [Pull Request](https://github.com/AntoninaxMains/home/pulls)。

