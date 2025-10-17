// 多語言配置
const translations = {
    'en': {
        // Hero
        heroTitle: 'Start Page',
        heroSubtitle: 'Quick search and manage your bookmarks, all starts here.',
        // Search
        searchPlaceholder: 'Search anything...',
        searchButton: 'Search',
        // Toolbar
        addBookmark: 'Add Bookmark',
        manageCategories: 'Manage Categories',
        settings: 'Settings',
        // Bookmarks
        myBookmarks: 'My Bookmarks',
        bookmarksDesc: 'Your frequently visited sites, click to open.',
        noBookmarks: 'No bookmarks yet, click the button above to add!',
        // Modals
        addBookmarkTitle: 'Add Bookmark',
        editBookmarkTitle: 'Edit Bookmark',
        categoryLabel: 'Category',
        nameLabel: 'Name',
        urlLabel: 'URL',
        iconLabel: 'Icon',
        autoFetch: 'Auto Fetch',
        save: 'Save',
        cancel: 'Cancel',
        done: 'Done',
        mainList: 'Main List (No Category)',
        newCategory: '+ Create New Category',
        enterNewCategory: 'Enter new category',
        enterCategoryName: 'Enter new category name',
        namePlaceholder: 'Website name',
        urlPlaceholder: 'https://example.com',
        iconPlaceholder: '🌐 Emoji or image URL',
        iconHint: 'Enter emoji, image URL, or use auto fetch',
        iconSearch: 'Search Icon',
        manageCategoriesTitle: 'Manage Categories',
        categoriesDesc: 'Create categories to organize bookmarks. When a category is deleted, bookmarks return to main list.',
        noCategories: 'No categories yet',
        addCategoryBtn: '+ Add',
        deleteCategory: 'Delete',
        // Settings
        settingsTitle: 'Settings',
        searchEngineSection: 'Search Engine',
        customSearchUrl: 'Custom Search Engine URL',
        customSearchHint: 'Use {query} as the search keyword placeholder',
        backgroundSection: 'Background Settings',
        backgroundType: 'Background Type',
        gradient: 'Gradient',
        image: 'Image',
        solidColor: 'Solid Color',
        selectGradient: 'Select Gradient',
        imageUrl: 'Image URL',
        imageHint: 'Tip: Use Unsplash, e.g. https://source.unsplash.com/1920x1080/?nature',
        selectColor: 'Select Color',
        appearanceSection: 'Display Effects (Appearance)',
        backgroundBlur: 'Background Blur',
        enableBlur: 'Enable Background Blur',
        blurDepth: 'Blur Depth',
        backgroundFilter: 'Background Filter',
        filterNone: 'None',
        filterWhite: 'White Filter',
        filterBlack: 'Black Filter',
        filterOpacity: 'Filter Opacity',
        languageSection: 'Language',
        selectLanguage: 'Select Language',
        darkModeSection: 'Dark Mode',
        enableDarkMode: 'Enable Dark Mode',
        darkModeDepth: 'Dark Mode Depth',
        // Gradient presets
        gradientDefault: 'Sky Blue',
        gradientSunset: 'Sunset Orange',
        gradientOcean: 'Ocean Blue',
        gradientPurple: 'Dreamy Purple',
        gradientGreen: 'Forest Green',
        gradientDark: 'Starry Night',
        // Alerts
        alertFillRequired: 'Please fill in name and URL',
        alertEnterCategory: 'Please enter new category name',
        alertCategoryExists: 'This category already exists',
        alertDeleteBookmark: 'Are you sure you want to delete this bookmark?',
        alertDeleteCategory: 'Are you sure you want to delete "{category}" category?\nBookmarks in this category will be moved to main list.',
        alertSetCustomUrl: 'Please set custom search engine URL first',
        alertIconFetched: 'Icon automatically filled!',
        alertInvalidUrl: 'Please confirm URL format is correct'
    },
    'zh-CN': {
        // Hero
        heroTitle: 'Start Page',
        heroSubtitle: '快速搜索、管理收藏，一切从这里开始。',
        // Search
        searchPlaceholder: '搜索任何内容...',
        searchButton: '搜索',
        // Toolbar
        addBookmark: '新增书签',
        manageCategories: '管理分类',
        settings: '设置',
        // Bookmarks
        myBookmarks: '我的书签',
        bookmarksDesc: '常用网站都在这里，点击即可打开。',
        noBookmarks: '还没有书签，点击上方按钮新增！',
        // Modals
        addBookmarkTitle: '新增书签',
        editBookmarkTitle: '编辑书签',
        categoryLabel: '分类',
        nameLabel: '名称',
        urlLabel: '网址',
        iconLabel: '图标',
        autoFetch: '自动抓取',
        save: '保存',
        cancel: '取消',
        done: '完成',
        mainList: '主列表（不分类）',
        newCategory: '+ 建立新分类',
        enterNewCategory: '输入新分类',
        enterCategoryName: '输入新分类名称',
        namePlaceholder: '网站名称',
        urlPlaceholder: 'https://example.com',
        iconPlaceholder: '🌐 Emoji 或图片网址',
        iconHint: '可输入 Emoji、图片网址，或使用自动抓取',
        iconSearch: '搜索图标',
        manageCategoriesTitle: '管理分类',
        categoriesDesc: '建立分类来整理书签。删除分类时，书签会回到主列表。',
        noCategories: '还没有分类',
        addCategoryBtn: '+ 新增',
        deleteCategory: '删除',
        // Settings
        settingsTitle: '设置',
        searchEngineSection: '搜索引擎',
        customSearchUrl: '自定义搜索引擎 URL',
        customSearchHint: '使用 {query} 作为搜索关键字的占位符',
        backgroundSection: '背景设置',
        backgroundType: '背景类型',
        gradient: '渐层',
        image: '图片',
        solidColor: '纯色',
        selectGradient: '选择渐层',
        imageUrl: '图片网址',
        imageHint: '提示：可使用 Unsplash，如 https://source.unsplash.com/1920x1080/?nature',
        selectColor: '选择颜色',
        appearanceSection: '显示效果（外观）',
        backgroundBlur: '背景模糊',
        enableBlur: '启用背景模糊',
        blurDepth: '模糊深度',
        backgroundFilter: '背景滤镜',
        filterNone: '无',
        filterWhite: '白色滤镜',
        filterBlack: '黑色滤镜',
        filterOpacity: '滤镜透明度',
        languageSection: '语言',
        selectLanguage: '选择语言',
        darkModeSection: '夜间模式',
        enableDarkMode: '启用夜间模式',
        darkModeDepth: '深色强度',
        // Gradient presets
        gradientDefault: '天空蓝',
        gradientSunset: '日落橘红',
        gradientOcean: '海洋蓝绿',
        gradientPurple: '梦幻紫',
        gradientGreen: '森林绿',
        gradientDark: '星夜黑',
        // Alerts
        alertFillRequired: '请填写名称和网址',
        alertEnterCategory: '请输入新分类名称',
        alertCategoryExists: '此分类已存在',
        alertDeleteBookmark: '确定要删除这个书签吗？',
        alertDeleteCategory: '确定要删除「{category}」分类吗？\n此分类下的书签将移至主列表。',
        alertSetCustomUrl: '请先设置自定义搜索引擎 URL',
        alertIconFetched: '已自动填入网站图标！',
        alertInvalidUrl: '无法获取图标，请确认网址格式正确'
    },
    'zh-TW': {
        // Hero
        heroTitle: 'Start Page',
        heroSubtitle: '快速搜尋、管理收藏，一切從這裡開始。',
        // Search
        searchPlaceholder: '搜尋任何內容...',
        searchButton: '搜尋',
        // Toolbar
        addBookmark: '新增書籤',
        manageCategories: '管理分類',
        settings: '設定',
        // Bookmarks
        myBookmarks: '我的書籤',
        bookmarksDesc: '常用網站都在這裡，點擊即可開啟。',
        noBookmarks: '還沒有書籤，點擊上方按鈕新增！',
        // Modals
        addBookmarkTitle: '新增書籤',
        editBookmarkTitle: '編輯書籤',
        categoryLabel: '分類',
        nameLabel: '名稱',
        urlLabel: '網址',
        iconLabel: '圖示',
        autoFetch: '自動抓取',
        save: '儲存',
        cancel: '取消',
        done: '完成',
        mainList: '主列表（不分類）',
        newCategory: '+ 建立新分類',
        enterNewCategory: '輸入新分類',
        enterCategoryName: '輸入新分類名稱',
        namePlaceholder: '網站名稱',
        urlPlaceholder: 'https://example.com',
        iconPlaceholder: '🌐 Emoji 或圖片網址',
        iconHint: '可輸入 Emoji、圖片網址，或使用自動抓取',
        iconSearch: '搜尋圖標',
        manageCategoriesTitle: '管理分類',
        categoriesDesc: '建立分類來整理書籤。刪除分類時，書籤會回到主列表。',
        noCategories: '還沒有分類',
        addCategoryBtn: '+ 新增',
        deleteCategory: '刪除',
        // Settings
        settingsTitle: '設定',
        searchEngineSection: '搜尋引擎',
        customSearchUrl: '自訂搜尋引擎 URL',
        customSearchHint: '使用 {query} 作為搜尋關鍵字的佔位符',
        backgroundSection: '背景設定',
        backgroundType: '背景類型',
        gradient: '漸層',
        image: '圖片',
        solidColor: '純色',
        selectGradient: '選擇漸層',
        imageUrl: '圖片網址',
        imageHint: '提示：可使用 Unsplash，如 https://source.unsplash.com/1920x1080/?nature',
        selectColor: '選擇顏色',
        appearanceSection: '顯示效果（外觀）',
        backgroundBlur: '背景模糊',
        enableBlur: '啟用背景模糊',
        blurDepth: '模糊深度',
        backgroundFilter: '背景濾鏡',
        filterNone: '無',
        filterWhite: '白色濾鏡',
        filterBlack: '黑色濾鏡',
        filterOpacity: '濾鏡透明度',
        languageSection: '語言',
        selectLanguage: '選擇語言',
        darkModeSection: '夜間模式',
        enableDarkMode: '啟用夜間模式',
        darkModeDepth: '深色強度',
        // Gradient presets
        gradientDefault: '天空藍',
        gradientSunset: '日落橘紅',
        gradientOcean: '海洋藍綠',
        gradientPurple: '夢幻紫',
        gradientGreen: '森林綠',
        gradientDark: '星夜黑',
        // Alerts
        alertFillRequired: '請填寫名稱和網址',
        alertEnterCategory: '請輸入新分類名稱',
        alertCategoryExists: '此分類已存在',
        alertDeleteBookmark: '確定要刪除這個書籤嗎？',
        alertDeleteCategory: '確定要刪除「{category}」分類嗎？\n此分類下的書籤將移至主列表。',
        alertSetCustomUrl: '請先設定自訂搜尋引擎 URL',
        alertIconFetched: '已自動填入網站圖示！',
        alertInvalidUrl: '無法獲取圖示，請確認網址格式正確'
    }
};

// 當前語言
let currentLanguage = 'zh-TW';

// 獲取翻譯文字
function t(key) {
    return translations[currentLanguage]?.[key] || translations['zh-TW'][key] || key;
}

// 搜尋引擎配置（使用真實品牌圖標）
const searchEngines = {
    google: { 
        url: 'https://www.google.com/search?q={query}', 
        icon: 'https://cdn.simpleicons.org/google'
    },
    bing: { 
        url: 'https://www.bing.com/search?q={query}', 
        icon: 'https://cdn.simpleicons.org/bing/008373'
    },
    duckduckgo: { 
        url: 'https://duckduckgo.com/?q={query}', 
        icon: 'https://cdn.simpleicons.org/duckduckgo/DE5833'
    },
    baidu: { 
        url: 'https://www.baidu.com/s?wd={query}', 
        icon: 'https://cdn.simpleicons.org/baidu/2319DC'
    },
    custom: { 
        url: '', 
        icon: 'lucide:settings' // 保留 Lucide 圖標
    }
};

// 背景漸層預設
const gradientPresets = {
    default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    sunset: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    ocean: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    purple: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    green: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
    dark: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
};

// 全局變數
let bookmarks = [];
let categories = [];
let editingBookmarkId = null;
let currentSearchEngine = 'google';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadLanguage();
    loadSettings();
    loadCategories();
    loadBookmarks();
    loadDarkMode();
    initEventListeners();
    updateSearchIcon();
    updateUILanguage();
    // initialize lucide icons
    if (window.lucide) window.lucide.createIcons();
});

// 載入語言設定
function loadLanguage() {
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) {
        currentLanguage = saved;
    } else {
        // 自動檢測瀏覽器語言
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) {
            currentLanguage = browserLang.includes('CN') ? 'zh-CN' : 'zh-TW';
        } else {
            currentLanguage = 'en';
        }
    }
}

// 切換語言
function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateUILanguage();
    renderBookmarks();
    updateCategorySelect();
}

// 更新 UI 語言
function updateUILanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            el.textContent = t(key);
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key) {
            el.placeholder = t(key);
        }
    });
    
    // Hero
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroTitle) heroTitle.textContent = t('heroTitle');
    if (heroSubtitle) heroSubtitle.textContent = t('heroSubtitle');
    
    // Search
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
    if (searchBtn) searchBtn.textContent = t('searchButton');
    
    // Toolbar buttons with icons
    const addBtn = document.getElementById('addBookmarkBtn');
    if (addBtn) {
        const icon = addBtn.querySelector('i');
        addBtn.innerHTML = '';
        if (icon) addBtn.appendChild(icon.cloneNode(true));
        addBtn.appendChild(document.createTextNode(' ' + t('addBookmark')));
    }
    
    const manageCatBtn = document.getElementById('manageCategoriesBtn');
    if (manageCatBtn) {
        const icon = manageCatBtn.querySelector('i');
        manageCatBtn.innerHTML = '';
        if (icon) manageCatBtn.appendChild(icon.cloneNode(true));
        manageCatBtn.appendChild(document.createTextNode(' ' + t('manageCategories')));
    }
    
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
        const icon = settingsBtn.querySelector('i');
        settingsBtn.innerHTML = '';
        if (icon) settingsBtn.appendChild(icon.cloneNode(true));
        settingsBtn.appendChild(document.createTextNode(' ' + t('settings')));
    }
    
    // Bookmarks header
    const bookmarkHeader = document.querySelector('.bookmark-card__header h2');
    const bookmarkDesc = document.querySelector('.bookmark-card__header p');
    if (bookmarkHeader) bookmarkHeader.textContent = t('myBookmarks');
    if (bookmarkDesc) bookmarkDesc.textContent = t('bookmarksDesc');
    
    // Update gradient select options
    const gradientSelect = document.getElementById('gradientPreset');
    if (gradientSelect) {
        const currentValue = gradientSelect.value;
        gradientSelect.innerHTML = `
            <option value="default">${t('gradientDefault')}</option>
            <option value="sunset">${t('gradientSunset')}</option>
            <option value="ocean">${t('gradientOcean')}</option>
            <option value="purple">${t('gradientPurple')}</option>
            <option value="green">${t('gradientGreen')}</option>
            <option value="dark">${t('gradientDark')}</option>
        `;
        gradientSelect.value = currentValue || 'default';
    }
    
    // Update overlay select options
    const overlaySelect = document.getElementById('overlaySelect');
    if (overlaySelect) {
        const currentValue = overlaySelect.value;
        overlaySelect.innerHTML = `
            <option value="none">${t('filterNone')}</option>
            <option value="white">${t('filterWhite')}</option>
            <option value="black">${t('filterBlack')}</option>
        `;
        overlaySelect.value = currentValue || 'none';
    }
    
    // Update language select
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = currentLanguage;
    
    // Update quick language dropdown
    document.querySelectorAll('.lang-option').forEach(option => {
        const isActive = option.getAttribute('data-lang') === currentLanguage;
        option.classList.toggle('active', isActive);
    });
    
    // Reinitialize lucide icons
    if (window.lucide) window.lucide.createIcons();
}

// 載入設定
function loadSettings() {
    const savedEngine = localStorage.getItem('searchEngine') || 'google';
    const customUrl = localStorage.getItem('customSearchUrl') || '';
    
    currentSearchEngine = savedEngine;
    const customUrlInput = document.getElementById('customSearchUrl');
    if (customUrlInput) customUrlInput.value = customUrl;
    
    if (savedEngine === 'custom') {
        searchEngines.custom.url = customUrl;
    }
    
    // 設置活動標籤
    setActiveEngineTab(savedEngine);
    
    // 載入背景設定
    loadBackgroundSettings();
    // 載入外觀設定（模糊/濾鏡）
    loadAppearanceSettings();
}

// 載入背景設定
function loadBackgroundSettings() {
    const bgType = localStorage.getItem('bgType') || 'image';
    const bgValue = localStorage.getItem('bgValue') || 'https://img.zakk.au/file/1758520685708_71119.jpg';

    const radio = document.querySelector(`input[name="bgType"][value="${bgType}"]`);
    if (radio) radio.checked = true;
    showBgOptions(bgType);

    if (bgType === 'gradient') {
        const sel = document.getElementById('gradientPreset');
        if (sel) sel.value = bgValue;
        applyBackground('gradient', bgValue);
    } else if (bgType === 'image') {
        const inp = document.getElementById('bgImageUrl');
        if (inp) inp.value = bgValue;
        applyBackground('image', bgValue);
    } else if (bgType === 'color') {
        const color = document.getElementById('bgColor');
        if (color) color.value = bgValue;
        applyBackground('color', bgValue);
    }
}

// 應用背景
function applyBackground(type, value) {
    const body = document.body;
    
    if (type === 'gradient') {
        body.style.background = gradientPresets[value] || gradientPresets.default;
        body.style.backgroundSize = 'cover';
        body.style.backgroundAttachment = 'fixed';
    } else if (type === 'image') {
        body.style.background = `url(${value})`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundAttachment = 'fixed';
    } else if (type === 'color') {
        body.style.background = value;
    }
}

// 顯示背景選項
function showBgOptions(type) {
    const grad = document.getElementById('gradientSettings');
    const img = document.getElementById('imageSettings');
    const col = document.getElementById('colorSettings');
    if (grad) grad.classList.toggle('hidden', type !== 'gradient');
    if (img) img.classList.toggle('hidden', type !== 'image');
    if (col) col.classList.toggle('hidden', type !== 'color');
}

// 儲存設定
function saveSettings() {
    const customUrl = document.getElementById('customSearchUrl').value;
    localStorage.setItem('customSearchUrl', customUrl);
    searchEngines.custom.url = customUrl;
    
    // 儲存背景設定
    const bgType = document.querySelector('input[name="bgType"]:checked').value;
    let bgValue = '';
    
    if (bgType === 'gradient') {
        bgValue = document.getElementById('gradientPreset').value;
    } else if (bgType === 'image') {
        bgValue = document.getElementById('bgImageUrl').value;
    } else if (bgType === 'color') {
        bgValue = document.getElementById('bgColor').value;
    }
    
    localStorage.setItem('bgType', bgType);
    localStorage.setItem('bgValue', bgValue);
    applyBackground(bgType, bgValue);
    
    // 也儲存外觀設定
    saveAppearanceSettings();
    
    // 儲存語言設定
    const langSelect = document.getElementById('languageSelect');
    if (langSelect && langSelect.value !== currentLanguage) {
        changeLanguage(langSelect.value);
    }

    closeModal('settingsModal');
}

// Appearance: blur + overlay
function loadAppearanceSettings() {
    const blurEnabled = localStorage.getItem('blurEnabled');
    const blurAmount = localStorage.getItem('blurAmount');
    const overlayType = localStorage.getItem('overlayType') || 'none';
    const overlayOpacity = localStorage.getItem('overlayOpacity');

    const blurToggle = document.getElementById('blurToggle');
    const blurRange = document.getElementById('blurRange');
    const blurValue = document.getElementById('blurValue');
    const overlaySelect = document.getElementById('overlaySelect');
    const overlayRange = document.getElementById('overlayOpacity');
    const overlayValue = document.getElementById('overlayValue');

    if (blurToggle) blurToggle.checked = blurEnabled === 'true' || blurEnabled === null;
    if (blurRange) blurRange.value = blurAmount || 16;
    if (blurValue) blurValue.textContent = blurRange ? blurRange.value : (blurAmount || 16);
    if (overlaySelect) overlaySelect.value = overlayType;
    if (overlayRange) overlayRange.value = overlayOpacity !== null ? overlayOpacity : 0.4;
    if (overlayValue) overlayValue.textContent = Number(overlayRange ? overlayRange.value : (overlayOpacity !== null ? overlayOpacity : 0.4)).toFixed(2);

    applyAppearanceSettings();
}

function saveAppearanceSettings() {
    const blurToggle = document.getElementById('blurToggle');
    const blurRange = document.getElementById('blurRange');
    const overlaySelect = document.getElementById('overlaySelect');
    const overlayRange = document.getElementById('overlayOpacity');

    if (blurToggle) localStorage.setItem('blurEnabled', blurToggle.checked);
    if (blurRange) localStorage.setItem('blurAmount', blurRange.value);
    if (overlaySelect) localStorage.setItem('overlayType', overlaySelect.value);
    if (overlayRange) localStorage.setItem('overlayOpacity', overlayRange.value);

    applyAppearanceSettings();
}

function applyAppearanceSettings() {
    const blurEnabled = localStorage.getItem('blurEnabled') === 'true' || localStorage.getItem('blurEnabled') === null;
    const blurAmount = localStorage.getItem('blurAmount') || 16;
    const overlayType = localStorage.getItem('overlayType') || 'none';
    const overlayOpacity = localStorage.getItem('overlayOpacity') !== null ? Number(localStorage.getItem('overlayOpacity')) : 0.4;

    // apply blur via CSS variable
    document.documentElement.style.setProperty('--backdrop-blur', blurEnabled ? `${blurAmount}px` : '0px');

    // overlay
    const overlayEl = document.getElementById('backgroundOverlay');
    if (overlayEl) {
        if (overlayType === 'none') {
            overlayEl.style.background = 'transparent';
        } else if (overlayType === 'white') {
            overlayEl.style.background = `rgba(255,255,255,${overlayOpacity})`;
        } else {
            overlayEl.style.background = `rgba(0,0,0,${overlayOpacity})`;
        }
    }
}

// 初始化事件監聽
function initEventListeners() {
    // 搜尋功能
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) searchBtn.addEventListener('click', performSearch);
    
    // 搜尋引擎標籤切換
    document.querySelectorAll('#engineTabs .engine-pill').forEach(pill => {
        pill.addEventListener('click', function() {
            const engine = this.dataset.engine;
            currentSearchEngine = engine;
            localStorage.setItem('searchEngine', engine);
            setActiveEngineTab(engine);
            updateSearchIcon();
            if (engine === 'custom' && !searchEngines.custom.url) {
                openModal('settingsModal');
            }
        });
    });
    
    // 設定按鈕
    document.getElementById('settingsBtn').addEventListener('click', function() {
        openModal('settingsModal');
    });
    
    document.getElementById('saveSettings').addEventListener('click', saveSettings);
    
    // 背景類型選擇
    document.querySelectorAll('input[name="bgType"]').forEach(radio => {
        radio.addEventListener('change', function(e) {
            showBgOptions(e.target.value);
        });
    });
    
    // 書籤按鈕
    const addBtn = document.getElementById('addBookmarkBtn');
    if (addBtn) addBtn.addEventListener('click', function() { openBookmarkModal(null, ''); });
    
    document.getElementById('saveBookmark').addEventListener('click', saveBookmark);
    // 關閉由 data-close 控制
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-close');
            if (id) closeModal(id);
        });
    });
    
    // 抓取圖示按鈕
    const autoIconBtn = document.getElementById('autoIconBtn');
    if (autoIconBtn) autoIconBtn.addEventListener('click', fetchFavicon);
    
    // 圖標搜索按鈕
    const iconSearchBtn = document.getElementById('iconSearchBtn');
    if (iconSearchBtn) iconSearchBtn.addEventListener('click', openIconSearch);
    
    // 快速設置按鈕 - 語言下拉選單
    const quickLangBtn = document.getElementById('quickLangBtn');
    const langMenu = document.getElementById('langMenu');
    
    if (quickLangBtn && langMenu) {
        quickLangBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });
        
        // 語言選項點擊
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                langMenu.classList.remove('show');
            });
        });
        
        // 點擊外部關閉下拉選單
        document.addEventListener('click', function(e) {
            if (!quickLangBtn.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.classList.remove('show');
            }
        });
    }
    
    const quickDarkModeBtn = document.getElementById('quickDarkModeBtn');
    if (quickDarkModeBtn) {
        quickDarkModeBtn.addEventListener('click', toggleDarkMode);
    }
    
    // 夜間模式切換
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            toggleDarkMode(this.checked);
            document.getElementById('darkModeSettings').style.display = this.checked ? 'block' : 'none';
        });
    }
    
    // 夜間模式深度調整
    const darkModeDepth = document.getElementById('darkModeDepth');
    if (darkModeDepth) {
        darkModeDepth.addEventListener('input', function() {
            updateDarkModeDepth(this.value);
            document.getElementById('darkModeDepthValue').textContent = this.value + '%';
        });
    }
    
    // 管理分類按鈕
    document.getElementById('manageCategoriesBtn').addEventListener('click', function() {
        openCategoryManagement();
    });
    
    document.getElementById('addCategoryBtn').addEventListener('click', addNewCategory);
    
    // 分類選擇
    document.getElementById('bookmarkCategory').addEventListener('change', function(e) {
        const newCategoryInput = document.getElementById('newCategoryInput');
        if (!newCategoryInput) return;
        if (e.target.value === 'new') {
            newCategoryInput.classList.remove('hidden');
            newCategoryInput.focus();
        } else {
            newCategoryInput.classList.add('hidden');
        }
    });
    
    // 語言選擇器
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // 濾鏡選擇器
    const overlaySelect = document.getElementById('overlaySelect');
    if (overlaySelect) {
        overlaySelect.addEventListener('change', function() {
            applyOverlay(this.value);
        });
    }
    
    // 濾鏡透明度滑桿
    const overlayOpacity = document.getElementById('overlayOpacity');
    if (overlayOpacity) {
        overlayOpacity.addEventListener('input', function() {
            updateOverlayOpacity(this.value);
        });
    }
    
    // 點擊外部關閉彈窗
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
}

// 設置活動標籤
function setActiveEngineTab(engine) {
    document.querySelectorAll('#engineTabs .engine-pill').forEach(pill => {
        const isActive = pill.dataset.engine === engine;
        pill.classList.toggle('active', isActive);
        pill.setAttribute('aria-selected', String(isActive));
    });
}

// 更新搜尋圖示
function updateSearchIcon() {
    const el = document.getElementById('searchEngineIcon');
    if (!el) return;
    const iconData = searchEngines[currentSearchEngine].icon;
    
    // 檢查是否為 Lucide 圖標
    if (iconData.startsWith('lucide:')) {
        const iconName = iconData.replace('lucide:', '');
        el.innerHTML = `<i data-lucide="${iconName}"></i>`;
        if (window.lucide) window.lucide.createIcons();
    } else {
        // 使用品牌圖標 URL
        el.innerHTML = `<img src="${iconData}" alt="${currentSearchEngine}" style="width:20px;height:20px;">`;
    }
}

// 執行搜尋
function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return;
    
    let searchUrl = searchEngines[currentSearchEngine].url;
    
    if (currentSearchEngine === 'custom' && !searchUrl) {
        alert(t('alertSetCustomUrl'));
        openModal('settingsModal');
        return;
    }
    
    searchUrl = searchUrl.replace('{query}', encodeURIComponent(query));
    window.location.href = searchUrl;
}

// 分類管理
function loadCategories() {
    const saved = localStorage.getItem('categories');
    categories = saved ? JSON.parse(saved) : [];
    updateCategorySelect();
}

function saveCategories() {
    localStorage.setItem('categories', JSON.stringify(categories));
}

function updateCategorySelect() {
    const select = document.getElementById('bookmarkCategory');
    if (!select) return;
    select.innerHTML = `<option value="">${t('mainList')}</option>`;
    categories.forEach(cat => {
        select.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    select.innerHTML += `<option value="new">${t('newCategory')}</option>`;
}

// 書籤管理
function loadBookmarks() {
    const saved = localStorage.getItem('bookmarks');
    bookmarks = saved ? JSON.parse(saved) : getDefaultBookmarks();
    renderBookmarks();
}

function getDefaultBookmarks() {
    return [
        { id: Date.now(), name: 'GitHub', url: 'https://github.com', icon: 'https://cdn.simpleicons.org/github', category: '' },
        { id: Date.now() + 1, name: 'YouTube', url: 'https://youtube.com', icon: 'https://cdn.simpleicons.org/youtube', category: '' },
        { id: Date.now() + 2, name: 'Gmail', url: 'https://gmail.com', icon: 'https://cdn.simpleicons.org/gmail', category: '' },
        { id: Date.now() + 3, name: 'X', url: 'https://x.com', icon: 'https://cdn.simpleicons.org/x', category: '' },
        { id: Date.now() + 4, name: 'Notion', url: 'https://notion.so', icon: 'https://cdn.simpleicons.org/notion', category: '' },
        { id: Date.now() + 5, name: 'Instagram', url: 'https://www.instagram.com/', icon: 'https://cdn.simpleicons.org/instagram', category: '' }
    ];
}

function saveBookmarksToStorage() {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function renderBookmarks() {
    const mainGrid = document.getElementById('bookmarkGrid');
    const categoriesContainer = document.getElementById('categorySection');
    if (!mainGrid || !categoriesContainer) return;
    mainGrid.innerHTML = '';
    categoriesContainer.innerHTML = '';
    
    // 分離主書籤和分類書籤
    const mainBookmarks = bookmarks.filter(b => !b.category || b.category === '');
    const categorizedBookmarks = {};
    
    bookmarks.forEach(bookmark => {
        if (bookmark.category && bookmark.category !== '') {
            if (!categorizedBookmarks[bookmark.category]) {
                categorizedBookmarks[bookmark.category] = [];
            }
            categorizedBookmarks[bookmark.category].push(bookmark);
        }
    });
    
    // 渲染主書籤
    mainBookmarks.forEach(bookmark => {
        const bookmarkEl = createBookmarkElement(bookmark);
        mainGrid.appendChild(bookmarkEl);
    });
    
    // 如果沒有主書籤，顯示提示
    if (mainBookmarks.length === 0) {
        mainGrid.innerHTML = `<p style="text-align:center; color: var(--text-subtle); padding: 40px;">${t('noBookmarks')}</p>`;
    }
    
    // 渲染分類書籤
    Object.keys(categorizedBookmarks).forEach(category => {
        const section = createCategorySection(category, categorizedBookmarks[category]);
        categoriesContainer.appendChild(section);
    });
}

function createCategorySection(category, categoryBookmarks) {
    const section = document.createElement('div');
    section.className = 'category-section';
    
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
        <div class="category-title">📁 ${category}</div>
        <div class="category-actions">
            <button class="add-btn" onclick="openBookmarkModal(null, '${category.replace(/'/g, "\\'")}')">+ 新增</button>
            <button class="manage-btn" onclick="deleteCategory('${category.replace(/'/g, "\\'")}')">刪除分類</button>
        </div>
    `;
    
    const grid = document.createElement('div');
    grid.className = 'bookmarks-grid';
    
    categoryBookmarks.forEach(bookmark => {
        const bookmarkEl = createBookmarkElement(bookmark);
        grid.appendChild(bookmarkEl);
    });
    
    section.appendChild(header);
    section.appendChild(grid);
    
    return section;
}

function createBookmarkElement(bookmark) {
    const div = document.createElement('div');
    div.className = 'bookmark-item';
    div.onclick = function(e) {
        if (!e.target.closest('.bookmark-actions')) {
            window.open(bookmark.url, '_blank');
        }
    };
    
    let iconHtml = '';
    // allow explicit null/empty to mean no icon
    if (!bookmark.icon) {
        iconHtml = '';
    } else if (bookmark.icon.startsWith('http')) {
        iconHtml = `<img src="${bookmark.icon}" alt="${bookmark.name}" onerror="this.parentElement.innerHTML='';">`;
    } else if (bookmark.icon.includes('favicon')) {
        iconHtml = `<img src="${bookmark.icon}" alt="${bookmark.name}" onerror="this.parentElement.innerHTML='';">`;
    } else {
        // fallback to text or svg string
        iconHtml = bookmark.icon;
    }
    
    div.innerHTML = `
        <div class="bookmark-actions">
            <button onclick="editBookmark(${bookmark.id}); event.stopPropagation();" title="編輯"><i data-lucide="pencil" style="width:14px;height:14px;"></i></button>
            <button onclick="deleteBookmark(${bookmark.id}); event.stopPropagation();" title="刪除"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
        </div>
        <div class="bookmark-icon">${iconHtml}</div>
        <div class="bookmark-name">${bookmark.name}</div>
    `;
    
    // initialize lucide icons in this element
    if (window.lucide) window.lucide.createIcons({ nameAttr: 'data-lucide' });
    
    return div;
}

function openBookmarkModal(bookmark = null, defaultCategory = '') {
    editingBookmarkId = bookmark ? bookmark.id : null;
    
    const title = document.getElementById('bookmarkTitle');
    const categorySelect = document.getElementById('bookmarkCategory');
    const nameInput = document.getElementById('bookmarkName');
    const urlInput = document.getElementById('bookmarkUrl');
    const iconInput = document.getElementById('bookmarkIcon');
    
    if (title) title.textContent = bookmark ? t('editBookmarkTitle') : t('addBookmarkTitle');
    if (categorySelect) categorySelect.value = bookmark ? bookmark.category : defaultCategory;
    if (nameInput) nameInput.value = bookmark ? bookmark.name : '';
    if (urlInput) urlInput.value = bookmark ? bookmark.url : '';
    if (iconInput) iconInput.value = bookmark ? bookmark.icon : '';
    
    const newCat = document.getElementById('newCategoryInput');
    if (newCat) newCat.classList.add('hidden');
    
    openModal('bookmarkModal');
    if (nameInput) nameInput.focus();
}

function saveBookmark() {
    const categorySelect = document.getElementById('bookmarkCategory');
    const newCategoryInput = document.getElementById('newCategoryInput');
    const name = document.getElementById('bookmarkName').value.trim();
    const url = document.getElementById('bookmarkUrl').value.trim();
    const icon = document.getElementById('bookmarkIcon').value.trim() || '';
    
    if (!name || !url) {
        alert(t('alertFillRequired'));
        return;
    }
    
    let category = categorySelect.value;
    if (category === 'new') {
        category = newCategoryInput.value.trim();
        if (!category) {
            alert(t('alertEnterCategory'));
            return;
        }
        if (!categories.includes(category)) {
            categories.push(category);
            saveCategories();
            updateCategorySelect();
        }
    }
    
    // 空字串表示放在主列表
    if (!category) {
        category = '';
    }
    
    // 確保 URL 有協議
    const finalUrl = url.match(/^https?:\/\//) ? url : 'https://' + url;
    
    if (editingBookmarkId) {
        // 編輯現有書籤
        const index = bookmarks.findIndex(b => b.id === editingBookmarkId);
        if (index !== -1) {
            bookmarks[index] = { ...bookmarks[index], name, url: finalUrl, icon, category };
        }
    } else {
        // 新增書籤
        bookmarks.push({
            id: Date.now(),
            name,
            url: finalUrl,
            icon,
            category
        });
    }
    
    saveBookmarksToStorage();
    renderBookmarks();
    closeModal('bookmarkModal');
}

function editBookmark(id) {
    const bookmark = bookmarks.find(b => b.id === id);
    if (bookmark) {
        openBookmarkModal(bookmark);
    }
}

function deleteBookmark(id) {
    if (confirm(t('alertDeleteBookmark'))) {
        bookmarks = bookmarks.filter(b => b.id !== id);
        saveBookmarksToStorage();
        renderBookmarks();
    }
}

function deleteCategory(category) {
    const msg = t('alertDeleteCategory').replace('{category}', category);
    if (confirm(msg)) {
        // 將該分類的書籤移至主列表
        bookmarks.forEach(bookmark => {
            if (bookmark.category === category) {
                bookmark.category = '';
            }
        });
        
        // 從分類列表中移除
        categories = categories.filter(cat => cat !== category);
        
        saveCategories();
        saveBookmarksToStorage();
        updateCategorySelect();
        renderBookmarks();
    }
}

// 分類管理彈窗
function openCategoryManagement() {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';
    
    if (categories.length === 0) {
        categoryList.innerHTML = `<p style="text-align:center; color: var(--text-subtle); padding: 20px;">${t('noCategories')}</p>`;
    } else {
        categories.forEach(cat => {
            const item = document.createElement('div');
            item.className = 'category-item';
            item.innerHTML = `
                <span class="category-item-name">📁 ${cat}</span>
                <button onclick="deleteCategoryFromModal('${cat}')" class="btn" style="padding: 6px 12px; font-size: 12px;">${t('deleteCategory')}</button>
            `;
            categoryList.appendChild(item);
        });
    }
    
    const newCatInput = document.getElementById('newCategoryName');
    if (newCatInput) newCatInput.value = '';
    openModal('categoryModal');
}

function addNewCategory() {
    const input = document.getElementById('newCategoryName');
    if (!input) return;
    const newCat = input.value.trim();
    
    if (!newCat) {
        alert(t('alertEnterCategory'));
        return;
    }
    
    if (categories.includes(newCat)) {
        alert(t('alertCategoryExists'));
        return;
    }
    
    categories.push(newCat);
    saveCategories();
    updateCategorySelect();
    openCategoryManagement(); // 刷新列表
}

function deleteCategoryFromModal(category) {
    deleteCategory(category);
    openCategoryManagement(); // 刷新列表
}

// 抓取網站 favicon
async function fetchFavicon() {
    const urlInput = document.getElementById('bookmarkUrl');
    const iconInput = document.getElementById('bookmarkIcon');
    const url = urlInput.value.trim();
    
    if (!url) {
        alert('請先輸入網址');
        return;
    }
    
    try {
        // 確保 URL 有協議
        const fullUrl = url.match(/^https?:\/\//) ? url : 'https://' + url;
        const urlObj = new URL(fullUrl);
        
        // 嘗試多種 favicon 獲取方式
        const faviconUrls = [
            `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=128`,
            `${urlObj.origin}/favicon.ico`,
            `https://icon.horse/icon/${urlObj.hostname}`
        ];
        
        // 使用第一個方法（Google favicon 服務）
        iconInput.value = faviconUrls[0];
        alert(t('alertIconFetched'));
        
    } catch (error) {
        alert(t('alertInvalidUrl'));
    }
}

// 彈窗控制
function openModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// 夜間模式功能
function toggleDarkMode(forceState) {
    const isDark = forceState !== undefined ? forceState : !document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    
    // 更新按鈕狀態
    const quickBtn = document.getElementById('quickDarkModeBtn');
    if (quickBtn) {
        quickBtn.classList.toggle('active', isDark);
        const icon = quickBtn.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
            if (window.lucide) window.lucide.createIcons();
        }
    }
    
    // 更新設置面板的 checkbox
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) toggle.checked = isDark;
    
    // 顯示/隱藏深度設置
    const settings = document.getElementById('darkModeSettings');
    if (settings) settings.style.display = isDark ? 'block' : 'none';
}

function updateDarkModeDepth(depth) {
    const opacity = depth / 100;
    document.documentElement.style.setProperty('--dark-overlay-opacity', opacity);
    localStorage.setItem('darkModeDepth', depth);
}

function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    const depth = localStorage.getItem('darkModeDepth') || '80';
    
    if (darkMode === 'enabled') {
        toggleDarkMode(true);
    }
    
    const depthInput = document.getElementById('darkModeDepth');
    if (depthInput) {
        depthInput.value = depth;
        document.getElementById('darkModeDepthValue').textContent = depth + '%';
    }
    updateDarkModeDepth(depth);
}

// 語言循環切換
function cycleLanguage() {
    const languages = ['en', 'zh-CN', 'zh-TW'];
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    changeLanguage(languages[nextIndex]);
}

// 圖標搜索功能
function openIconSearch() {
    openModal('iconSearchModal');
    
    // 常用品牌圖標
    const popularIcons = [
        'github', 'google', 'facebook', 'twitter', 'instagram', 'youtube',
        'linkedin', 'reddit', 'discord', 'slack', 'spotify', 'netflix',
        'amazon', 'apple', 'microsoft', 'dropbox', 'notion', 'figma',
        'steam', 'twitch', 'tiktok', 'pinterest', 'telegram', 'whatsapp',
        'gmail', 'outlook', 'yahoo', 'medium', 'stackoverflow', 'wikipedia'
    ];
    
    renderIconGrid(popularIcons);
    
    // 搜索輸入
    const searchInput = document.getElementById('iconSearchInput');
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        searchInput.oninput = function() {
            const query = this.value.toLowerCase().trim();
            if (query) {
                const filtered = popularIcons.filter(icon => icon.includes(query));
                renderIconGrid(filtered.length > 0 ? filtered : [query]);
            } else {
                renderIconGrid(popularIcons);
            }
        };
    }
}

function renderIconGrid(icons) {
    const grid = document.getElementById('iconSearchResults');
    if (!grid) return;
    
    grid.innerHTML = icons.map(icon => `
        <div class="icon-grid-item" onclick="selectIcon('${icon}')">
            <img src="https://cdn.simpleicons.org/${icon}" alt="${icon}" onerror="this.style.display='none'">
            <span>${icon}</span>
        </div>
    `).join('');
}

function selectIcon(iconName) {
    const iconUrl = `https://cdn.simpleicons.org/${iconName}`;
    const iconInput = document.getElementById('bookmarkIcon');
    if (iconInput) {
        iconInput.value = iconUrl;
    }
    closeModal('iconSearchModal');
    alert(`已選擇圖標：${iconName}`);
}

// 暴露全局函數
window.openBookmarkModal = openBookmarkModal;
window.editBookmark = editBookmark;
window.deleteBookmark = deleteBookmark;
window.deleteCategory = deleteCategory;
window.deleteCategoryFromModal = deleteCategoryFromModal;
window.selectIcon = selectIcon;
