# Start Page / 開始頁

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-線上展示-success.svg)](https://home.zakk.au)
[![Languages](https://img.shields.io/badge/languages-4-brightgreen.svg)](#-多語言支援)

**一個精美、可自訂的瀏覽器起始頁，具有夜間模式、書籤管理和多語言支援。**

[🌐 線上展示](https://home.zakk.au) • [📖 文件](#-功能特色) • [🌍 語言](#-多語言支援)

**其他語言:** [English](README.en.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md)

</div>

---

## ✨ 功能特色

### 🎨 視覺自訂
- **多種背景**：漸層預設、自訂圖片或純色背景
- **夜間模式**：優雅的夜間主題，可調節深度
- **背景模糊**：可自訂的模糊效果和透明度
- **背景濾鏡**：新增白色或黑色疊加濾鏡
- **流暢動畫**：整個介面的流暢過渡和微互動

### 🔖 書籤管理
- **分類組織**：建立自訂分類來組織你的書籤
- **圖示支援**：使用表情符號、自訂圖片URL或自動抓取網站圖示
- **Simple Icons 整合**：從數千個品牌標誌中搜尋和選擇
- **快速操作**：懸停時編輯和刪除書籤
- **拖放**：（即將推出）輕鬆重新排序書籤

### 🔍 智慧搜尋
- **多搜尋引擎**：Google、Bing、DuckDuckGo、百度或自訂引擎
- **搜尋建議**：輸入時即時建議
- **搜尋歷史**：追蹤你最近的搜尋
- **直接開啟URL**：自動偵測並直接開啟URL
- **鍵盤快捷鍵**：按Enter鍵快速搜尋

### 🌍 多語言支援
- **English** (en) - 英語
- **简体中文** (zh-CN) - 簡體中文
- **正體中文** (zh-TW) - 繁體中文
- **日本語** (ja) - 日語
- 根據瀏覽器語言自動偵測
- 從設定中輕鬆切換語言

### 📱 響應式設計
- **桌面和行動裝置**：所有螢幕尺寸的完全響應式版面配置
- **觸控最佳化**：行動裝置上的流暢互動
- **FAB選單**：行動端快速存取的懸浮操作按鈕
- **自適應UI**：介面元素自動適應螢幕尺寸

### 💾 資料持久化
- **本地儲存**：所有資料儲存在你的瀏覽器中
- **無需伺服器**：完全靜態，可離線工作
- **匯入/匯出**：（即將推出）備份和還原你的設定
- **隱私優先**：無資料收集或外部追蹤

---

## 🚀 快速開始

### 方式1：直接使用
1. 造訪 [https://home.zakk.au](https://home.zakk.au)
2. 將其設定為瀏覽器的起始頁
3. 開始自訂！

### 方式2：自行架設
```bash
# 複製儲存庫
git clone https://github.com/AntoninaxMains/home.git

# 進入目錄
cd home

# 在瀏覽器中開啟 index.html
# 或使用任何靜態檔案伺服器
python -m http.server 8000
# 然後造訪 http://localhost:8000
```

### 方式3：GitHub Pages
1. Fork 這個儲存庫
2. 在儲存庫設定中啟用 GitHub Pages
3. 將來源設定為 `main` 分支
4. 你的起始頁將可在 `https://yourusername.github.io/home` 造訪

---

## 🎯 使用指南

### 新增書籤
1. 點擊右上角的 **+ 新增書籤** 按鈕
2. 填寫書籤詳情：
   - **名稱**：書籤的顯示名稱
   - **URL**：網站位址
   - **圖示**：表情符號、圖片URL或使用自動抓取
   - **分類**：選擇或建立新分類
3. 點擊 **儲存**

### 管理分類
1. 點擊右上角的 **資料夾** 圖示
2. 建立帶有自訂名稱和圖示的新分類
3. 重新命名或刪除現有分類
4. 被刪除分類中的書籤返回到主列表

### 自訂外觀
1. 點擊 **設定** 圖示
2. 選擇你喜歡的：
   - **背景類型**：漸層、圖片或純色
   - **夜間模式**：切換並調整強度
   - **模糊效果**：啟用並調整模糊深度
   - **疊加濾鏡**：新增白色或黑色濾鏡層

### 變更語言
- **桌面端**：點擊右上角的地球圖示
- **行動端**：開啟FAB選單並選擇語言選項
- **設定**：從4種支援的語言中選擇

---

## 🛠️ 技術堆疊

- **HTML5**：語義化標記
- **CSS3**：使用CSS自訂屬性的現代樣式
- **Vanilla JavaScript**：無框架，純ES6+
- **Lucide Icons**：精美的開源圖示庫
- **Simple Icons**：2000+品牌標誌
- **LocalStorage API**：資料持久化

---

## 📁 專案結構

```
home/
├── index.html          # 主HTML結構
├── app.css            # 樣式和主題
├── script.js          # 應用程式邏輯
├── i18n/
│   └── translations.js # 翻譯檔案
├── assets/
│   └── favicon.svg    # 網站圖示
└── README.md          # 文件
```

---

## 🙏 致謝

### 翻譯貢獻者
特別感謝所有幫助這個專案實現多語言的貢獻者：

- **English (en)**：原始翻譯
- **简体中文 (zh-CN)**：簡體中文翻譯支援
- **正體中文 (zh-TW)**：繁體中文翻譯支援
- **日本語 (ja)**：日語翻譯支援

你們的貢獻使這個專案能夠服務全球使用者！🌍

### 開源專案
本專案離不開這些優秀的開源函式庫：

- [**Lucide Icons**](https://lucide.dev/) - 精美且一致的圖示集
- [**Simple Icons**](https://simpleicons.org/) - 流行品牌的SVG圖示
- [**Unsplash**](https://unsplash.com/) - 高品質免費圖片

---

## 💬 支援

- **線上展示**：[https://home.zakk.au](https://home.zakk.au)
- **問題回報**：[GitHub Issues](https://github.com/AntoninaxMains/home/issues)
- **討論**：[GitHub Discussions](https://github.com/AntoninaxMains/home/discussions)

---

<div align="center">

**用 ❤️ 由社群製作**

如果你覺得這個專案有幫助，請考慮給它一個 ⭐️！

[⬆ 回到頂部](#start-page--開始頁)

</div>
