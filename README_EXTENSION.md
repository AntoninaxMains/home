# 🎯 My Start Page - Chrome Extension

A beautiful, feature-rich custom new tab page and homepage Chrome extension.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Chrome](https://img.shields.io/badge/Chrome-Extension-green.svg)
![License](https://img.shields.io/badge/license-MIT-orange.svg)

[繁體中文](README.chrome-extension.md) | [簡體中文](README.zh-CN.md) | English

## ✨ Features

- 🔍 **Multiple Search Engines** - Google, Bing, DuckDuckGo, Baidu, and more
- 📚 **Bookmark Management** - Custom bookmarks and categories
- 🌍 **Multi-language** - English, Traditional Chinese, Simplified Chinese, Japanese
- 🎨 **Custom Appearance** - Gradient, image, or solid color backgrounds
- 🌙 **Dark Mode** - Eye-friendly dark theme
- 🌤️ **Weather Widget** - Real-time local weather information
- 💨 **Background Blur** - Make content stand out
- 📱 **Responsive Design** - Perfect for desktop and mobile
- 🎯 **Search Suggestions** - Real-time search history and suggestions
- ⚡ **Quick Actions** - Convenient shortcuts and action buttons

## 📦 Installation

### Quick Install (3 Steps)

#### Step 1: Generate Icons

Icons are already generated! You should see:
- `icon16.png` (16×16)
- `icon48.png` (48×48)
- `icon128.png` (128×128)

If not, run:
```bash
./generate-icons.sh
```

Or open `create-icons.html` in your browser.

#### Step 2: Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "**Developer mode**" in the top right
3. Click "**Load unpacked**"
4. Select this project folder
5. Done!

#### Step 3: Test

Press `Ctrl+T` (or `Cmd+T` on Mac) to open a new tab. You should see your custom start page!

## 🎨 Features Overview

### Search
- Multiple search engines (Google, Bing, DuckDuckGo, Baidu, etc.)
- Custom search engine support
- Search suggestions and history
- Direct URL opening

### Bookmarks
- Custom bookmark management
- Category organization
- Auto-fetch favicon
- Drag and drop support

### Appearance
- Gradient backgrounds (6 presets)
- Custom image backgrounds
- Solid color backgrounds
- Background blur effect
- Dark mode with adjustable intensity

### Weather
- Real-time weather data (powered by Open-Meteo)
- City search
- Temperature and conditions
- Wind speed information

### Localization
- English
- Traditional Chinese (zh-TW)
- Simplified Chinese (zh-CN)
- Japanese (ja)

## 🛠️ Development

### File Structure

```
my-start-page/
├── manifest.json          # Extension configuration
├── index.html             # Main page
├── script.js              # Main JavaScript
├── app.css                # Styles
├── style.css              # Style entry
├── icon*.png              # Extension icons
├── assets/                # Assets folder
│   ├── *.svg              # Various icons
│   └── weather/           # Weather icons
└── i18n/                  # Language files
    ├── en.js              # English
    ├── zh-CN.js           # Simplified Chinese
    ├── zh-TW.js           # Traditional Chinese
    └── ja.js              # Japanese
```

### Scripts

- `generate-icons.sh` - Generate extension icons from SVG
- `verify.sh` - Verify all required files are present
- `package.sh` - Package extension for distribution

### Technologies

- Manifest V3 (latest version)
- Vanilla JavaScript (no framework dependencies)
- CSS3 with modern features
- localStorage for data persistence
- Lucide Icons (from CDN)

## 📖 Usage Guide

### Basic Operations

1. **Search**: Enter keywords in the search box, press Enter or click "Search"
2. **Switch Search Engine**: Click the engine icon on the left of the search box
3. **Add Bookmark**: Click the "+" button in the top right
4. **Manage Categories**: Click the folder icon in the top right
5. **Open Settings**: Click the gear icon in the top right

### Advanced Features

#### Custom Background

1. Click the settings button in the top right
2. Select "Background Settings"
3. Choose from:
   - **Gradient**: Multiple preset gradients
   - **Image**: Enter image URL or upload local image
   - **Solid Color**: Choose any color

#### Weather Widget

1. Enable "Weather Widget" in settings
2. Search and select your city
3. Weather information will be displayed on the page
4. Data source: Open-Meteo (free, no API key required)

#### Dark Mode

1. Click the moon icon in the top right to toggle quickly
2. Or adjust the dark intensity in settings

## 🔄 Updating the Extension

After modifying any files:

1. Go to `chrome://extensions/`
2. Find "My Start Page" extension
3. Click the refresh button 🔄

## 🌐 Set as Homepage (Optional)

To also set this page as your Chrome homepage:

1. Click the three dots (⋮) in Chrome's top right
2. Select "**Settings**"
3. In the "Appearance" section:
   - Enable "**Show home button**"
   - Select "**Enter custom web address**"
   - Enter: `chrome-extension://[YOUR_EXTENSION_ID]/index.html`
4. Extension ID can be found on the `chrome://extensions/` page

## 🚀 Performance

- ✅ Uses localStorage for fast loading
- ✅ WebP images for smaller file size
- ✅ Modern CSS features with smooth animations
- ✅ Minimal external dependencies (only Lucide Icons)
- ✅ Responsive design for all screen sizes

## 📱 Compatibility

- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Brave (Chromium-based)
- ✅ Opera (Chromium-based)
- ⚠️ Firefox requires modifying manifest.json (use manifest_version: 2)

## ❓ FAQ

### Q: Why can't the extension load?

**A**: Check:
- "Developer mode" is enabled
- Folder contains `manifest.json`
- Icon files exist (use `generate-icons.sh` to create them)

### Q: New tab page shows nothing?

**A**: Verify:
- Extension is installed and enabled
- No other new tab page extensions conflict
- Try reloading the extension

### Q: Weather widget doesn't work?

**A**: Check:
- Network connection is working
- City is correctly selected
- Browser console for error messages

### Q: Background image doesn't show?

**A**: Confirm:
- Image URL is valid
- Image source allows cross-origin access
- Or try uploading a local image

## 🔒 Privacy

- ✅ All data stored locally (localStorage)
- ✅ No personal information collected
- ✅ Weather data from Open-Meteo (free public service)
- ✅ Search history stored locally only
- ✅ No data sent to any server

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute.

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📮 Contact

For questions or suggestions:
- GitHub Issues
- Email: your-email@example.com

## 🎉 Credits

- Icons: [Lucide Icons](https://lucide.dev/)
- Weather Data: [Open-Meteo](https://open-meteo.com/)
- Geocoding: [OpenStreetMap Nominatim](https://nominatim.org/)

---

**Enjoy your custom start page!** 🚀

