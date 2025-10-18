# Start Page# Start Page



> A clean, fast, and highly customizable browser start page with multi-language support, weather widget, and intelligent search suggestions.<div align="center">



[🌐 Live Demo](https://home.zakk.au) | [简体中文](README.zh-CN.md) | [繁體中文](README.md) | [日本語](README.ja.md)[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[![Live Demo](https://img.shields.io/badge/demo-live-success.svg)](https://home.zakk.au)

---[![Languages](https://img.shields.io/badge/languages-4-brightgreen.svg)](#-multilingual-support)



## ✨ Key Features**A beautiful, customizable browser start page with dark mode, bookmark management, and multilingual support.**



- 🚀 **Lightning Fast** - All assets loaded locally, zero latency[🌐 Live Demo](https://home.zakk.au) • [📖 Documentation](#-features) • [🌍 Languages](#-multilingual-support)

- 🔍 **Smart Search** - Supports Google, Bing, DuckDuckGo, Baidu with real-time suggestions

- 🎨 **Adaptive Themes** - Auto dark/light mode with custom backgrounds and filters**Read this in other languages:** [简体中文](README.zh-CN.md) | [正體中文](README.zh-TW.md) | [日本語](README.ja.md)

- 📱 **Responsive Design** - Perfect on desktop, tablet, and mobile

- 🌦️ **Weather Widget** - Powered by Open-Meteo API with Microsoft Fluent Emoji animations</div>

- 🔖 **Bookmark Manager** - Category organization, custom icons, drag-to-sort

- 🌍 **Multi-language** - Built-in English, Simplified Chinese, Traditional Chinese, Japanese---

- 💾 **Local Storage** - All data saved in browser, no backend required

## ✨ Features

---

### 🎨 Visual Customization

## 🎯 Feature Highlights- **Multiple Backgrounds**: Choose from gradient presets, custom images, or solid colors

- **Dark Mode**: Elegant dark theme with adjustable depth control

### Search & Suggestions- **Background Blur**: Customizable blur effects with opacity controls

- Multiple search engines (Google/Bing/DuckDuckGo/Baidu/Custom)- **Background Filters**: Add white or black overlay filters with adjustable opacity

- Real-time JSONP suggestions with i18n support- **Smooth Animations**: Fluid transitions and micro-interactions throughout the interface

- Smart URL detection and direct navigation

- Search history tracking###🔖 Bookmark Management

- **Category Organization**: Create custom categories to organize your bookmarks

### Bookmark System- **Icon Support**: Use emoji, custom image URLs, or auto-fetch site favicons

- Card-based category management- **Simple Icons Integration**: Search and select from thousands of brand logos

- Support for Emoji, image URLs, and auto-fetched favicons- **Quick Actions**: Edit and delete bookmarks with hover actions

- Easy drag-and-drop sorting- **Drag & Drop**: (Coming soon) Reorder bookmarks easily

- Quick add and edit

### 🔍 Smart Search

### Appearance Customization- **Multiple Search Engines**: Google, Bing, DuckDuckGo, Baidu, or custom engine

- Dark/light theme toggle- **Search Suggestions**: Real-time suggestions as you type

- Custom backgrounds (gradient/image/solid color)- **Search History**: Keep track of your recent searches

- Background blur and filter adjustments- **Direct URL Opening**: Automatically detect and open URLs directly

- Animation effect controls- **Keyboard Shortcuts**: Quick search with Enter key



### Weather Widget### 🌍 Multilingual Support

- City search and location-based weather- **English** (en)

- Microsoft Fluent Emoji 3D animated icons- **简体中文** (zh-CN) - Simplified Chinese

- 6 CSS animation types (float, rotate, drift, bounce, pulse, fade)- **正體中文** (zh-TW) - Traditional Chinese

- Manual refresh and timestamp display- **日本語** (ja) - Japanese

- Auto-detection based on browser language

---- Easy language switching from settings



## 🚀 Quick Start### 📱 Responsive Design

- **Desktop & Mobile**: Fully responsive layout for all screen sizes

### Online Usage- **Touch-Optimized**: Smooth interactions on mobile devices

1. Visit [https://home.zakk.au](https://home.zakk.au)- **FAB Menu**: Floating action button for quick access on mobile

2. Set as browser homepage or bookmark it- **Adaptive UI**: Interface elements adjust to screen size automatically

3. All settings auto-save locally

### 💾 Data Persistence

### Self-Hosting- **Local Storage**: All data saved in your browser

```bash- **No Server Required**: Completely static, works offline

# Clone the repository- **Import/Export**: (Coming soon) Backup and restore your settings

git clone https://github.com/AntoninaxMains/home.git- **Privacy First**: No data collection or external tracking

cd home

---

# Start local server

python -m http.server 8000## 🚀 Quick Start

# Or using Node.js

npx serve### Option 1: Direct Use

1. Visit [https://home.zakk.au](https://home.zakk.au)

# Open http://localhost:8000 in browser2. Set it as your browser's start page

```3. Start customizing!



---### Option 2: Self-Hosting

```bash

## 📖 User Guide# Clone the repository

git clone https://github.com/AntoninaxMains/home.git

### Basic Operations

- **Add Bookmark**: Click ➕ button (top-right) or FAB menu# Navigate to the directory

- **Manage Categories**: Click ⚙️ icon on category cardscd home

- **Switch Theme**: Settings → Night Mode

- **Change Background**: Settings → Background Settings# Open index.html in your browser

- **Set Weather**: Settings → Weather → Enter city name# Or serve with any static file server

python -m http.server 8000

### Keyboard Shortcuts# Then visit http://localhost:8000

- `Ctrl/Cmd + K` - Quick search```

- `Esc` - Close modals

- Mobile: FAB floating button for quick actions### Option 3: GitHub Pages

1. Fork this repository

---2. Enable GitHub Pages in repository settings

3. Set source to `main` branch

## 🛠️ Technical Architecture4. Your start page will be available at `https://yourusername.github.io/home`



### Tech Stack---

- **Frontend**: HTML5 / CSS3 / Vanilla JavaScript

- **Icons**: Lucide Icons + Microsoft Fluent Emoji 3D## 🎯 Usage Guide

- **API**: Open-Meteo (Weather data)

- **Storage**: LocalStorage### Adding Bookmarks

- **Animation**: CSS Keyframes1. Click the **+ Add Bookmark** button in the top right

2. Fill in the bookmark details:

### Project Structure   - **Name**: Display name for your bookmark

```   - **URL**: Website address

home/   - **Icon**: Emoji, image URL, or use auto-fetch

├── index.html          # Main page   - **Category**: Select or create a new category

├── app.css            # Stylesheet (2910+ lines)3. Click **Save**

├── script.js          # Core logic (4156+ lines)

├── i18n/              # Translation files### Managing Categories

│   ├── en.json1. Click the **Folder** icon in the top right

│   ├── zh-CN.json2. Create new categories with custom names and icons

│   ├── zh-TW.json3. Rename or delete existing categories

│   └── ja.json4. Bookmarks from deleted categories return to the main list

└── assets/            # Static resources

    └── weather/       # Weather icons (11 PNGs)### Customizing Appearance

```1. Click the **Settings** icon

2. Choose your preferred:

### Core Modules   - **Background Type**: Gradient, image, or solid color

- **Search System**: JSONP multi-engine suggestions, history tracking   - **Dark Mode**: Toggle and adjust intensity

- **Bookmark System**: Category management, icon handling, storage sync   - **Blur Effects**: Enable and adjust blur depth

- **Theme System**: Dark/light toggle, background customization, filter effects   - **Overlay Filter**: Add white or black filter layer

- **Weather System**: City search, API integration, animated icons

- **Internationalization**: i18n system, language detection, dynamic translation### Changing Language

- **Desktop**: Click the globe icon in the top right

---- **Mobile**: Open the FAB menu and select language option

- **Settings**: Choose from 4 supported languages

## 🌍 Multi-language Support

---

This project supports the following languages:

- 🇺🇸 **English** (Current)## 🛠️ Technology Stack

- 🇨🇳 [简体中文](README.zh-CN.md)

- 🇹🇼 [繁體中文](README.md)- **HTML5**: Semantic markup

- 🇯🇵 [日本語](README.ja.md)- **CSS3**: Modern styling with CSS custom properties

- **Vanilla JavaScript**: No frameworks, pure ES6+

Thanks to all translation contributors!- **Lucide Icons**: Beautiful open-source icon library

- **Simple Icons**: 2000+ brand logos

---- **LocalStorage API**: Data persistence



## 🎨 Screenshots---



### Light Theme## 📁 Project Structure

![Light Theme](https://via.placeholder.com/800x450?text=Light+Theme+Screenshot)

```

### Dark Themehome/

![Dark Theme](https://via.placeholder.com/800x450?text=Dark+Theme+Screenshot)├── index.html          # Main HTML structure

├── app.css            # Styling and themes

### Mobile View├── script.js          # Application logic

![Mobile View](https://via.placeholder.com/400x800?text=Mobile+Screenshot)├── i18n/

│   └── translations.js # Translation files

---├── assets/

│   └── favicon.svg    # Site favicon

## 🤝 Contributing└── README.md          # Documentation

```

Issues and Pull Requests are welcome!

---

### Development Workflow

1. Fork this repository## 🌈 Customization

2. Create feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit changes (`git commit -m 'Add some AmazingFeature'`)### Adding Custom Search Engines

4. Push to branch (`git push origin feature/AmazingFeature`)1. Go to Settings → Search Engine

5. Open Pull Request2. Select "Custom"

3. Enter your search URL with `{query}` placeholder

### Translation Contributions   - Example: `https://example.com/search?q={query}`

To add a new language:4. Click "Save and Apply"

1. Copy `i18n/en.json` to new language file

2. Translate all strings### Custom Background Images

3. Register new language in `script.js`Use any image URL or upload your own:

4. Add corresponding `README.{lang}.md`- **Unsplash**: `https://source.unsplash.com/1920x1080/?nature`

- **Direct URLs**: Any publicly accessible image URL

---- **Local Upload**: Images stored in browser cache (max 5MB)



## 📄 License### Theme Customization

Edit CSS custom properties in `app.css`:

This project is licensed under the [MIT License](LICENSE).```css

:root {

---  --primary: #4c6ef5;

  --primary-dark: #364fc7;

## 🙏 Acknowledgments  --text: #1a202c;

  --text-subtle: #718096;

### Open Source Projects  /* Add your custom colors */

- [Lucide Icons](https://lucide.dev/) - Beautiful icon library}

- [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji) - Weather animated icons```

- [Open-Meteo](https://open-meteo.com/) - Free weather API

- [Simple Icons](https://simpleicons.org/) - Brand icons---



### Community## 🐛 Known Issues & Limitations

Thanks to everyone who starred, forked, and contributed to this project!

- Images uploaded to browser cache have a 5MB size limit

---- Search suggestions require internet connection

- No cross-browser sync (data stored locally per browser)

## 📮 Contact- Simple Icons library may take a moment to load



- 🌐 Website: [https://home.zakk.au](https://home.zakk.au)---

- 💻 GitHub: [AntoninaxMains/home](https://github.com/AntoninaxMains/home)

- 📧 Report Issues: [Issues](https://github.com/AntoninaxMains/home/issues)## 🗺️ Roadmap



---- [ ] Drag & drop bookmark reordering

- [ ] Import/Export settings and bookmarks

<p align="center">- [ ] More search engine presets

  Made with ❤️ by <a href="https://github.com/AntoninaxMains">AntoninaxMains</a>- [ ] Custom CSS themes

</p>- [ ] Cloud sync option (optional)

- [ ] Weather widget
- [ ] Quick notes feature
- [ ] Keyboard shortcuts customization

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

### Translation Contributors
Special thanks to all contributors who helped make this project multilingual:

- **English (en)**: Original translation
- **简体中文 (zh-CN)**: Simplified Chinese translation support
- **正體中文 (zh-TW)**: Traditional Chinese translation support  
- **日本語 (ja)**: Japanese translation support

Your contributions make this project accessible to users worldwide! 🌍

### Open Source Projects
This project wouldn't be possible without these amazing open-source libraries:

- [**Lucide Icons**](https://lucide.dev/) - Beautiful & consistent icon set
- [**Simple Icons**](https://simpleicons.org/) - SVG icons for popular brands
- [**Unsplash**](https://unsplash.com/) - High-quality free images

### Inspiration
- Modern browser start pages and new tab extensions
- Material Design and Fluent Design principles
- Community feedback and feature requests

---

## 💬 Support

- **Live Demo**: [https://home.zakk.au](https://home.zakk.au)
- **Issues**: [GitHub Issues](https://github.com/AntoninaxMains/home/issues)
- **Discussions**: [GitHub Discussions](https://github.com/AntoninaxMains/home/discussions)

---

<div align="center">

**Made with ❤️ by the community**

If you find this project helpful, please consider giving it a ⭐️!

[⬆ Back to Top](#start-page)

</div>
