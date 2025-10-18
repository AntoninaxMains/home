# Start Page# Start Page



> 一個簡潔、快速且可高度自訂的瀏覽器起始頁，支援多語系、天氣小工具與智慧搜尋建議。> 舒適、快速又可自訂的瀏覽器起始頁，完整支援書籤分類、主題切換、天氣小工具與多語系。



[🌐 線上體驗](https://home.zakk.au) | [English](README.en.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md)[網站體驗 https://home.zakk.au](https://home.zakk.au)



------



## ✨ 核心特色## 為什麼值得一用

- **閃電啟動**：常用圖示與資產全部採本地載入，首頁瞬間就緒。

- 🚀 **極速啟動** - 所有資源本地載入，無需等待- **專注搜尋**：智慧聯想只向遠端搜尋引擎請求，避免打擾既有書籤。

- 🔍 **智慧搜尋** - 支援 Google、Bing、DuckDuckGo、Baidu，即時建議不干擾書籤- **視覺一致**：搜尋卡、書籤卡與天氣卡共用同一組亮/暗色調。

- 🎨 **自適應主題** - 深淺色主題自動切換，支援自訂背景與濾鏡- **掌心大小也好操作**：桌面、平板與手機皆享有順手的版面與 FAB 快捷。

- 📱 **響應式設計** - 完美適配桌面、平板與手機- **永久保存**：所有設定、書籤與分類都保留在瀏覽器中，不需後端服務。

- 🌦️ **天氣小工具** - 整合 Open-Meteo API，搭配 Microsoft Fluent Emoji 動畫圖標

- 🔖 **書籤管理** - 分類整理、自訂圖標、拖曳排序---

- 🌍 **多語系支援** - 內建英文、簡中、繁中、日文

- 💾 **本地儲存** - 所有資料保存在瀏覽器，無需後端## 功能地圖



---### 🔍 搜尋與聯想

- Google、Bing、DuckDuckGo、Baidu 與自訂搜尋引擎自由切換。

## 🎯 功能亮點- 即時顯示建議與歷史紀錄，可辨識 URL 並直接開啟。

- 多語系介面自動偵測，初次進站即可使用系統語言。

### 搜尋與建議

- 多搜尋引擎切換（Google/Bing/DuckDuckGo/Baidu/自訂）### 🔖 書籤與分類

- JSONP 即時建議，支援多語系- 自訂分類、圖示與排序（分類採卡片式排版，附書籤數量提示）。

- 智慧 URL 識別與直接跳轉- 書籤支援 emoji、圖片網址與自動抓取 favicon。

- 搜尋歷史記錄- 每個分類卡提供快速新增書籤與管理捷徑。



### 書籤系統### 🎨 外觀設定

- 卡片式分類管理- 可調整的深淺色主題、背景模糊、覆寫濾鏡與漸層/圖片背景。

- 支援 Emoji、圖片網址、Favicon 自動抓取- 所有設定皆以圖示按鈕呈現，兼具桌面與行動操作體驗。

- 簡易拖曳排序

- 快速新增與編輯### 🌦️ 小工具與附加功能

- 天氣小工具支援城市搜尋、手動刷新與顯示最新更新時間。

### 外觀自訂- 除錯面板、快速清除搜尋歷史與一鍵重置等維護工具。

- 深淺色主題切換- 支援快速鍵與行動端懸浮球，常用操作一步到位。

- 自訂背景（漸層/圖片/純色）

- 背景模糊與濾鏡調整---

- 動畫效果控制

## 快速上手

### 天氣小工具

- 城市搜尋與定位### 直接使用

- Microsoft Fluent Emoji 3D 動畫圖標1. 造訪 [https://home.zakk.au](https://home.zakk.au)。

- 6 種 CSS 動畫效果（漂浮、旋轉、飄移、彈跳、閃爍、淡入淡出）2. 將頁面設為瀏覽器首頁或收藏。

- 手動刷新與時間顯示3. 登入後所有設定都會保存在本機，不需額外註冊。



---### 自行佈署

```bash

## 🚀 快速開始# 取得程式碼

git clone https://github.com/AntoninaxMains/home.git

### 線上使用cd home

1. 訪問 [https://home.zakk.au](https://home.zakk.au)

2. 設為瀏覽器首頁或加入書籤# 以任意靜態伺服器啟動

3. 所有設定自動保存在本地python -m http.server 8000

# 然後於瀏覽器開啟 http://localhost:8000

### 自行部署```

```bash

# 克隆專案---

git clone https://github.com/AntoninaxMains/home.git

cd home## 日常操作指引

- **新增書籤**：點擊右上角「＋」或 FAB 選單的新增書籤，填寫資訊後儲存。

# 啟動本地伺服器- **管理分類**：從分類卡點選「管理分類」即可開啟全新的卡片式管理面板，支援重新命名、換圖示與刪除。

python -m http.server 8000- **調整外觀**：設定 → 夜間模式 / 背景設定 / 顯示效果即可調整顏色、模糊與濾鏡。

# 或使用 Node.js- **天氣設定**：設定 → 天氣，可切換顯示、輸入地點並立即刷新。

npx serve

---

# 瀏覽器開啟 http://localhost:8000

```## 設定速查表

| 區域 | 可調整項目 |

---| --- | --- |

| 夜間模式 | 主題切換、深度滑桿 |

## 📖 使用指南| 背景設定 | 漸層、圖片上傳、純色、覆寫濾鏡 |

| 外觀效果 | 背景模糊、濾鏡透明度 |

### 基本操作| 天氣 | 小工具開關、地點、手動刷新 |

- **新增書籤**：點擊右上角 ➕ 按鈕或 FAB 選單| 開發者工具 | 除錯面板開關 |

- **管理分類**：點擊分類卡片右上角 ⚙️ 圖標| 維護與重置 | 清除搜尋歷史、一鍵重置所有設定 |

- **切換主題**：設定 → 夜間模式

- **更改背景**：設定 → 背景設定---

- **設定天氣**：設定 → 天氣 → 輸入城市名稱

## 在地化與感謝

### 快捷鍵- English (en) — Core contributors

- `Ctrl/Cmd + K` - 快速搜尋- 简体中文 (zh-CN) — 社群翻譯支持

- `Esc` - 關閉彈窗- 正體中文 (zh-TW) — 社群翻譯支持

- 行動裝置：FAB 懸浮按鈕快速操作- 日本語 (ja) — 社群翻譯支持



---感謝所有協助校對與提供建議的朋友，讓首頁在多語系環境下維持一致體驗。



## 🛠️ 技術架構Open source 資源鳴謝：

- [Lucide Icons](https://lucide.dev/)

### 技術棧- [Simple Icons](https://simpleicons.org/)

- **前端**：HTML5 / CSS3 / Vanilla JavaScript- [Open-Meteo](https://open-meteo.com/)

- **圖標**：Lucide Icons + Microsoft Fluent Emoji 3D

- **API**：Open-Meteo (天氣資料)---

- **儲存**：LocalStorage

- **動畫**：CSS Keyframes## 技術堆疊

- **HTML5 / CSS3 / Vanilla JS**：無需框架即可維護。

### 專案結構- **LocalStorage**：所有資料持久化於瀏覽器。

```- **Lucide + Simple Icons**：提供一致的圖示語彙。

home/- **Open-Meteo API**：即時天氣資料來源。

├── index.html          # 主頁面

├── app.css            # 樣式表 (2910+ 行)---

├── script.js          # 核心邏輯 (4156+ 行)

├── i18n/              # 多語系翻譯檔## 開發筆記

│   ├── en.json1. 安裝依賴：無需安裝，專案為純靜態資源。

│   ├── zh-CN.json2. 修改後建議以 `python -m http.server` 或任意靜態伺服器預覽。

│   ├── zh-TW.json3. 主程式碼路徑：`index.html`、`app.css`、`script.js`、`i18n/`。

│   └── ja.json4. 建議於瀏覽器開發工具中清空 localStorage 以測試初次載入情境。

└── assets/            # 靜態資源

    └── weather/       # 天氣圖標 (11 個 PNG)---

```

## 授權

### 核心功能模組專案採用 [MIT 授權](LICENSE)。歡迎 Fork、客製與分享，請保留授權聲明。

- **搜尋系統**：JSONP 多引擎建議、歷史記錄
- **書籤系統**：分類管理、圖標處理、儲存同步
- **主題系統**：深淺色切換、背景自訂、濾鏡效果
- **天氣系統**：城市搜尋、API 整合、動畫圖標
- **國際化**：i18n 系統、語言檢測、動態翻譯

---

## 🌍 多語言支援

本專案支援以下語言：
- 🇺🇸 [English](README.en.md)
- 🇨🇳 [简体中文](README.zh-CN.md)
- 🇹🇼 **正體中文** (當前)
- 🇯🇵 [日本語](README.ja.md)

感謝所有翻譯貢獻者！

---

## 🎨 截圖預覽

### 淺色主題
![Light Theme](https://via.placeholder.com/800x450?text=Light+Theme+Screenshot)

### 深色主題
![Dark Theme](https://via.placeholder.com/800x450?text=Dark+Theme+Screenshot)

### 手機版
![Mobile View](https://via.placeholder.com/400x800?text=Mobile+Screenshot)

---

## 🤝 貢獻指南

歡迎提交 Issue 和 Pull Request！

### 開發流程
1. Fork 本專案
2. 建立特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 翻譯貢獻
如需新增語言支援，請：
1. 複製 `i18n/en.json` 為新語言檔案
2. 翻譯所有字串
3. 在 `script.js` 中註冊新語言
4. 新增對應的 `README.{lang}.md`

---

## 📄 授權

本專案採用 [MIT 授權](LICENSE)。

---

## 🙏 致謝

### 開源專案
- [Lucide Icons](https://lucide.dev/) - 美觀的圖標庫
- [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji) - 天氣動畫圖標
- [Open-Meteo](https://open-meteo.com/) - 免費天氣 API
- [Simple Icons](https://simpleicons.org/) - 品牌圖標

### 社群貢獻
感謝所有 Star、Fork 和提供建議的朋友們！

---

## 📮 聯繫方式

- 🌐 網站：[https://home.zakk.au](https://home.zakk.au)
- 💻 GitHub：[AntoninaxMains/home](https://github.com/AntoninaxMains/home)
- 📧 問題回報：[Issues](https://github.com/AntoninaxMains/home/issues)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/AntoninaxMains">AntoninaxMains</a>
</p>
