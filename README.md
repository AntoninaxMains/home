# Start Page

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-live-success.svg)](https://home.zakk.au)
[![Languages](https://img.shields.io/badge/languages-4-brightgreen.svg)](#-multilingual-support)

**A beautiful, customizable browser start page with dark mode, bookmark management, and multilingual support.**

[🌐 Live Demo](https://home.zakk.au) • [📖 Documentation](#-features) • [🌍 Languages](#-multilingual-support)

</div>

---

## ✨ Features

### 🎨 Visual Customization
- **Multiple Backgrounds**: Choose from gradient presets, custom images, or solid colors
- **Dark Mode**: Elegant dark theme with adjustable depth control
- **Background Blur**: Customizable blur effects with opacity controls
- **Background Filters**: Add white or black overlay filters with adjustable opacity
- **Smooth Animations**: Fluid transitions and micro-interactions throughout the interface

### 🔖 Bookmark Management
- **Category Organization**: Create custom categories to organize your bookmarks
- **Icon Support**: Use emoji, custom image URLs, or auto-fetch site favicons
- **Simple Icons Integration**: Search and select from thousands of brand logos
- **Quick Actions**: Edit and delete bookmarks with hover actions
- **Drag & Drop**: (Coming soon) Reorder bookmarks easily

### 🔍 Smart Search
- **Multiple Search Engines**: Google, Bing, DuckDuckGo, Baidu, or custom engine
- **Search Suggestions**: Real-time suggestions as you type
- **Search History**: Keep track of your recent searches
- **Direct URL Opening**: Automatically detect and open URLs directly
- **Keyboard Shortcuts**: Quick search with Enter key

### 🌍 Multilingual Support
- **English** (en)
- **简体中文** (zh-CN) - Simplified Chinese
- **正體中文** (zh-TW) - Traditional Chinese
- **日本語** (ja) - Japanese
- Auto-detection based on browser language
- Easy language switching from settings

### 📱 Responsive Design
- **Desktop & Mobile**: Fully responsive layout for all screen sizes
- **Touch-Optimized**: Smooth interactions on mobile devices
- **FAB Menu**: Floating action button for quick access on mobile
- **Adaptive UI**: Interface elements adjust to screen size automatically

### 💾 Data Persistence
- **Local Storage**: All data saved in your browser
- **No Server Required**: Completely static, works offline
- **Import/Export**: (Coming soon) Backup and restore your settings
- **Privacy First**: No data collection or external tracking

---

## 🚀 Quick Start

### Option 1: Direct Use
1. Visit [https://home.zakk.au](https://home.zakk.au)
2. Set it as your browser's start page
3. Start customizing!

### Option 2: Self-Hosting
```bash
# Clone the repository
git clone https://github.com/AntoninaxMains/home.git

# Navigate to the directory
cd home

# Open index.html in your browser
# Or serve with any static file server
python -m http.server 8000
# Then visit http://localhost:8000
```

### Option 3: GitHub Pages
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Set source to `main` branch
4. Your start page will be available at `https://yourusername.github.io/home`

---

## 🎯 Usage Guide

### Adding Bookmarks
1. Click the **+ Add Bookmark** button in the top right
2. Fill in the bookmark details:
   - **Name**: Display name for your bookmark
   - **URL**: Website address
   - **Icon**: Emoji, image URL, or use auto-fetch
   - **Category**: Select or create a new category
3. Click **Save**

### Managing Categories
1. Click the **Folder** icon in the top right
2. Create new categories with custom names and icons
3. Rename or delete existing categories
4. Bookmarks from deleted categories return to the main list

### Customizing Appearance
1. Click the **Settings** icon
2. Choose your preferred:
   - **Background Type**: Gradient, image, or solid color
   - **Dark Mode**: Toggle and adjust intensity
   - **Blur Effects**: Enable and adjust blur depth
   - **Overlay Filter**: Add white or black filter layer

### Changing Language
- **Desktop**: Click the globe icon in the top right
- **Mobile**: Open the FAB menu and select language option
- **Settings**: Choose from 4 supported languages

---

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS custom properties
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **Lucide Icons**: Beautiful open-source icon library
- **Simple Icons**: 2000+ brand logos
- **LocalStorage API**: Data persistence

---

## 📁 Project Structure

```
home/
├── index.html          # Main HTML structure
├── app.css            # Styling and themes
├── script.js          # Application logic
├── assets/
│   └── favicon.svg    # Site favicon
└── README.md          # This file
```

---

## 🌈 Customization

### Adding Custom Search Engines
1. Go to Settings → Search Engine
2. Select "Custom"
3. Enter your search URL with `{query}` placeholder
   - Example: `https://example.com/search?q={query}`
4. Click "Save and Apply"

### Custom Background Images
Use any image URL or upload your own:
- **Unsplash**: `https://source.unsplash.com/1920x1080/?nature`
- **Direct URLs**: Any publicly accessible image URL
- **Local Upload**: Images stored in browser cache (max 5MB)

### Theme Customization
Edit CSS custom properties in `app.css`:
```css
:root {
  --primary: #4c6ef5;
  --primary-dark: #364fc7;
  --text: #1a202c;
  --text-subtle: #718096;
  /* Add your custom colors */
}
```

---

## 🐛 Known Issues & Limitations

- Images uploaded to browser cache have a 5MB size limit
- Search suggestions require internet connection
- No cross-browser sync (data stored locally per browser)
- Simple Icons library may take a moment to load

---

## 🗺️ Roadmap

- [ ] Drag & drop bookmark reordering
- [ ] Import/Export settings and bookmarks
- [ ] More search engine presets
- [ ] Custom CSS themes
- [ ] Cloud sync option (optional)
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
