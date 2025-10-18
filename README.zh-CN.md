# Start Page / 开始页

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-在线演示-success.svg)](https://home.zakk.au)
[![Languages](https://img.shields.io/badge/languages-4-brightgreen.svg)](#-多语言支持)

**一个精美、可自定义的浏览器起始页，具有暗色模式、书签管理和多语言支持。**

[🌐 在线演示](https://home.zakk.au) • [📖 文档](#-功能特性) • [🌍 语言](#-多语言支持)

**其他语言:** [English](README.en.md) | [正體中文](README.zh-TW.md) | [日本語](README.ja.md)

</div>

---

## ✨ 功能特性

### 🎨 视觉定制
- **多种背景**：渐变预设、自定义图片或纯色背景
- **暗色模式**：优雅的暗色主题，可调节深度
- **背景模糊**：可自定义的模糊效果和透明度
- **背景滤镜**：添加白色或黑色叠加滤镜
- **流畅动画**：整个界面的流畅过渡和微交互

### 🔖 书签管理
- **分类组织**：创建自定义分类来组织你的书签
- **图标支持**：使用表情符号、自定义图片URL或自动获取网站图标
- **Simple Icons 集成**：从数千个品牌徽标中搜索和选择
- **快速操作**：悬停时编辑和删除书签
- **拖放**：（即将推出）轻松重新排序书签

### 🔍 智能搜索
- **多搜索引擎**：Google、Bing、DuckDuckGo、百度或自定义引擎
- **搜索建议**：输入时实时建议
- **搜索历史**：跟踪你最近的搜索
- **直接打开URL**：自动检测并直接打开URL
- **键盘快捷键**：按Enter键快速搜索

### 🌍 多语言支持
- **English** (en) - 英语
- **简体中文** (zh-CN) - 简体中文
- **正體中文** (zh-TW) - 繁体中文
- **日本語** (ja) - 日语
- 根据浏览器语言自动检测
- 从设置中轻松切换语言

### 📱 响应式设计
- **桌面和移动端**：所有屏幕尺寸的完全响应式布局
- **触摸优化**：移动设备上的流畅交互
- **FAB菜单**：移动端快速访问的浮动操作按钮
- **自适应UI**：界面元素自动适应屏幕尺寸

### 💾 数据持久化
- **本地存储**：所有数据保存在你的浏览器中
- **无需服务器**：完全静态，可离线工作
- **导入/导出**：（即将推出）备份和恢复你的设置
- **隐私优先**：无数据收集或外部跟踪

---

## 🚀 快速开始

### 方式1：直接使用
1. 访问 [https://home.zakk.au](https://home.zakk.au)
2. 将其设置为浏览器的起始页
3. 开始自定义！

### 方式2：自托管
```bash
# 克隆仓库
git clone https://github.com/AntoninaxMains/home.git

# 进入目录
cd home

# 在浏览器中打开 index.html
# 或使用任何静态文件服务器
python -m http.server 8000
# 然后访问 http://localhost:8000
```

### 方式3：GitHub Pages
1. Fork 这个仓库
2. 在仓库设置中启用 GitHub Pages
3. 将源设置为 `main` 分支
4. 你的起始页将可在 `https://yourusername.github.io/home` 访问

---

## 🎯 使用指南

### 添加书签
1. 点击右上角的 **+ 新增书签** 按钮
2. 填写书签详情：
   - **名称**：书签的显示名称
   - **URL**：网站地址
   - **图标**：表情符号、图片URL或使用自动获取
   - **分类**：选择或创建新分类
3. 点击 **保存**

### 管理分类
1. 点击右上角的 **文件夹** 图标
2. 创建带有自定义名称和图标的新分类
3. 重命名或删除现有分类
4. 被删除分类中的书签返回到主列表

### 自定义外观
1. 点击 **设置** 图标
2. 选择你喜欢的：
   - **背景类型**：渐变、图片或纯色
   - **暗色模式**：切换并调整强度
   - **模糊效果**：启用并调整模糊深度
   - **叠加滤镜**：添加白色或黑色滤镜层

### 更改语言
- **桌面端**：点击右上角的地球图标
- **移动端**：打开FAB菜单并选择语言选项
- **设置**：从4种支持的语言中选择

---

## 🛠️ 技术栈

- **HTML5**：语义化标记
- **CSS3**：使用CSS自定义属性的现代样式
- **Vanilla JavaScript**：无框架，纯ES6+
- **Lucide Icons**：精美的开源图标库
- **Simple Icons**：2000+品牌徽标
- **LocalStorage API**：数据持久化

---

## 📁 项目结构

```
home/
├── index.html          # 主HTML结构
├── app.css            # 样式和主题
├── script.js          # 应用逻辑
├── i18n/
│   └── translations.js # 翻译文件
├── assets/
│   └── favicon.svg    # 网站图标
└── README.md          # 文档
```

---

## 🙏 致谢

### 翻译贡献者
特别感谢所有帮助这个项目实现多语言的贡献者：

- **English (en)**：原始翻译
- **简体中文 (zh-CN)**：简体中文翻译支持
- **正體中文 (zh-TW)**：繁体中文翻译支持
- **日本語 (ja)**：日语翻译支持

你们的贡献使这个项目能够服务全球用户！🌍

### 开源项目
本项目离不开这些优秀的开源库：

- [**Lucide Icons**](https://lucide.dev/) - 精美且一致的图标集
- [**Simple Icons**](https://simpleicons.org/) - 流行品牌的SVG图标
- [**Unsplash**](https://unsplash.com/) - 高质量免费图片

---

## 💬 支持

- **在线演示**：[https://home.zakk.au](https://home.zakk.au)
- **问题反馈**：[GitHub Issues](https://github.com/AntoninaxMains/home/issues)
- **讨论**：[GitHub Discussions](https://github.com/AntoninaxMains/home/discussions)

---

<div align="center">

**用 ❤️ 由社区制作**

如果你觉得这个项目有帮助，请考虑给它一个 ⭐️！

[⬆ 回到顶部](#start-page--开始页)

</div>
