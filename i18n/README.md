# Translation Files / 翻譯文件

## Structure / 結構

Each language has its own separate file for easier contribution and maintenance:
每個語言都有獨立的文件，方便貢獻和維護：

```
i18n/
├── en.js       # English / 英語
├── zh-CN.js    # Simplified Chinese / 簡體中文
├── zh-TW.js    # Traditional Chinese / 繁體中文
└── ja.js       # Japanese / 日本語
```

## How to Contribute / 如何貢獻

### Adding a New Language / 新增語言

1. Create a new file in this directory with the language code (e.g., `fr.js` for French)
   在此目錄中創建一個新文件，使用語言代碼命名（例如法語用 `fr.js`）

2. Copy the structure from `en.js` and translate all strings
   複製 `en.js` 的結構並翻譯所有字串

3. Update `script.js` to add the language code to `SUPPORTED_LANGUAGES` array
   更新 `script.js`，將語言代碼添加到 `SUPPORTED_LANGUAGES` 陣列

4. Update the language detection logic in `index.html` if needed
   如需要，更新 `index.html` 中的語言偵測邏輯

### Improving Existing Translations / 改進現有翻譯

1. Find the language file you want to improve (e.g., `zh-TW.js`)
   找到你想改進的語言文件（例如 `zh-TW.js`）

2. Edit the translation strings directly
   直接編輯翻譯字串

3. Test your changes by loading the page in that language
   通過載入該語言的頁面來測試你的更改

## File Format / 文件格式

Each translation file should follow this structure:
每個翻譯文件應遵循以下結構：

```javascript
// Language Name Translation
// 語言名稱翻譯

const langCode = {
    // Category 1
    key1: 'Translation 1',
    key2: 'Translation 2',
    
    // Category 2
    key3: 'Translation 3',
    // ...
};
```

## Translation Keys / 翻譯鍵值

All translation keys are defined in `en.js` as the reference. When adding new features, update all language files accordingly.
所有翻譯鍵值在 `en.js` 中作為參考定義。添加新功能時，請相應更新所有語言文件。

## Dynamic Loading / 動態載入

The application automatically loads only the needed language file based on:
應用程式會根據以下條件自動載入所需的語言文件：

1. User's saved language preference (from `localStorage`)
   使用者保存的語言偏好（從 `localStorage`）

2. Browser's language setting (via `navigator.language`)
   瀏覽器的語言設定（通過 `navigator.language`）

3. Default fallback: English
   預設回退：英語

When switching languages, the new language file is loaded on-demand.
切換語言時，會按需載入新的語言文件。

## Contributing / 貢獻

We welcome translation contributions! Please:
我們歡迎翻譯貢獻！請：

- Keep translations concise and natural
  保持翻譯簡潔自然

- Maintain consistent terminology throughout
  在整個翻譯中保持術語一致

- Test your translations in the actual UI
  在實際界面中測試你的翻譯

- Follow the existing code style and comments
  遵循現有的代碼風格和註釋

Thank you for helping make this project accessible to more users!
感謝你幫助這個專案讓更多用戶使用！
