// 翻譯配置從各個語言文件動態載入
// Translation configuration dynamically loaded from individual language files
// translations 對象在 index.html 中初始化，只載入當前語言
// translations object initialized in index.html, only loads current language

// 確保全局變量存在
if (typeof window.translations === 'undefined') {
    window.translations = {};
    console.warn('Translations not loaded yet');
}
if (typeof window.currentLanguage === 'undefined') {
    window.currentLanguage = 'zh-TW';
}

const __debugMessages = [];
window.__debugMessages = __debugMessages;

const DEBUG_PANEL_STORAGE_KEY = 'debugPanelEnabled';
const WEATHER_ENABLED_KEY = 'weatherEnabled';
const WEATHER_LOCATION_KEY = 'weatherLocation';
const WEATHER_CACHE_TTL = 15 * 60 * 1000;
// 使用 OpenWeatherMap Geocoding API（免費且覆蓋更廣）
const WEATHER_GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_GEOCODE_URL_BACKUP = 'https://nominatim.openstreetmap.org/search';
const WEATHER_FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';

const weatherCache = new Map();
let weatherState = {
    loading: false,
    error: null,
    data: null,
    resolvedName: '',
    lastUpdated: null
};
let weatherRequestToken = 0;
let settingsNavObserver = null;
let settingsNavCleanup = null;

function logDebug(message) {
    try {
        const timestamp = new Date().toISOString().split('T')[1]?.replace('Z', '') || '';
        __debugMessages.push(`${timestamp} ${message}`);
        if (__debugMessages.length > 200) {
            __debugMessages.splice(0, __debugMessages.length - 200);
        }
        if (isDebugPanelEnabled()) {
            renderDebugPanel();
        }
    } catch (error) {
        console.error('Debug logger failed:', error);
    }
}

function isDebugPanelEnabled() {
    return localStorage.getItem(DEBUG_PANEL_STORAGE_KEY) === 'true';
}

function setDebugPanelEnabled(enabled) {
    localStorage.setItem(DEBUG_PANEL_STORAGE_KEY, enabled ? 'true' : 'false');
    if (enabled) {
        renderDebugPanel();
        logDebug('Debug panel enabled');
    } else {
        removeDebugPanel();
        logDebug('Debug panel disabled');
    }
}

function renderDebugPanel() {
    if (!document || !document.body) return;
    let panel = document.getElementById('app-debug-panel');
    if (!panel) {
        panel = document.createElement('div');
        panel.id = 'app-debug-panel';
        panel.style.position = 'fixed';
        panel.style.bottom = '12px';
        panel.style.right = '12px';
        panel.style.zIndex = '9999';
        panel.style.maxWidth = '320px';
        panel.style.maxHeight = '200px';
        panel.style.overflowY = 'auto';
        panel.style.background = 'rgba(15, 23, 42, 0.8)';
        panel.style.color = '#fff';
        panel.style.fontSize = '12px';
        panel.style.lineHeight = '1.4';
        panel.style.padding = '8px 10px';
        panel.style.borderRadius = '10px';
        panel.style.boxShadow = '0 8px 20px rgba(0,0,0,0.35)';
        panel.style.fontFamily = 'Menlo, Consolas, monospace';
        panel.setAttribute('role', 'log');
        panel.setAttribute('aria-live', 'polite');
        document.body.appendChild(panel);
    }
    panel.innerHTML = __debugMessages.map(line => `<div>• ${line}</div>`).join('');
}

function removeDebugPanel() {
    const panel = document.getElementById('app-debug-panel');
    if (panel && panel.parentElement) {
        panel.parentElement.removeChild(panel);
    }
}

function templateReplace(str, replacements = {}) {
    if (typeof str !== 'string') return str;
    return Object.keys(replacements).reduce((acc, key) => acc.replace(new RegExp(`{${key}}`, 'g'), replacements[key]), str);
}

// 全局錯誤監聽器，便於在 UI 上顯示錯誤
window.addEventListener('error', (event) => {
    try {
        const message = event?.message || '';
        if (message === 'Script error.' && !event?.filename) {
            logDebug('Window error ignored: Script error without details (likely cross-origin)');
            return;
        }
        const existing = document.getElementById('app-error-banner');
        const banner = existing || document.createElement('div');
        banner.id = 'app-error-banner';
        banner.style.position = 'fixed';
        banner.style.top = '12px';
        banner.style.left = '50%';
        banner.style.transform = 'translateX(-50%)';
        banner.style.zIndex = '9999';
        banner.style.background = 'rgba(220, 38, 38, 0.95)';
        banner.style.color = '#fff';
        banner.style.padding = '10px 16px';
        banner.style.borderRadius = '999px';
        banner.style.fontSize = '14px';
        banner.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
        banner.textContent = message ? `Error: ${message}` : 'Unknown script error';
        if (!existing) {
            document.body.appendChild(banner);
        }
        if (banner._hideTimer) {
            window.clearTimeout(banner._hideTimer);
        }
        banner._hideTimer = window.setTimeout(() => {
            if (banner.parentElement) {
                banner.parentElement.removeChild(banner);
            }
        }, 6000);
        logDebug(`Window error: ${message || 'unknown error'}`);
    } catch (innerError) {
        console.error('Failed to display error banner:', innerError);
    }
});

window.addEventListener('unhandledrejection', (event) => {
    try {
        const existing = document.getElementById('app-error-banner');
        const banner = existing || document.createElement('div');
        banner.id = 'app-error-banner';
        banner.style.position = 'fixed';
        banner.style.top = '12px';
        banner.style.left = '50%';
        banner.style.transform = 'translateX(-50%)';
        banner.style.zIndex = '9999';
        banner.style.background = 'rgba(234, 179, 8, 0.95)';
        banner.style.color = '#1f2937';
        banner.style.padding = '10px 16px';
        banner.style.borderRadius = '999px';
        banner.style.fontSize = '14px';
        banner.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
        banner.textContent = event?.reason ? `Unhandled rejection: ${event.reason}` : 'Unhandled promise rejection';
        if (!existing) {
            document.body.appendChild(banner);
        }
        logDebug(`Unhandled rejection: ${event?.reason || 'unknown reason'}`);
    } catch (innerError) {
        console.error('Failed to display rejection banner:', innerError);
    }
});

// 當前語言 (從 index.html 傳入)
// Current language (passed from index.html)
let currentLanguage = window.currentLanguage;
let translations = window.translations;

// 支援的語言列表
const SUPPORTED_LANGUAGES = window.SUPPORTED_LANGUAGES || ['en', 'zh-CN', 'zh-TW', 'ja'];

// 獲取翻譯文字
function t(key) {
    if (!translations || !currentLanguage) {
        return key;
    }
    return translations[currentLanguage]?.[key] || key;
}

// 搜尋引擎配置（使用真實品牌圖標）
const searchEngines = {
    google: {
        url: 'https://www.google.com/search?q={query}',
        icon: 'assets/google.svg',
        labelKey: 'engineGoogle',
        iconSize: 18,
        dropdownIconSize: 16
    },
    bing: {
        url: 'https://www.bing.com/search?q={query}',
        icon: 'assets/bing-logo.svg',
        labelKey: 'engineBing',
        iconSize: 24,
        selectorIconSize: 28,
        dropdownIconSize: 22
    },
    duckduckgo: {
        url: 'https://duckduckgo.com/?q={query}',
        icon: 'assets/duckduckgo.svg',
        labelKey: 'engineDuckDuckGo',
        iconSize: 18,
        dropdownIconSize: 16
    },
    baidu: {
        url: 'https://www.baidu.com/s?wd={query}',
        icon: 'assets/baidu.svg',
        labelKey: 'engineBaidu',
        iconSize: 18,
        dropdownIconSize: 16
    },
    custom: {
        url: '',
        icon: 'lucide:settings',
        labelKey: 'engineCustom',
        iconSize: 18,
        dropdownIconSize: 16
    }
};

function getBrandIconUrl(slug, color) {
    if (!slug) return '';
    const resolved = resolveIconSlug(slug);
    const encoded = encodeURIComponent(resolved);
    return color ? `https://cdn.simpleicons.org/${encoded}/${color}` : `https://cdn.simpleicons.org/${encoded}`;
}

function getIconMarkup(descriptor, size = 20, label = '') {
    if (!descriptor) return '';
    if (descriptor.startsWith('lucide:')) {
        const iconName = descriptor.slice(7);
        return `<i data-lucide="${iconName}" style="width:${size}px;height:${size}px;"></i>`;
    }
    if (descriptor.startsWith('http')) {
        return `<img src="${descriptor}" alt="${escapeHtml(label || descriptor)}" style="width:${size}px;height:${size}px;object-fit:contain;" loading="lazy">`;
    }
    if (/^(?:\.?\.\/|\/|data:)/.test(descriptor) || /\.(svg|png|jpe?g|gif|webp)$/i.test(descriptor)) {
        return `<img src="${descriptor}" alt="${escapeHtml(label || descriptor)}" style="width:${size}px;height:${size}px;object-fit:contain;" loading="lazy">`;
    }
    const altText = escapeHtml(label || descriptor);
    const slug = resolveIconSlug(descriptor);
    const encodedSlug = encodeURIComponent(slug);
    const fallbackSrc = `https://api.iconify.design/simple-icons:${encodedSlug}.svg`;
    const mainSrc = getBrandIconUrl(slug);
    return `<img src="${mainSrc}" alt="${altText}" style="width:${size}px;height:${size}px;object-fit:contain;" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='${fallbackSrc}';}else{this.remove();}">`;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeAttribute(value) {
    return escapeHtml(value);
}

function normalizeIconKey(value) {
    return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function resolveIconSlug(input) {
    if (!input) return '';
    const trimmed = String(input).trim();
    if (!trimmed) return '';
    const lower = trimmed.toLowerCase();
    if (ICON_ALIAS_OVERRIDES[lower]) return ICON_ALIAS_OVERRIDES[lower];
    if (iconAliasLookup.has(lower)) return iconAliasLookup.get(lower);

    const normalized = normalizeIconKey(trimmed);
    if (ICON_ALIAS_OVERRIDES[normalized]) return ICON_ALIAS_OVERRIDES[normalized];
    if (iconAliasLookup.has(normalized)) return iconAliasLookup.get(normalized);

    return trimmed.replace(/\s+/g, '').toLowerCase();
}

function registerIconAlias(alias, slug) {
    if (!alias || !slug) return;
    const lower = alias.toLowerCase();
    iconAliasLookup.set(lower, slug);
    iconAliasLookup.set(normalizeIconKey(alias), slug);
}

function isLikelyEmoji(value) {
    if (!value) return false;
    const trimmed = String(value).trim();
    if (!trimmed) return false;
    try {
        return /\p{Extended_Pictographic}/u.test(trimmed);
    } catch (err) {
        // 某些較舊的瀏覽器不支援 Unicode 屬性匹配，退回至簡單檢查
        return /[\u{1F300}-\u{1FAFF}\u{1F900}-\u{1F9FF}\u{2600}-\u{27BF}]/u.test(trimmed);
    }
}

function isLikelyUrl(value) {
    if (!value) return false;
    const trimmed = String(value).trim();
    if (!trimmed || /\s/.test(trimmed)) return false;

    if (/^(?:[a-z][a-z0-9+\-.]*:|(?:mailto|tel):)/i.test(trimmed)) {
        return true;
    }

    if (/^localhost(?:\:\d{1,5})?(?:\/|$)/i.test(trimmed)) {
        return true;
    }

    if (/^[\w-]+(?:\.[\w-]+)+(?:\:\d{1,5})?(?:[\/\?#]|$)/i.test(trimmed)) {
        return true;
    }

    return false;
}

function resolveBookmarkIcon(descriptor, size = 32, label = '') {
    const value = typeof descriptor === 'string' ? descriptor.trim() : '';
    if (!value) {
        return { html: '', type: 'empty' };
    }

    if (value.startsWith('lucide:')) {
        return { html: getIconMarkup(value, size, label), type: 'lucide' };
    }

    if (/^(https?:\/\/|data:|\/\/)/i.test(value)) {
        const src = escapeAttribute(value);
        const alt = escapeAttribute(label || value);
        return {
            html: `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">`,
            type: 'image'
        };
    }

    if (value.includes('favicon')) {
        const src = escapeAttribute(value);
        const alt = escapeAttribute(label || value);
        return {
            html: `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.remove()">`,
            type: 'image'
        };
    }

    if (/^<svg/i.test(value)) {
        return { html: value, type: 'svg' };
    }

    if (isLikelyEmoji(value)) {
        return {
            html: `<span class="bookmark-emoji">${escapeHtml(value)}</span>`,
            type: 'emoji'
        };
    }

    return { html: getIconMarkup(value, size, label), type: 'image' };
}

function updateBookmarkIconPreview(iconValue) {
    const preview = document.getElementById('bookmarkIconPreview');
    if (!preview) return;

    const value = (iconValue || '').trim();
    preview.innerHTML = '';
    preview.classList.remove('is-empty', 'is-image', 'is-emoji', 'is-svg', 'is-lucide');

    if (!value) {
        preview.classList.add('is-empty');
        preview.innerHTML = `<i data-lucide="bookmark" style="width:24px;height:24px;opacity:0.6;"></i>`;
        if (window.lucide) window.lucide.createIcons({ nameAttr: 'data-lucide' });
        return;
    }

    const { html, type } = resolveBookmarkIcon(value, 34, '');
    if (!html) {
        preview.classList.add('is-empty');
        preview.innerHTML = `<i data-lucide="bookmark" style="width:24px;height:24px;opacity:0.6;"></i>`;
    } else {
        preview.innerHTML = html;
        preview.classList.add(`is-${type}`);
    }

    if (window.lucide) window.lucide.createIcons({ nameAttr: 'data-lucide' });
}

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
let searchHistory = [];

let iconLibrary = [];
let iconLibraryPromise = null;
let iconResultsLimit = 60;
let iconAliasLookup = new Map();

let engineDropdownOpen = false;

const MAX_SEARCH_HISTORY = 12;
const SEARCH_SUGGESTION_LIMIT = 8;
const REMOTE_SUGGESTION_MIN_LENGTH = 2;
const LOCAL_SUGGESTION_INITIAL_QUOTA = 4;
const DEFAULT_BLUR_AMOUNT = 12;
const DEFAULT_OVERLAY_TYPE = 'none';
const DEFAULT_OVERLAY_OPACITY = 0.4;

const remoteSuggestCache = new Map();
let remoteSuggestCancel = null;
let latestSuggestQueryToken = 0;
let remoteSuggestCallbackSeed = 0;
let remoteSuggestAbortController = null;

const ICON_ALIAS_OVERRIDES = {
    outlook: 'microsoftoutlook',
    'ms outlook': 'microsoftoutlook',
    msoutlook: 'microsoftoutlook',
    'office outlook': 'microsoftoutlook',
    officeoutlook: 'microsoftoutlook',
    'microsoft outlook': 'microsoftoutlook',
    'microsoft-outlook': 'microsoftoutlook',
    microsoftoutlook: 'microsoftoutlook',
    chatgpt: 'openai',
    'open ai': 'openai',
    bard: 'googlegemini',
    gemini: 'googlegemini',
    'google gemini': 'googlegemini',
    bing: 'microsoftbing',
    'ms bing': 'microsoftbing',
    microsoftbing: 'microsoftbing'
};

const POPULAR_ICON_FALLBACK = [
    { slug: 'github', title: 'GitHub' },
    { slug: 'google', title: 'Google' },
    { slug: 'facebook', title: 'Facebook' },
    { slug: 'x', title: 'X (Twitter)' },
    { slug: 'instagram', title: 'Instagram' },
    { slug: 'youtube', title: 'YouTube' },
    { slug: 'microsoftoutlook', title: 'Microsoft Outlook', aliases: ['outlook'] },
    { slug: 'linkedin', title: 'LinkedIn' },
    { slug: 'reddit', title: 'Reddit' },
    { slug: 'discord', title: 'Discord' },
    { slug: 'slack', title: 'Slack' },
    { slug: 'spotify', title: 'Spotify' },
    { slug: 'netflix', title: 'Netflix' },
    { slug: 'amazon', title: 'Amazon' },
    { slug: 'apple', title: 'Apple' },
    { slug: 'microsoft', title: 'Microsoft' },
    { slug: 'dropbox', title: 'Dropbox' },
    { slug: 'notion', title: 'Notion' },
    { slug: 'openai', title: 'OpenAI', aliases: ['chatgpt'] },
    { slug: 'googlegemini', title: 'Google Gemini', aliases: ['gemini', 'bard'] },
    { slug: 'figma', title: 'Figma' },
    { slug: 'steam', title: 'Steam' },
    { slug: 'twitch', title: 'Twitch' },
    { slug: 'tiktok', title: 'TikTok' },
    { slug: 'pinterest', title: 'Pinterest' },
    { slug: 'telegram', title: 'Telegram' },
    { slug: 'whatsapp', title: 'WhatsApp' },
    { slug: 'gmail', title: 'Gmail' },
    { slug: 'yahoo', title: 'Yahoo!' },
    { slug: 'medium', title: 'Medium' },
    { slug: 'stackoverflow', title: 'Stack Overflow' },
    { slug: 'wikipedia', title: 'Wikipedia' }
];

// 初始化
function initializeApp() {
    if (initializeApp.__ran) {
        return;
    }
    initializeApp.__ran = true;
    try {
        logDebug('App init start');
        loadLanguage();
        logDebug(`Language loaded: ${currentLanguage}`);
        loadSearchHistory();
        logDebug(`Search history loaded: ${searchHistory.length} entries`);
        loadSettings();
        logDebug('Settings loaded');
        loadCategories();
        logDebug(`Categories loaded: ${categories.length}`);
        loadBookmarks();
        logDebug(`Bookmarks loaded: ${bookmarks.length}`);
        loadDarkMode();
        logDebug(`Dark mode: ${document.body.classList.contains('dark-mode')}`);
        initializeSearchUI();
        logDebug('Search UI initialized');
        setCurrentSearchEngine(currentSearchEngine, { persist: false });
        logDebug(`Search engine set: ${currentSearchEngine}`);
        initEventListeners();
        logDebug('Event listeners registered');
        initializeWeather();
        logDebug('Weather module initialized');
        initializeWeatherLocationSearch();
        logDebug('Weather location search initialized');
        updateUILanguage();
        logDebug('UI language applied');
        
        // initialize lucide icons
        if (window.lucide) {
            window.lucide.createIcons();
            logDebug('Lucide icons initialized');
        } else {
            console.error('Lucide library not loaded');
            logDebug('Lucide not available');
        }
        
        // 檢查啟動跳轉
        checkStartupRedirect();
        logDebug('Startup redirect checked');
    } catch (error) {
        console.error('Initialization error:', error);
        logDebug(`Initialization error: ${error?.message || error}`);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp, { once: true });
} else {
    initializeApp();
}

function normalizeLanguageCode(code) {
    if (!code || typeof code !== 'string') return null;
    const trimmed = code.trim();
    if (!trimmed) return null;
    if (translations[trimmed]) return trimmed;

    const lower = trimmed.toLowerCase();

    if (lower === 'en' || lower.startsWith('en-')) return 'en';
    if (lower === 'ja' || lower.startsWith('ja-') || lower.startsWith('jp')) return 'ja';

    if (lower.startsWith('zh')) {
        if (lower.includes('cn') || lower.includes('hans') || lower.includes('sg') || lower.includes('my')) {
            return 'zh-CN';
        }
        if (lower.includes('tw') || lower.includes('hk') || lower.includes('mo') || lower.includes('hant')) {
            return 'zh-TW';
        }
        return 'zh-TW';
    }

    return null;
}

function determinePreferredLanguage() {
    const candidates = [];
    const seen = new Set();

    const addCandidate = (code) => {
        if (!code || seen.has(code)) return;
        seen.add(code);
        candidates.push(code);
    };

    if (Array.isArray(navigator.languages)) {
        navigator.languages.forEach(addCandidate);
    }

    addCandidate(navigator.language);
    addCandidate(navigator.userLanguage);
    SUPPORTED_LANGUAGES.forEach(addCandidate);

    for (const candidate of candidates) {
        const resolved = normalizeLanguageCode(candidate);
        if (resolved && translations[resolved]) {
            return resolved;
        }
    }

    return 'en';
}

// 載入語言設定 (現在在 index.html 中處理)
// Load language settings (now handled in index.html)
function loadLanguage() {
    // 語言已在 index.html 中初始化，這裡只需要確保 currentLanguage 正確
    // Language already initialized in index.html, just ensure currentLanguage is correct
    if (window.translations) {
        translations = window.translations;
    }
    if (window.currentLanguage) {
        currentLanguage = window.currentLanguage;
    }
}

// 切換語言
async function changeLanguage(lang) {
    // 如果語言尚未載入，動態載入 / If language not loaded, dynamically load it
    if (!translations[lang]) {
        try {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = `i18n/${lang}.js`;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load ${lang} translation file`));
                document.head.appendChild(script);
            });

            const globalTranslations = window.TRANSLATIONS || {};
            if (globalTranslations[lang]) {
                translations[lang] = globalTranslations[lang];
            } else {
                console.warn(`Translation data for ${lang} not found after loading script.`);
            }
        } catch (error) {
            console.error(`Failed to load language ${lang}:`, error);
            return;
        }
    }

    currentLanguage = lang;
    window.currentLanguage = lang;
    window.translations = translations;
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
    
    // Update attribute-based translations (e.g., title, aria-label)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const attrSpec = el.getAttribute('data-i18n-attr');
        if (!attrSpec) return;
        const pairs = attrSpec.split(/[,;]/).map(part => part.trim()).filter(Boolean);
        const hasExplicitAria = pairs.some(pair => pair.trim().startsWith('aria-label'));
        pairs.forEach(pair => {
            const [attr, key] = pair.split(':').map(part => part && part.trim());
            if (!attr || !key) return;
            const value = t(key);
            el.setAttribute(attr, value);
            if (attr === 'title' && !hasExplicitAria) {
                el.setAttribute('aria-label', value);
            }
        });
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
    const quickButtons = [
        { id: 'addBookmarkBtn', label: 'addBookmark', icon: 'plus' },
        { id: 'manageCategoriesBtn', label: 'manageCategories', icon: 'folder' },
        { id: 'settingsBtn', label: 'settings', icon: 'settings' },
        { id: 'quickLangBtn', label: 'selectLanguage', icon: 'globe-2' },
        { id: 'quickDarkModeBtn', label: document.body.classList.contains('dark-mode') ? 'lightMode' : 'darkMode', icon: document.body.classList.contains('dark-mode') ? 'sun' : 'moon' }
    ];

    quickButtons.forEach(({ id, label, icon }) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        const desiredIcon = typeof icon === 'function' ? icon() : icon;
        const iconEl = document.createElement('i');
        iconEl.setAttribute('data-lucide', desiredIcon);
        btn.innerHTML = '';
        btn.appendChild(iconEl);
        btn.setAttribute('title', t(label));
        btn.setAttribute('aria-label', t(label));
        if (id === 'quickDarkModeBtn') {
            btn.classList.toggle('active', document.body.classList.contains('dark-mode'));
        }
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }

    const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
    if (darkModeToggleBtn) {
        const isDark = document.body.classList.contains('dark-mode');
        updateToggleButton(darkModeToggleBtn, isDark);
        const toggleLabelKey = isDark ? 'disableDarkMode' : 'enableDarkMode';
        const toggleLabel = t(toggleLabelKey);
        darkModeToggleBtn.setAttribute('aria-label', toggleLabel);
        darkModeToggleBtn.setAttribute('title', toggleLabel);
    }

    const darkModeStatus = document.querySelector('.dark-mode-toggle__status');
    if (darkModeStatus) {
        const isDark = document.body.classList.contains('dark-mode');
        darkModeStatus.textContent = t(isDark ? 'darkMode' : 'lightMode');
        darkModeStatus.dataset.state = isDark ? 'on' : 'off';
    }

    const blurToggleBtn = document.getElementById('blurToggleBtn');
    if (blurToggleBtn) {
        updateToggleButton(blurToggleBtn, isBlurEnabled());
    }

    updateWeatherControlsUI();
    updateDeveloperControlsUI();
    updateWeatherWidget();
    updateWeatherStatusMessageFromState();

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
    
    updateFabDarkModeIcon();
    
    // Reinitialize lucide icons
    if (window.lucide) window.lucide.createIcons();
}

// 載入設定
function loadSettings() {
    const savedEngine = localStorage.getItem('searchEngine') || 'google';
    const customUrl = localStorage.getItem('customSearchUrl') || '';

    currentSearchEngine = searchEngines[savedEngine] ? savedEngine : 'google';
    const customUrlInput = document.getElementById('customSearchUrl');
    if (customUrlInput) customUrlInput.value = customUrl;

    if (savedEngine === 'custom') {
        searchEngines.custom.url = customUrl;
    }

    syncCustomSearchInputs(customUrl);
    
    // 載入背景設定
    loadBackgroundSettings();
    // 載入外觀設定（模糊/濾鏡）
    loadAppearanceSettings();
    // 載入天氣與開發者設定
    loadWeatherSettings();
    loadDeveloperSettings();
    // 載入啟動網頁設定
    loadStartupSettings();
}

// 載入啟動網頁設定
function loadStartupSettings() {
    const startupEnabled = localStorage.getItem('startupEnabled') === 'true';
    const startupUrl = localStorage.getItem('startupUrl') || '';
    
    const toggleBtn = document.getElementById('startupToggleBtn');
    const urlInput = document.getElementById('startupUrlInput');
    const status = document.querySelector('.startup-toggle__status');
    
    if (urlInput) {
        urlInput.value = startupUrl;
    }
    
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('.settings-toggle__icon i');
        const label = toggleBtn.querySelector('.settings-toggle__label');
        
        if (startupEnabled) {
            toggleBtn.setAttribute('aria-pressed', 'true');
            if (icon) {
                icon.setAttribute('data-lucide', 'link-2');
            }
            if (label) {
                label.textContent = t('disableStartup') || '停用';
            }
            if (status) {
                status.setAttribute('data-state', 'on');
                status.textContent = t('startupStatusOn') || '啟動網頁已開啟';
            }
        } else {
            toggleBtn.setAttribute('aria-pressed', 'false');
            if (icon) {
                icon.setAttribute('data-lucide', 'link-2-off');
            }
            if (label) {
                label.textContent = t('enableStartup') || '啟用';
            }
            if (status) {
                status.setAttribute('data-state', 'off');
                status.textContent = t('startupStatusOff') || '啟動網頁已關閉';
            }
        }
        
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
}

// 切換啟動網頁
function toggleStartupUrl() {
    const currentEnabled = localStorage.getItem('startupEnabled') === 'true';
    const newEnabled = !currentEnabled;
    
    localStorage.setItem('startupEnabled', newEnabled.toString());
    loadStartupSettings();
}

// 儲存啟動網頁 URL
function saveStartupUrl() {
    const urlInput = document.getElementById('startupUrlInput');
    if (!urlInput) return;
    
    const url = urlInput.value.trim();
    
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
        alert(t('startupUrlInvalid') || '請輸入完整的網址，包含 https://');
        return;
    }
    
    localStorage.setItem('startupUrl', url);
}

// 檢查並執行啟動跳轉
function checkStartupRedirect() {
    const startupEnabled = localStorage.getItem('startupEnabled') === 'true';
    const startupUrl = localStorage.getItem('startupUrl') || '';
    
    // 檢查是否有標記表示已經處理過啟動跳轉（避免無限循環）
    const hasRedirected = sessionStorage.getItem('hasStartupRedirected') === 'true';
    
    if (startupEnabled && startupUrl && !hasRedirected) {
        // 標記為已跳轉
        sessionStorage.setItem('hasStartupRedirected', 'true');
        
        // 顯示載入動畫
        showSearchLoading();
        
        // 延遲後跳轉
        setTimeout(() => {
            window.location.href = startupUrl;
        }, 500);
        
        return true;
    }
    
    return false;
}

// 載入背景設定
function loadBackgroundSettings() {
    const bgType = localStorage.getItem('bgType') || 'image';
    const bgValue = localStorage.getItem('bgValue') || 'assets/default-background.webp';

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
    const customUrlInput = document.getElementById('customSearchUrl');
    if (customUrlInput) {
        const customUrl = customUrlInput.value;
        localStorage.setItem('customSearchUrl', customUrl);
        searchEngines.custom.url = customUrl;
        syncCustomSearchInputs(customUrl);
    }
    
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
    // 儲存天氣設定
    saveWeatherSettings();
    
    // 儲存語言設定
    const langSelect = document.getElementById('languageSelect');
    if (langSelect && langSelect.value !== currentLanguage) {
        changeLanguage(langSelect.value);
    }

    closeModal('settingsModal');
}

function prepareSettingsModal() {
    if (typeof settingsNavCleanup === 'function') {
        try {
            settingsNavCleanup();
        } catch (error) {
            console.warn('Failed to cleanup previous settings nav state:', error);
        }
    }

    loadSettings();

    const content = document.getElementById('settingsContent');
    if (content) {
        content.scrollTo({ top: 0, behavior: 'auto' });
        content.classList.remove('is-scrolled');
    }

    window.requestAnimationFrame(() => {
        initializeSettingsNavigation();
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });
}

function initializeSettingsNavigation() {
    const content = document.getElementById('settingsContent');
    const navLinks = Array.from(document.querySelectorAll('[data-settings-nav]'));
    if (!content || !navLinks.length) {
        return;
    }

    const sections = navLinks
        .map(link => {
            const key = link.dataset.settingsNav;
            const section = document.querySelector(`.settings-section[data-settings-area="${key}"]`) ||
                document.querySelector(`.settings-card[data-settings-area="${key}"]`);
            return section ? { key, link, section } : null;
        })
        .filter(Boolean);

    if (!sections.length) {
        return;
    }

    const setActive = (key) => {
        navLinks.forEach(link => {
            const isTarget = link.dataset.settingsNav === key;
            link.classList.toggle('active', isTarget);
            link.classList.toggle('is-active', isTarget);
        });
    };

    navLinks.forEach(link => {
        if (link.dataset.bound === '1') return;
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const matched = sections.find(item => item.link === link);
            if (!matched) return;
            const offset = matched.section.offsetTop;
            content.scrollTo({
                top: Math.max(0, offset - 12),
                behavior: 'smooth'
            });
        });
        link.dataset.bound = '1';
    });

    if (settingsNavObserver) {
        settingsNavObserver.disconnect();
        settingsNavObserver = null;
    }

    const handleScrollShadow = () => {
        content.classList.toggle('is-scrolled', content.scrollTop > 8);
        
        // Check if at bottom and update active nav
        const scrollTop = content.scrollTop;
        const contentHeight = content.scrollHeight;
        const visibleHeight = content.clientHeight;
        
        if (scrollTop + visibleHeight >= contentHeight - 20) {
            const lastSection = sections[sections.length - 1];
            if (lastSection) {
                setActive(lastSection.key);
            }
        }
    };

    settingsNavObserver = new IntersectionObserver((entries) => {
        const visible = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

        if (visible.length) {
            const key = visible[0].target.getAttribute('data-settings-area');
            if (key) setActive(key);
            return;
        }

        const scrollTop = content.scrollTop;
        const contentHeight = content.scrollHeight;
        const visibleHeight = content.clientHeight;
        
        // Check if scrolled to bottom
        if (scrollTop + visibleHeight >= contentHeight - 50) {
            const lastSection = sections[sections.length - 1];
            if (lastSection) {
                setActive(lastSection.key);
                return;
            }
        }
        
        const fallback = sections
            .slice()
            .reverse()
            .find(item => scrollTop >= item.section.offsetTop - 80);
        if (fallback) {
            setActive(fallback.key);
        }
    }, {
        root: content,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -40% 0px'
    });

    sections.forEach(({ section }) => settingsNavObserver.observe(section));

    setActive(sections[0].key);
    handleScrollShadow();
    content.addEventListener('scroll', handleScrollShadow);

    settingsNavCleanup = () => {
        content.removeEventListener('scroll', handleScrollShadow);
        if (settingsNavObserver) {
            settingsNavObserver.disconnect();
            settingsNavObserver = null;
        }
        settingsNavCleanup = null;
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.classList.remove('is-active');
        });
    };
}

function handleResetSettings(event) {
    const button = event?.currentTarget;
    if (!confirm(t('clearSettingsConfirm'))) {
        return;
    }

    if (button) {
        button.disabled = true;
        button.classList.add('is-busy');
        button.textContent = t('clearSettingsSuccess');
    }

    const keysToClear = [
        'language',
        'searchEngine',
        'customSearchUrl',
        'bgType',
        'bgValue',
        'blurEnabled',
        'blurAmount',
        'overlayType',
        'overlayOpacity',
        'uploadedBgImage',
        'searchHistory',
        'categories',
        'bookmarks',
        'darkMode',
        'darkModeDepth',
        WEATHER_ENABLED_KEY,
        WEATHER_LOCATION_KEY,
        DEBUG_PANEL_STORAGE_KEY
    ];

    keysToClear.forEach(key => localStorage.removeItem(key));

    bookmarks = [];
    categories = [];
    searchHistory = [];
    remoteSuggestCache.clear();

    document.body.classList.remove('dark-mode');
    document.body.style.background = '';
    document.documentElement.style.setProperty('--backdrop-blur', '0px');
    const overlayEl = document.getElementById('backgroundOverlay');
    if (overlayEl) overlayEl.style.background = 'transparent';

    setTimeout(() => {
        location.reload();
    }, 800);
}

function handleClearSearchHistory(event) {
    const button = event?.currentTarget;
    if (!confirm(t('clearSearchHistoryConfirm'))) {
        return;
    }

    if (button) {
        button.disabled = true;
        button.classList.add('is-busy');
        button.textContent = t('clearSearchHistorySuccess');
    }

    // 清空搜索歷史
    searchHistory = [];
    localStorage.removeItem('searchHistory');

    // 更新搜索建議顯示
    updateSearchSuggestions('');

    setTimeout(() => {
        if (button) {
            button.disabled = false;
            button.classList.remove('is-busy');
            button.textContent = t('clearSearchHistoryAction');
        }
    }, 1500);
}

function updateToggleButton(button, isActive) {
    if (!button) return;
    
    // 只在有標籤元素時更新文字（向後兼容）
    const labelEl = button.querySelector('.settings-toggle__label');
    if (labelEl) {
        const labels = button.dataset.toggleLabels ? button.dataset.toggleLabels.split(',').map(label => label && label.trim()) : [];
        const offKey = labels[0];
        const onKey = labels[1] || labels[0];
        const labelKey = isActive ? onKey : offKey;
        const labelText = labelKey ? t(labelKey) : '';
        
        labelEl.textContent = labelText;
        if (labelText) {
            button.setAttribute('aria-label', labelText);
            button.setAttribute('title', labelText);
        }
    } else if (button.dataset.toggleLabels) {
        const [offKey, onKey] = button.dataset.toggleLabels.split(',').map(label => label && label.trim());
        const labelKey = isActive ? (onKey || offKey) : offKey;
        if (labelKey) {
            const labelText = t(labelKey);
            button.setAttribute('aria-label', labelText);
            button.setAttribute('title', labelText);
        }
    }

    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    button.classList.toggle('is-active', !!isActive);
    button.dataset.state = isActive ? 'on' : 'off';

    const iconContainer = button.querySelector('.settings-toggle__icon');
    if (iconContainer) {
        const iconOff = button.dataset.iconOff || '';
        const iconOn = button.dataset.iconOn || iconOff;
        const desiredIcon = isActive ? iconOn : iconOff;
        if (desiredIcon) {
            const existingIcon = iconContainer.querySelector('[data-lucide]');
            if (!existingIcon || existingIcon.getAttribute('data-lucide') !== desiredIcon) {
                iconContainer.innerHTML = `<i data-lucide="${desiredIcon}"></i>`;
            }
        }
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons({ nameAttr: 'data-lucide' });
    }
}

function isBlurEnabled() {
    const stored = localStorage.getItem('blurEnabled');
    if (stored === null) return false;
    return stored === 'true';
}

function parseNumber(value, fallback) {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function setBlurEnabled(enabled) {
    localStorage.setItem('blurEnabled', enabled ? 'true' : 'false');
    if (enabled) {
        const stored = Number(localStorage.getItem('blurAmount'));
        if (!Number.isFinite(stored)) {
            localStorage.setItem('blurAmount', String(DEFAULT_BLUR_AMOUNT));
        }
    }
    applyAppearanceSettings();
}

function loadAppearanceSettings() {
    const blurToggleBtn = document.getElementById('blurToggleBtn');
    const blurControls = document.getElementById('blurControls');
    const blurRange = document.getElementById('blurRange');
    const blurValue = document.getElementById('blurValue');
    const overlaySelect = document.getElementById('overlaySelect');
    const overlayRange = document.getElementById('overlayOpacity');
    const overlayValue = document.getElementById('overlayValue');

    const blurEnabled = isBlurEnabled();
    const fallbackBlur = blurRange ? parseNumber(blurRange.value, DEFAULT_BLUR_AMOUNT) : DEFAULT_BLUR_AMOUNT;
    const storedBlur = parseNumber(localStorage.getItem('blurAmount'), fallbackBlur);
    const blurAmount = clamp(storedBlur, 0, 40);

    if (blurRange) {
        blurRange.value = String(blurAmount);
        blurRange.disabled = !blurEnabled;
        blurRange.setAttribute('aria-disabled', blurEnabled ? 'false' : 'true');
    }
    if (blurValue) blurValue.textContent = String(blurAmount);
    if (blurControls) blurControls.classList.toggle('is-inactive', !blurEnabled);
    if (blurToggleBtn) updateToggleButton(blurToggleBtn, blurEnabled);

    const overlayType = localStorage.getItem('overlayType') || (overlaySelect ? overlaySelect.value : DEFAULT_OVERLAY_TYPE);
    if (overlaySelect) overlaySelect.value = overlayType;

    const fallbackOverlay = overlayRange ? parseNumber(overlayRange.value, DEFAULT_OVERLAY_OPACITY) : DEFAULT_OVERLAY_OPACITY;
    const storedOverlay = parseNumber(localStorage.getItem('overlayOpacity'), fallbackOverlay);
    const overlayOpacity = clamp(storedOverlay, 0, 1);

    const formattedOverlay = overlayOpacity.toFixed(2);
    if (overlayRange) overlayRange.value = formattedOverlay;
    if (overlayValue) overlayValue.textContent = formattedOverlay;

    applyAppearanceSettings();
}

function saveAppearanceSettings() {
    const blurToggleBtn = document.getElementById('blurToggleBtn');
    const blurRange = document.getElementById('blurRange');
    const overlaySelect = document.getElementById('overlaySelect');
    const overlayRange = document.getElementById('overlayOpacity');

    if (blurToggleBtn) {
        const pressed = blurToggleBtn.getAttribute('aria-pressed') === 'true';
        localStorage.setItem('blurEnabled', pressed ? 'true' : 'false');
    }

    if (blurRange) {
        const amount = clamp(parseNumber(blurRange.value, DEFAULT_BLUR_AMOUNT), 0, 40);
        localStorage.setItem('blurAmount', String(amount));
    }

    if (overlaySelect) {
        localStorage.setItem('overlayType', overlaySelect.value || DEFAULT_OVERLAY_TYPE);
    }

    if (overlayRange) {
        const opacity = clamp(parseNumber(overlayRange.value, DEFAULT_OVERLAY_OPACITY), 0, 1);
        localStorage.setItem('overlayOpacity', opacity.toFixed(2));
    }

    applyAppearanceSettings();
}

function applyAppearanceSettings() {
    const blurEnabled = isBlurEnabled();
    const blurToggleBtn = document.getElementById('blurToggleBtn');
    const blurControls = document.getElementById('blurControls');
    const blurRange = document.getElementById('blurRange');
    const blurValue = document.getElementById('blurValue');

    const storedBlur = parseNumber(localStorage.getItem('blurAmount'), DEFAULT_BLUR_AMOUNT);
    const blurAmount = clamp(storedBlur, 0, 40);

    if (blurRange) {
        if (blurRange.value !== String(blurAmount)) {
            blurRange.value = String(blurAmount);
        }
        blurRange.disabled = !blurEnabled;
        blurRange.setAttribute('aria-disabled', blurEnabled ? 'false' : 'true');
    }
    if (blurValue) blurValue.textContent = String(blurAmount);
    if (blurControls) blurControls.classList.toggle('is-inactive', !blurEnabled);
    if (blurToggleBtn) updateToggleButton(blurToggleBtn, blurEnabled);

    document.documentElement.style.setProperty('--backdrop-blur', blurEnabled ? `${blurAmount}px` : '0px');

    const overlaySelect = document.getElementById('overlaySelect');
    const overlayRange = document.getElementById('overlayOpacity');
    const overlayValue = document.getElementById('overlayValue');

    const overlayType = localStorage.getItem('overlayType') || DEFAULT_OVERLAY_TYPE;
    const storedOverlay = parseNumber(localStorage.getItem('overlayOpacity'), DEFAULT_OVERLAY_OPACITY);
    const overlayOpacity = clamp(storedOverlay, 0, 1);
    const formattedOverlay = overlayOpacity.toFixed(2);

    if (overlaySelect && overlaySelect.value !== overlayType) {
        overlaySelect.value = overlayType;
    }
    if (overlayRange && overlayRange.value !== formattedOverlay) {
        overlayRange.value = formattedOverlay;
    }
    if (overlayValue) overlayValue.textContent = formattedOverlay;

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

function updateBlurAmount(value) {
    const amount = clamp(parseNumber(value, DEFAULT_BLUR_AMOUNT), 0, 40);
    localStorage.setItem('blurAmount', String(amount));
    const blurValue = document.getElementById('blurValue');
    if (blurValue) blurValue.textContent = String(amount);
    applyAppearanceSettings();
}

function applyOverlay(value) {
    const overlaySelect = document.getElementById('overlaySelect');
    if (overlaySelect && overlaySelect.value !== value) {
        overlaySelect.value = value;
    }
    const normalized = value || DEFAULT_OVERLAY_TYPE;
    localStorage.setItem('overlayType', normalized);
    applyAppearanceSettings();
}

function updateOverlayOpacity(value) {
    const opacity = clamp(parseNumber(value, DEFAULT_OVERLAY_OPACITY), 0, 1);
    const formatted = opacity.toFixed(2);
    const overlayRange = document.getElementById('overlayOpacity');
    const overlayValue = document.getElementById('overlayValue');
    if (overlayRange && overlayRange.value !== formatted) {
        overlayRange.value = formatted;
    }
    if (overlayValue) overlayValue.textContent = formatted;
    localStorage.setItem('overlayOpacity', formatted);
    applyAppearanceSettings();
}

// 天氣小工具設定
function getWeatherLocation() {
    return (localStorage.getItem(WEATHER_LOCATION_KEY) || '').trim();
}

function setWeatherLocation(value) {
    const trimmed = (value || '').trim();
    if (trimmed) {
        localStorage.setItem(WEATHER_LOCATION_KEY, trimmed);
        return trimmed;
    }
    localStorage.removeItem(WEATHER_LOCATION_KEY);
    return '';
}

function isWeatherEnabled() {
    const stored = localStorage.getItem(WEATHER_ENABLED_KEY);
    if (stored === null) {
        return true;
    }
    return stored === 'true';
}

function setWeatherEnabled(enabled) {
    localStorage.setItem(WEATHER_ENABLED_KEY, enabled ? 'true' : 'false');
    if (!enabled) {
        closeModal('weatherModal');
        weatherState = {
            loading: false,
            error: null,
            data: null,
            resolvedName: '',
            lastUpdated: null
        };
    }
    updateWeatherControlsUI();
    renderBookmarks();
    if (enabled) {
        refreshWeather({ force: true }).catch(error => {
            console.error('Weather refresh failed:', error);
        });
    } else {
        updateWeatherWidget();
        updateWeatherStatusMessageFromState();
    }
}

function updateWeatherControlsUI() {
    const enabled = isWeatherEnabled();
    const toggleBtn = document.getElementById('weatherToggleBtn');
    if (toggleBtn) {
        updateToggleButton(toggleBtn, enabled);
        const toggleLabelKey = enabled ? 'disableWeather' : 'enableWeather';
        const label = t(toggleLabelKey);
        toggleBtn.setAttribute('aria-label', label);
        toggleBtn.setAttribute('title', label);
    }

    const statusLabel = document.querySelector('.weather-toggle__status');
    if (statusLabel) {
        statusLabel.textContent = t(enabled ? 'weatherStatusOn' : 'weatherStatusOff');
        statusLabel.dataset.state = enabled ? 'on' : 'off';
    }

    const input = document.getElementById('weatherLocationInput');
    const applyBtn = document.getElementById('weatherApplyBtn');
    const modalInput = document.getElementById('weatherModalLocationInput');
    const field = document.querySelector('.weather-field');
    if (input) {
        input.disabled = !enabled;
        if (!input.value) {
            input.value = getWeatherLocation();
        }
    }
    if (modalInput) {
        modalInput.disabled = !enabled;
        modalInput.value = getWeatherLocation();
    }
    if (applyBtn) {
        applyBtn.disabled = !enabled;
    }
    if (field) {
        field.classList.toggle('is-disabled', !enabled);
    }

    const weatherModalApplyBtn = document.getElementById('weatherModalApplyBtn');
    if (weatherModalApplyBtn) {
        weatherModalApplyBtn.disabled = !enabled;
    }

    const weatherModalRefreshBtn = document.getElementById('weatherModalRefreshBtn');
    if (weatherModalRefreshBtn) {
        weatherModalRefreshBtn.disabled = !enabled;
    }

    const weatherModalDisableBtn = document.getElementById('weatherModalDisableBtn');
    if (weatherModalDisableBtn) {
        weatherModalDisableBtn.disabled = !enabled;
    }

    updateWeatherStatusMessageFromState();
}

function loadWeatherSettings() {
    const input = document.getElementById('weatherLocationInput');
    if (input) {
        input.value = getWeatherLocation();
    }
    updateWeatherControlsUI();
}

function saveWeatherSettings() {
    const input = document.getElementById('weatherLocationInput');
    if (input) {
        const stored = setWeatherLocation(input.value);
        if (!stored) {
            weatherState.resolvedName = '';
        } else {
            input.value = stored;
        }
    }
}

async function applyWeatherLocation() {
    const input = document.getElementById('weatherLocationInput');
    if (!input) return;
    const location = setWeatherLocation(input.value);
    if (isWeatherEnabled()) {
        await refreshWeather({ force: true });
    } else {
        updateWeatherStatusMessageFromState();
    }
}

async function applyWeatherLocationFromModal() {
    const input = document.getElementById('weatherModalLocationInput');
    if (!input) return;
    const location = setWeatherLocation(input.value);
    updateWeatherControlsUI();
    if (isWeatherEnabled() && location) {
        await refreshWeather({ force: true });
    } else {
        weatherState.resolvedName = location ? weatherState.resolvedName : '';
        updateWeatherWidget();
        updateWeatherStatusMessageFromState();
    }
}

function handleWeatherToggle() {
    setWeatherEnabled(!isWeatherEnabled());
}

async function searchWeatherLocation(query) {
    if (!query || query.length < 2) {
        hideWeatherSuggestions();
        return;
    }
    
    try {
        // Map language codes to Open-Meteo supported languages
        const langMap = {
            'zh-TW': 'zh',
            'zh-CN': 'zh',
            'ja': 'ja',
            'en': 'en'
        };
        const apiLang = langMap[currentLanguage] || 'en';
        
        let results = [];
        
        // 嘗試 Open-Meteo API
        try {
            const url = `${WEATHER_GEOCODE_URL}?name=${encodeURIComponent(query)}&count=8&language=${apiLang}&format=json`;
            const response = await fetch(url);
            
            if (response.ok) {
                const data = await response.json();
                results = data.results || [];
            }
        } catch (error) {
            console.warn('Open-Meteo geocoding failed, trying backup...', error);
        }
        
        // 如果沒有結果，使用 Nominatim 備用 API
        if (results.length === 0) {
            try {
                const backupUrl = `${WEATHER_GEOCODE_URL_BACKUP}?q=${encodeURIComponent(query)}&format=json&limit=8&accept-language=${apiLang}`;
                const backupResponse = await fetch(backupUrl, {
                    headers: {
                        'User-Agent': 'CustomHomePage/1.0'
                    }
                });
                
                if (backupResponse.ok) {
                    const backupData = await backupResponse.json();
                    results = backupData.map(item => ({
                        name: item.display_name.split(',')[0],
                        admin1: item.address?.state || item.address?.county || '',
                        country: item.address?.country || '',
                        latitude: parseFloat(item.lat),
                        longitude: parseFloat(item.lon)
                    }));
                }
            } catch (backupError) {
                console.error('Backup geocoding failed:', backupError);
            }
        }
        
        displayWeatherSuggestions(results);
    } catch (error) {
        console.error('Location search failed:', error);
        hideWeatherSuggestions();
    }
}

function displayWeatherSuggestions(locations) {
    const container = document.querySelector('[data-weather-suggestions]');
    if (!container) return;
    
    if (!locations || locations.length === 0) {
        hideWeatherSuggestions();
        return;
    }
    
    container.innerHTML = locations.map(loc => {
        const parts = [loc.name];
        if (loc.admin1) parts.push(loc.admin1);
        if (loc.country) parts.push(loc.country);
        const displayName = parts.join(', ');
        
        return `
            <button type="button" class="weather-suggestion-item" data-location="${escapeHtml(loc.name)}">
                <i data-lucide="map-pin"></i>
                <span>${escapeHtml(displayName)}</span>
            </button>
        `;
    }).join('');
    
    container.hidden = false;
    container.classList.add('show');
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Bind click events
    container.querySelectorAll('.weather-suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            const location = item.dataset.location;
            selectWeatherLocation(location);
        });
    });
}

function selectWeatherLocation(location) {
    const input = document.getElementById('weatherLocationSearchInput');
    if (input) {
        input.value = location;
    }
    
    setWeatherLocation(location);
    hideWeatherSuggestions();
    
    if (isWeatherEnabled()) {
        refreshWeather({ force: true });
    }
}

function hideWeatherSuggestions() {
    const container = document.querySelector('[data-weather-suggestions]');
    if (container) {
        container.hidden = true;
        container.classList.remove('show');
        container.innerHTML = '';
    }
}

function initializeWeather() {
    updateWeatherControlsUI();
    updateWeatherWidget();
    if (isWeatherEnabled()) {
        refreshWeather().catch(error => {
            console.error('Weather initialization failed:', error);
        });
    }
}

async function refreshWeather({ force = false } = {}) {
    if (!isWeatherEnabled()) {
        weatherState.loading = false;
        updateWeatherWidget();
        updateWeatherStatusMessageFromState();
        return;
    }

    const location = getWeatherLocation();
    if (!location) {
        weatherState = {
            loading: false,
            error: null,
            data: null,
            resolvedName: '',
            lastUpdated: null
        };
        updateWeatherWidget();
        updateWeatherStatusMessageFromState();
        return;
    }

    const normalizedLocation = location.toLowerCase();
    const cached = weatherCache.get(normalizedLocation);
    if (!force && cached && Date.now() - cached.timestamp < WEATHER_CACHE_TTL) {
        weatherState = {
            loading: false,
            error: null,
            data: cached.data,
            resolvedName: cached.resolvedName,
            lastUpdated: cached.lastUpdated
        };
        updateWeatherWidget();
        updateWeatherStatusMessageFromState();
        logDebug(`Weather loaded from cache: ${cached.resolvedName}`);
        return;
    }

    weatherState = {
        ...weatherState,
        loading: true,
        error: null
    };
    updateWeatherWidget();
    updateWeatherStatusMessageFromState();

    const token = ++weatherRequestToken;

    try {
        const geoUrl = `${WEATHER_GEOCODE_URL}?name=${encodeURIComponent(location)}&count=1&language=${currentLanguage || 'en'}&format=json`;
        const geoResponse = await fetch(geoUrl);
        if (!geoResponse.ok) {
            throw new Error(`GEOCODE_${geoResponse.status}`);
        }
        const geoData = await geoResponse.json();
        if (!geoData?.results?.length) {
            throw new Error('LOCATION_NOT_FOUND');
        }
        const place = geoData.results[0];
        const resolvedNameParts = [place.name, place.admin1, place.country_code].filter(Boolean);
        const resolvedName = resolvedNameParts.join(', ');
        const weatherUrl = `${WEATHER_FORECAST_URL}?latitude=${place.latitude}&longitude=${place.longitude}&current_weather=true&timezone=auto`;
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
            throw new Error(`WEATHER_${weatherResponse.status}`);
        }
        const weatherJson = await weatherResponse.json();
        const current = weatherJson?.current_weather;
        if (!current) {
            throw new Error('NO_WEATHER_DATA');
        }
        if (token !== weatherRequestToken) {
            return;
        }
        const data = {
            temperature: typeof current.temperature === 'number' ? current.temperature : null,
            windspeed: typeof current.windspeed === 'number' ? current.windspeed : null,
            weathercode: current.weathercode,
            time: current.time || null
        };
        const timestamp = Date.now();
        weatherState = {
            loading: false,
            error: null,
            data,
            resolvedName,
            lastUpdated: data.time || timestamp
        };
        weatherCache.set(normalizedLocation, {
            data,
            resolvedName,
            timestamp,
            lastUpdated: weatherState.lastUpdated
        });
        updateWeatherWidget();
        updateWeatherStatusMessageFromState();
        logDebug(`Weather updated: ${resolvedName}`);
    } catch (error) {
        if (token !== weatherRequestToken) {
            return;
        }
        const message = typeof error?.message === 'string' ? error.message : 'UNKNOWN';
        const isLocationError = message === 'LOCATION_NOT_FOUND';
        weatherState = {
            loading: false,
            error: isLocationError ? 'location-not-found' : 'fetch-failed',
            data: null,
            resolvedName: '',
            lastUpdated: null
        };
        updateWeatherWidget();
        updateWeatherStatusMessageFromState();
        logDebug(`Weather update failed: ${message}`);
    }
}

function resolveWeatherDescriptor(code) {
    const numericCode = Number(code);
    if (!Number.isFinite(numericCode)) {
        return { key: 'weatherConditionUnknown', icon: 'cloud.png' };
    }

    if (numericCode === 0) return { key: 'weatherConditionClear', icon: 'sun.png' };
    if (numericCode === 1) return { key: 'weatherConditionMostlyClear', icon: 'sun-behind-small-cloud.png' };
    if (numericCode === 2) return { key: 'weatherConditionMostlyClear', icon: 'sun-behind-cloud.png' };
    if (numericCode === 3) return { key: 'weatherConditionCloudy', icon: 'sun-behind-large-cloud.png' };
    if (numericCode === 45 || numericCode === 48) return { key: 'weatherConditionFog', icon: 'fog.png' };
    if (numericCode >= 51 && numericCode <= 57) return { key: 'weatherConditionDrizzle', icon: 'sun-behind-rain-cloud.png' };
    if ([61, 63].includes(numericCode)) return { key: 'weatherConditionRain', icon: 'cloud-with-rain.png' };
    if ([65, 80, 81, 82].includes(numericCode)) return { key: 'weatherConditionHeavyRain', icon: 'cloud-with-lightning-and-rain.png' };
    if (numericCode === 66 || numericCode === 67) return { key: 'weatherConditionFreezingRain', icon: 'cloud-with-snow.png' };
    if ((numericCode >= 71 && numericCode <= 77) || numericCode === 85 || numericCode === 86) {
        const key = numericCode === 85 || numericCode === 86 ? 'weatherConditionSnowShower' : 'weatherConditionSnow';
        return { key, icon: 'cloud-with-snow.png' };
    }
    if (numericCode === 95 || numericCode === 96 || numericCode === 99) return { key: 'weatherConditionThunderstorm', icon: 'cloud-with-lightning-and-rain.png' };
    return { key: 'weatherConditionUnknown', icon: 'cloud.png' };
}

function setWeatherIcon(container, iconContent, animated = false) {
    if (!container) return;
    container.classList.toggle('is-rotating', animated);
    if (!iconContent) {
        container.innerHTML = '';
    } else if (iconContent.startsWith('img:')) {
        // Image mode - Fluent Emoji
        const imgName = iconContent.substring(4);
        container.innerHTML = `<img src="assets/weather/${imgName}" alt="weather" class="weather-icon-img" />`;
    } else if (iconContent.startsWith('emoji:')) {
        // Emoji mode (fallback)
        const emoji = iconContent.substring(6);
        container.innerHTML = `<span class="weather-emoji">${emoji}</span>`;
    } else {
        // Lucide icon mode (for loader, error states)
        container.innerHTML = `<i data-lucide="${iconContent}"></i>`;
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }
}

function formatWeatherTimestamp(value) {
    if (!value) return '';
    const date = typeof value === 'number' ? new Date(value) : new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getWeatherViewModel() {
    const enabled = isWeatherEnabled();
    const storedLocation = getWeatherLocation();
    const resolvedLocation = weatherState.resolvedName || storedLocation;

    const view = {
        enabled,
        hasStoredLocation: Boolean(storedLocation),
        locationText: resolvedLocation || '',
        icon: 'img:sun-behind-cloud.png',
        rotating: false,
        tempText: t('weatherSection') || '天氣',
        conditionText: '',
        windText: '',
        updatedText: '',
        statusText: '',
        errorType: weatherState.error || null
    };

    if (!enabled) {
        view.statusText = t('weatherStatusOff');
        view.conditionText = view.statusText;
        view.tempText = t('weatherSection') || '天氣';
        return view;
    }

    if (!storedLocation) {
        view.statusText = t('weatherStatusLocationMissing');
        view.conditionText = view.statusText;
        view.icon = 'img:sun-behind-cloud.png';
        view.tempText = t('weatherSection') || '天氣';
        return view;
    }

    if (weatherState.loading) {
        view.statusText = t('weatherStatusLoading');
        view.conditionText = view.statusText;
        view.icon = 'loader-2';
        view.rotating = true;
        view.tempText = '…';
        return view;
    }

    if (weatherState.error === 'location-not-found') {
        view.statusText = t('weatherStatusLocationNotFound');
        view.conditionText = view.statusText;
        view.icon = 'help-circle';
        return view;
    }

    if (weatherState.error) {
        view.statusText = t('weatherStatusError');
        view.conditionText = view.statusText;
        view.icon = 'alert-triangle';
        return view;
    }

    if (!weatherState.data) {
        view.statusText = t('weatherStatusLoading');
        view.conditionText = view.statusText;
        view.icon = 'img:cloud.png';
        return view;
    }

    const descriptor = resolveWeatherDescriptor(weatherState.data.weathercode);
    view.icon = `img:${descriptor.icon}`;
    view.conditionText = t(descriptor.key);

    const temperature = typeof weatherState.data.temperature === 'number' ? Math.round(weatherState.data.temperature) : null;
    view.tempText = Number.isFinite(temperature) ? `${temperature}°C` : '--°';

    if (typeof weatherState.data.windspeed === 'number') {
        view.windText = templateReplace(t('weatherWind'), { speed: Math.round(weatherState.data.windspeed) });
    }

    const timeString = formatWeatherTimestamp(weatherState.data.time || weatherState.lastUpdated);
    if (timeString) {
        view.updatedText = templateReplace(t('weatherLastUpdated'), { time: timeString });
        view.statusText = view.updatedText;
    } else {
        view.statusText = '';
    }

    return view;
}

function updateWeatherWidget() {
    const view = getWeatherViewModel();

    const tile = document.querySelector('[data-weather-bookmark]');
    if (tile) {
        tile.classList.toggle('is-inactive', !view.enabled);
        const iconContainer = tile.querySelector('[data-weather-icon="tile"]');
        setWeatherIcon(iconContainer, view.icon, view.rotating);
        const tempEl = tile.querySelector('[data-weather-temp="tile"]');
        if (tempEl) tempEl.textContent = view.tempText;
        const locationEl = tile.querySelector('[data-weather-location="tile"]');
        if (locationEl) locationEl.textContent = view.locationText || '';
        const conditionEl = tile.querySelector('[data-weather-condition="tile"]');
        if (conditionEl) conditionEl.textContent = view.conditionText || view.statusText || '';
    }

    const modal = document.getElementById('weatherModal');
    if (modal) {
        const iconContainer = modal.querySelector('[data-weather-icon="modal"]');
        setWeatherIcon(iconContainer, view.icon, view.rotating);
        const tempEl = modal.querySelector('[data-weather-temp="modal"]');
        if (tempEl) tempEl.textContent = view.tempText;
        const locationEl = modal.querySelector('[data-weather-location="modal"]');
        if (locationEl) locationEl.textContent = view.locationText || '';
        const conditionEl = modal.querySelector('[data-weather-condition]');
        if (conditionEl) conditionEl.textContent = view.conditionText || view.statusText || '';
        const updatedEl = modal.querySelector('[data-weather-updated]');
        if (updatedEl) updatedEl.textContent = view.updatedText;
        const windEl = modal.querySelector('[data-weather-wind]');
        if (windEl) windEl.textContent = view.windText;
        const statusEl = modal.querySelector('[data-weather-status]');
        if (statusEl) statusEl.textContent = view.statusText;
    }

    document.querySelectorAll('[data-refresh-weather]').forEach(btn => {
        btn.disabled = !view.enabled || !view.hasStoredLocation;
        btn.classList.toggle('is-busy', !!weatherState.loading);
    });
}

function updateWeatherStatusMessageFromState() {
    const view = getWeatherViewModel();
    const statusEl = document.getElementById('weatherStatusText');
    if (statusEl) {
        statusEl.textContent = view.statusText || view.conditionText || '';
    }
    const modalStatus = document.querySelector('#weatherModal [data-weather-status]');
    if (modalStatus) {
        modalStatus.textContent = view.statusText || view.conditionText || '';
    }
}

// 開發者工具設定
function loadDeveloperSettings() {
    updateDeveloperControlsUI();
    if (isDebugPanelEnabled()) {
        renderDebugPanel();
    } else {
        removeDebugPanel();
    }
}

function updateDeveloperControlsUI() {
    const enabled = isDebugPanelEnabled();
    const toggleBtn = document.getElementById('debugToggleBtn');
    if (toggleBtn) {
        updateToggleButton(toggleBtn, enabled);
        const toggleLabelKey = enabled ? 'disableDebugPanel' : 'enableDebugPanel';
        const label = t(toggleLabelKey);
        toggleBtn.setAttribute('aria-label', label);
        toggleBtn.setAttribute('title', label);
    }

    const statusLabel = document.querySelector('.debug-toggle__status');
    if (statusLabel) {
        statusLabel.textContent = t(enabled ? 'debugStatusOn' : 'debugStatusOff');
        statusLabel.dataset.state = enabled ? 'on' : 'off';
    }
}

function handleDebugToggle() {
    const nextState = !isDebugPanelEnabled();
    setDebugPanelEnabled(nextState);
    updateDeveloperControlsUI();
}

// 處理圖片上傳
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // 檢查文件類型
    if (!file.type.startsWith('image/')) {
        alert(t('alertInvalidImage') || '請選擇有效的圖片文件');
        return;
    }
    
    // 檢查文件大小 (限制 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert(t('alertImageTooLarge') || '圖片大小不能超過 5MB');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageData = e.target.result;
        // 保存到 localStorage
        localStorage.setItem('uploadedBgImage', imageData);
        
        // 更新背景圖片 URL 輸入框
        const bgImageUrl = document.getElementById('bgImageUrl');
        if (bgImageUrl) {
            bgImageUrl.value = '(已上傳的圖片)';
        }
        
        // 應用背景
        document.body.style.background = `url('${imageData}') center/cover fixed no-repeat`;
        localStorage.setItem('bgValue', imageData);
        localStorage.setItem('bgType', 'image');
        
        alert(t('alertImageUploaded') || '圖片已上傳並應用！');
    };
    
    reader.onerror = function() {
        alert(t('alertUploadError') || '圖片上傳失敗，請重試');
    };
    
    reader.readAsDataURL(file);
}

// 初始化事件監聽
function initEventListeners() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInputChange);
        searchInput.addEventListener('focus', () => updateSearchSuggestions(searchInput.value));
        searchInput.addEventListener('keydown', handleSearchInputKeydown);
        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                const suggestions = document.getElementById('searchSuggestions');
                if (suggestions && !suggestions.matches(':hover')) {
                    // 不要隱藏，只在點擊外部時才隱藏
                    // suggestions.classList.add('hidden');
                }
            }, 120);
        });
    }

    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) searchBtn.addEventListener('click', () => performSearch());

    const openUrlBtn = document.getElementById('openUrlBtn');
    if (openUrlBtn) openUrlBtn.addEventListener('click', () => {
        const query = document.getElementById('searchInput')?.value.trim() || '';
        if (query) openQueryUrl(query);
    });

    const engineSelector = document.getElementById('engineSelector');
    if (engineSelector) {
        engineSelector.addEventListener('click', toggleEngineDropdown);
        engineSelector.addEventListener('keydown', handleEngineSelectorKeydown);
    }

    const engineIconTrigger = document.getElementById('engineSelectorIcon');
    if (engineIconTrigger) engineIconTrigger.addEventListener('click', handleEngineIconClick);

    const engineDropdown = document.getElementById('engineDropdown');
    if (engineDropdown) engineDropdown.addEventListener('click', handleEngineDropdownClick);

    document.addEventListener('click', handleGlobalClickForDropdowns);

    const suggestions = document.getElementById('searchSuggestions');
    if (suggestions) suggestions.addEventListener('click', handleSuggestionClick);

    const saveCustomInline = document.getElementById('saveCustomEngineInline');
    if (saveCustomInline) saveCustomInline.addEventListener('click', saveCustomSearchInline);

    const customInlineInput = document.getElementById('customSearchInline');
    if (customInlineInput) {
        customInlineInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                saveCustomSearchInline();
            }
        });
    }

    const customUrlInput = document.getElementById('customSearchUrl');
    if (customUrlInput) {
        customUrlInput.addEventListener('input', function() {
            syncCustomSearchInputs(this.value);
            if (currentSearchEngine === 'custom') {
                searchEngines.custom.url = this.value;
            }
        });
    }

    const suggestionContainer = document.getElementById('searchSuggestions');
    if (suggestionContainer) suggestionContainer.addEventListener('click', handleSuggestionClick);
    
    // 設定按鈕
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            openModal('settingsModal');
        });
    }
    
    const saveSettingsBtn = document.getElementById('saveSettings');
    if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', saveSettings);

    const resetSettingsBtn = document.getElementById('resetSettings');
    if (resetSettingsBtn) resetSettingsBtn.addEventListener('click', handleResetSettings);
    
    const clearSearchHistoryBtn = document.getElementById('clearSearchHistoryBtn');
    if (clearSearchHistoryBtn) clearSearchHistoryBtn.addEventListener('click', handleClearSearchHistory);
    
    // 背景類型選擇
    document.querySelectorAll('input[name="bgType"]').forEach(radio => {
        radio.addEventListener('change', function(e) {
            showBgOptions(e.target.value);
        });
    });
    
    // 書籤按鈕
    const addBtn = document.getElementById('addBookmarkBtn');
    if (addBtn) addBtn.addEventListener('click', function() { openBookmarkModal(null, ''); });
    
    const saveBookmarkBtn = document.getElementById('saveBookmark');
    if (saveBookmarkBtn) saveBookmarkBtn.addEventListener('click', saveBookmark);
    // 關閉由 data-close 控制
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-close');
            if (id) closeModal(id);
        });
    });
    
    const bookmarkIconInput = document.getElementById('bookmarkIcon');
    if (bookmarkIconInput) {
        updateBookmarkIconPreview(bookmarkIconInput.value);
        bookmarkIconInput.addEventListener('input', (event) => updateBookmarkIconPreview(event.target.value));
        bookmarkIconInput.addEventListener('change', (event) => updateBookmarkIconPreview(event.target.value));
    }

    // 抓取圖示按鈕
    const autoIconBtn = document.getElementById('autoIconBtn');
    if (autoIconBtn) autoIconBtn.addEventListener('click', fetchFavicon);
    
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
        quickDarkModeBtn.addEventListener('click', () => cycleDarkModePreference());
    }
    
    // 移動端懸浮球
    const fabBtn = document.getElementById('fabBtn');
    const fabMenu = document.getElementById('fabMenu');
    const fabBackdrop = document.getElementById('fabBackdrop');
    
    if (fabBtn && fabMenu) {
        const toggleFabMenu = (show) => {
            const isOpen = show !== undefined ? show : !fabMenu.classList.contains('show');
            fabMenu.classList.toggle('show', isOpen);
            fabBtn.classList.toggle('active', isOpen);
            fabBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (fabBackdrop) {
                fabBackdrop.classList.toggle('show', isOpen);
            }
        };

        fabBtn.setAttribute('aria-expanded', 'false');

        fabBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleFabMenu();
        });
        
        fabBackdrop?.addEventListener('click', () => closeFabMenu());
        
        // FAB 選項事件
        document.getElementById('fabAddBookmark')?.addEventListener('click', function() {
            openBookmarkModal(null, '');
            closeFabMenu();
        });
        
        document.getElementById('fabManageCategories')?.addEventListener('click', function() {
            openCategoryManagement();
            closeFabMenu();
        });
        
        document.getElementById('fabSettings')?.addEventListener('click', function() {
            openModal('settingsModal');
            closeFabMenu();
        });
        
        document.getElementById('fabLang')?.addEventListener('click', function() {
            cycleFabLanguage();
            closeFabMenu();
        });
        
        document.getElementById('fabDarkMode')?.addEventListener('click', function() {
            cycleDarkModePreference();
            closeFabMenu();
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

    // 設定面板中的夜間模式選項按鈕
    const darkModeAutoBtn = document.getElementById('darkModeAutoBtn');
    const darkModeLightBtn = document.getElementById('darkModeLightBtn');
    const darkModeDarkBtn = document.getElementById('darkModeDarkBtn');
    
    if (darkModeAutoBtn) {
        darkModeAutoBtn.addEventListener('click', () => setDarkModePreference('auto'));
    }
    if (darkModeLightBtn) {
        darkModeLightBtn.addEventListener('click', () => setDarkModePreference('light'));
    }
    if (darkModeDarkBtn) {
        darkModeDarkBtn.addEventListener('click', () => setDarkModePreference('dark'));
    }

    const weatherToggleBtn = document.getElementById('weatherToggleBtn');
    if (weatherToggleBtn) {
        weatherToggleBtn.addEventListener('click', handleWeatherToggle);
    }

    const weatherApplyBtn = document.getElementById('weatherApplyBtn');
    if (weatherApplyBtn) {
        weatherApplyBtn.addEventListener('click', () => {
            applyWeatherLocation();
        });
    }
    
    // 啟動網頁設定
    const startupToggleBtn = document.getElementById('startupToggleBtn');
    if (startupToggleBtn) {
        startupToggleBtn.addEventListener('click', toggleStartupUrl);
    }
    
    const startupUrlInput = document.getElementById('startupUrlInput');
    if (startupUrlInput) {
        startupUrlInput.addEventListener('blur', saveStartupUrl);
        startupUrlInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                saveStartupUrl();
                this.blur();
            }
        });
    }

    // Settings panel weather location search
    const weatherLocationSearchInput = document.getElementById('weatherLocationSearchInput');
    if (weatherLocationSearchInput) {
        let searchTimeout = null;
        
        weatherLocationSearchInput.addEventListener('input', (event) => {
            clearTimeout(searchTimeout);
            const query = event.target.value.trim();
            
            if (query.length < 2) {
                hideWeatherSuggestions();
                return;
            }
            
            searchTimeout = setTimeout(() => {
                searchWeatherLocation(query);
            }, 300);
        });
        
        weatherLocationSearchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                hideWeatherSuggestions();
            }
        });
        
        // Load current location
        const currentLocation = getWeatherLocation();
        if (currentLocation) {
            weatherLocationSearchInput.value = currentLocation;
        }
    }

    const debugToggleBtn = document.getElementById('debugToggleBtn');
    if (debugToggleBtn) {
        debugToggleBtn.addEventListener('click', handleDebugToggle);
    }
    
    // 管理分類按鈕
    const manageCategoriesBtn = document.getElementById('manageCategoriesBtn');
    if (manageCategoriesBtn) {
        manageCategoriesBtn.addEventListener('click', openCategoryManagement);
    }

    const addCategoryBtn = document.getElementById('addCategoryBtn');
    if (addCategoryBtn) addCategoryBtn.addEventListener('click', addNewCategory);
    
    // 分類選擇
    const bookmarkCategorySelect = document.getElementById('bookmarkCategory');
    if (bookmarkCategorySelect) {
        bookmarkCategorySelect.addEventListener('change', function(e) {
            const newCategoryInput = document.getElementById('newCategoryInput');
            if (!newCategoryInput) return;
            if (e.target.value === 'new') {
                newCategoryInput.classList.remove('hidden');
                newCategoryInput.focus();
            } else {
                newCategoryInput.classList.add('hidden');
            }
        });
    }
    
    // 語言選擇器
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }

    const blurToggleBtn = document.getElementById('blurToggleBtn');
    if (blurToggleBtn) {
        blurToggleBtn.addEventListener('click', () => {
            setBlurEnabled(!isBlurEnabled());
        });
    }

    const blurRange = document.getElementById('blurRange');
    if (blurRange) {
        const handleBlurRange = function() {
            updateBlurAmount(this.value);
        };
        blurRange.addEventListener('input', handleBlurRange);
        blurRange.addEventListener('change', handleBlurRange);
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
    
    // 背景圖片上傳
    const bgImageUpload = document.getElementById('bgImageUpload');
    if (bgImageUpload) {
        bgImageUpload.addEventListener('change', handleImageUpload);
    }
    
    // 點擊外部關閉彈窗
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
}

// 搜尋 UI 初始化
function initializeSearchUI() {
    renderEngineDropdown();
    updateEngineSelector();
    const input = document.getElementById('searchInput');
    updateOpenButtonState(input ? input.value : '');
    
    // 初始化時顯示搜索歷史（如果有的話）
    updateSearchSuggestions('');
}

// 搜尋歷史
function loadSearchHistory() {
    try {
        const stored = JSON.parse(localStorage.getItem('searchHistory') || '[]');
        searchHistory = Array.isArray(stored) ? stored.slice(0, MAX_SEARCH_HISTORY) : [];
    } catch (error) {
        searchHistory = [];
    }
}

function addSearchHistoryEntry(query) {
    const trimmed = (query || '').trim();
    if (!trimmed) return;
    const lower = trimmed.toLowerCase();
    searchHistory = searchHistory.filter(item => item.toLowerCase() !== lower);
    searchHistory.unshift(trimmed);
    if (searchHistory.length > MAX_SEARCH_HISTORY) {
        searchHistory = searchHistory.slice(0, MAX_SEARCH_HISTORY);
    }
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function handleSearchInputChange(event) {
    const value = event?.target?.value ?? '';
    updateOpenButtonState(value);
    updateSearchSuggestions(value);
}

function handleSearchInputKeydown(event) {
    if (!event) return;
    if (event.key === 'Enter') {
        event.preventDefault();
        const input = event.target;
        const value = (input?.value || '').trim();
        if (!value) return;
        if (isLikelyUrl(value)) {
            openQueryUrl(value);
        } else {
            performSearch();
        }
    } else if (event.key === 'Escape') {
        const suggestions = document.getElementById('searchSuggestions');
        if (suggestions) suggestions.classList.add('hidden');
    }
}

function handleSuggestionClick(event) {
    const item = event.target.closest('.suggestion-item');
    if (!item) return;
    const value = item.dataset.value || item.textContent || '';
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = value;
        input.focus();
    }
    performSearch();
}

function setSuggestionsLoading(container, isLoading) {
    if (!container) return;

    if (isLoading) {
        container.setAttribute('aria-busy', 'true');
        container.classList.add('is-loading');
        container.classList.remove('hidden');

        if (container.dataset.hasContent !== 'true') {
            const placeholderChips = Array.from({ length: 4 }, () => '<span class="suggestion-item suggestion-item--skeleton" aria-hidden="true"></span>').join('');
            const title = `<div class="suggestions-title">${t('searchSuggestionsTitle')}</div>`;
            container.innerHTML = `${title}<div class="suggestion-list suggestion-list--skeleton" role="presentation">${placeholderChips}</div>`;
            container.dataset.loadingPlaceholder = 'true';
        } else {
            container.dataset.loadingPlaceholder = 'false';
        }
        return;
    }

    container.removeAttribute('aria-busy');
    container.classList.remove('is-loading');

    if (container.dataset.loadingPlaceholder === 'true') {
        container.innerHTML = '';
        container.classList.add('hidden');
    }

    container.dataset.loadingPlaceholder = 'false';
}

async function updateSearchSuggestions(query) {
    const container = document.getElementById('searchSuggestions');
    if (!container) return;

    const value = typeof query === 'string' ? query : '';
    const trimmed = value.trim();

    updateOpenButtonState(value);

    const callToken = ++latestSuggestQueryToken;

    setSuggestionsLoading(container, false);

    if (!trimmed) {
        const history = searchHistory.slice(0, SEARCH_SUGGESTION_LIMIT);
        if (history.length) {
            renderSuggestionList(container, history, false);
        } else {
            renderSuggestionList(container, [], false);
        }
        return;
    }

    const localSuggestions = buildLocalSuggestions(trimmed);
    renderSuggestionList(container, localSuggestions.slice(0, SEARCH_SUGGESTION_LIMIT), true);

    const shouldFetchRemote = trimmed.length >= getRemoteSuggestionMinLength() && !isLikelyUrl(trimmed);

    if (!shouldFetchRemote) {
        return;
    }

    setSuggestionsLoading(container, true);

    try {
        const remoteSuggestions = await fetchRemoteSuggestions(trimmed);
        if (callToken !== latestSuggestQueryToken) return;
        if (Array.isArray(remoteSuggestions) && remoteSuggestions.length) {
            const combined = mergeSuggestions(localSuggestions, remoteSuggestions, SEARCH_SUGGESTION_LIMIT);
            renderSuggestionList(container, combined, true);
        }
    } catch (error) {
        console.error('Failed to fetch suggestions:', error);
    } finally {
        if (callToken === latestSuggestQueryToken) {
            setSuggestionsLoading(container, false);
        }
    }
}

function buildLocalSuggestions(query) {
    const suggestions = [];
    const seen = new Set();
    const value = (query || '').trim().toLowerCase();

    const addSuggestion = (text) => {
        if (!text) return;
        const key = text.toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);
        suggestions.push(text);
    };

    // 只處理有輸入的情況，只從搜索歷史中建議
    if (value) {
        // 只添加匹配的搜索歷史
        searchHistory.forEach(item => {
            if (item.toLowerCase().includes(value)) addSuggestion(item);
        });
    }

    return suggestions;
}

function renderSuggestionList(container, suggestions, hasQuery = false) {
    if (!container) return;

    container.dataset.loadingPlaceholder = 'false';

    const hasItems = Array.isArray(suggestions) && suggestions.length > 0;

    if (!hasItems) {
        container.dataset.hasContent = 'false';
        if (!hasQuery && searchHistory.length === 0) {
            container.innerHTML = `<div class="suggestions-title">${t('searchHistoryTitle')}</div><div class="suggestion-list"><div class="hint" style="padding: 12px; text-align: center;">${t('noSearchHistory') || '暫無搜尋歷史'}</div></div>`;
            container.classList.remove('hidden');
            return;
        }

        if (!container.classList.contains('is-loading')) {
            container.innerHTML = '';
            container.classList.add('hidden');
        }
        return;
    }

    container.dataset.hasContent = 'true';

    const titleKey = hasQuery ? 'searchSuggestionsTitle' : 'searchHistoryTitle';
    const title = `<div class="suggestions-title">${t(titleKey)}</div>`;
    const list = suggestions.map(item => {
        const value = escapeAttribute(item);
        const label = escapeHtml(item);
        return `<button type="button" class="suggestion-item" data-value="${value}">${label}</button>`;
    }).join('');
    container.innerHTML = `${title}<div class="suggestion-list">${list}</div>`;
    container.classList.remove('hidden');
}

function mergeSuggestions(localSuggestions, remoteSuggestions, limit = SEARCH_SUGGESTION_LIMIT) {
    const result = [];
    const seen = new Set();

    const addValue = (raw) => {
        const text = typeof raw === 'string' ? raw.trim() : '';
        if (!text) return;
        const key = text.toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);
        result.push(text);
    };

    const local = Array.isArray(localSuggestions) ? localSuggestions : [];
    const remote = Array.isArray(remoteSuggestions) ? remoteSuggestions : [];

    const initialLocalQuota = Math.min(LOCAL_SUGGESTION_INITIAL_QUOTA, limit);
    for (let i = 0; i < local.length && result.length < initialLocalQuota; i++) {
        addValue(local[i]);
    }

    for (let i = 0; i < remote.length && result.length < limit; i++) {
        addValue(remote[i]);
    }

    for (let i = initialLocalQuota; i < local.length && result.length < limit; i++) {
        addValue(local[i]);
    }

    return result;
}

function normalizeSuggestionPayload(payload, limit = SEARCH_SUGGESTION_LIMIT) {
    const suggestions = [];
    const seen = new Set();

    const add = (value) => {
        if (typeof value !== 'string') return;
        const trimmed = value.trim();
        if (!trimmed) return;
        const key = trimmed.toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);
        suggestions.push(trimmed);
    };

    if (Array.isArray(payload)) {
        payload.forEach(add);
    } else if (payload && typeof payload === 'object') {
        if (Array.isArray(payload.phrase)) payload.phrase.forEach(add);
        if (Array.isArray(payload.results)) payload.results.forEach(add);
        if (Array.isArray(payload.suggestions)) payload.suggestions.forEach(add);
        if (Array.isArray(payload.s)) payload.s.forEach(add);
        if (Array.isArray(payload.g)) {
            payload.g.forEach(item => {
                if (item && typeof item === 'object') {
                    if (typeof item === 'string') {
                        add(item);
                    } else {
                        add(item.q || item.phrase || item.text || '');
                    }
                }
            });
        }
    }

    return suggestions.slice(0, limit);
}

function extractRemoteSuggestions(payload, query, limit = SEARCH_SUGGESTION_LIMIT) {
    if (!payload) {
        return [];
    }

    if (Array.isArray(payload)) {
        if (payload.length > 1 && Array.isArray(payload[1])) {
            return normalizeSuggestionPayload(payload[1], limit);
        }
        return normalizeSuggestionPayload(payload, limit);
    }

    if (typeof payload === 'object') {
        if (Array.isArray(payload.s)) {
            return normalizeSuggestionPayload(payload.s, limit);
        }
        if (Array.isArray(payload.result)) {
            return normalizeSuggestionPayload(payload.result, limit);
        }
        if (Array.isArray(payload.results)) {
            return normalizeSuggestionPayload(payload.results, limit);
        }
        if (Array.isArray(payload.g)) {
            const extracted = payload.g
                .map(item => {
                    if (!item) return '';
                    if (typeof item === 'string') return item;
                    return item.q || item.text || item.phrase || '';
                });
            return normalizeSuggestionPayload(extracted, limit);
        }
    }

    return normalizeSuggestionPayload(payload, limit);
}

function getRemoteSuggestionMinLength() {
    const stored = Number(localStorage.getItem('remoteSuggestionMinLength'));
    if (Number.isFinite(stored) && stored >= 1 && stored <= 5) {
        return stored;
    }
    return REMOTE_SUGGESTION_MIN_LENGTH;
}

function getSuggestionProviderOrder() {
    const ordered = [];
    if (currentSearchEngine && suggestionProviders[currentSearchEngine]) {
        ordered.push(currentSearchEngine);
    }
    Object.keys(suggestionProviders).forEach(key => {
        if (!ordered.includes(key)) {
            ordered.push(key);
        }
    });
    return ordered;
}

function updateOpenButtonState(value) {
    const button = document.getElementById('openUrlBtn');
    if (!button) return;
    const trimmed = (value || '').trim();
    const shouldShow = trimmed && isLikelyUrl(trimmed);
    button.classList.toggle('hidden', !shouldShow);
}

const suggestionProviders = {
    google: {
        buildRequest(query, lang, callbackId) {
            const locale = getGoogleSuggestionLocale(lang);
            const params = new URLSearchParams({
                client: 'chrome',
                q: query,
                callback: callbackId
            });
            if (locale.hl) params.set('hl', locale.hl);
            if (locale.gl) params.set('gl', locale.gl);
            return {
                url: `https://suggestqueries.google.com/complete/search?${params.toString()}`,
                cacheKey: `${query.toLowerCase()}|${locale.hl || ''}|${locale.gl || ''}`
            };
        },
        buildFetchRequest(query, lang) {
            const locale = getGoogleSuggestionLocale(lang);
            const params = new URLSearchParams({
                client: 'firefox',
                q: query
            });
            if (locale.hl) params.set('hl', locale.hl);
            if (locale.gl) params.set('gl', locale.gl);
            return {
                url: `https://suggestqueries.google.com/complete/search?${params.toString()}`,
                cacheKey: `${query.toLowerCase()}|${locale.hl || ''}|${locale.gl || ''}`,
                responseType: 'json'
            };
        }
    },
    bing: {
        buildRequest(query, lang, callbackId) {
            const locale = getBingSuggestionLocale(lang);
            const params = new URLSearchParams({
                query,
                JsonType: 'callback',
                JsonCallback: callbackId
            });
            if (locale.language) params.set('language', locale.language);
            if (locale.market) params.set('market', locale.market);
            return {
                url: `https://api.bing.com/osjson.aspx?${params.toString()}`,
                cacheKey: `${query.toLowerCase()}|${locale.language || ''}|${locale.market || ''}`
            };
        },
        buildFetchRequest(query, lang) {
            const locale = getBingSuggestionLocale(lang);
            const params = new URLSearchParams({
                query
            });
            if (locale.language) params.set('language', locale.language);
            if (locale.market) params.set('market', locale.market);
            return {
                url: `https://api.bing.com/osjson.aspx?${params.toString()}`,
                cacheKey: `${query.toLowerCase()}|${locale.language || ''}|${locale.market || ''}`,
                responseType: 'json'
            };
        }
    },
    duckduckgo: {
        buildRequest(query, lang, callbackId) {
            const locale = getDuckDuckGoLocale(lang);
            const params = new URLSearchParams({
                q: query,
                type: 'list',
                callback: callbackId
            });
            if (locale.kl) params.set('kl', locale.kl);
            if (locale.kad) params.set('kad', locale.kad);
            return {
                url: `https://duckduckgo.com/ac/?${params.toString()}`,
                cacheKey: `${query.toLowerCase()}|${locale.kl || ''}|${locale.kad || ''}`
            };
        },
        buildFetchRequest(query, lang) {
            const locale = getDuckDuckGoLocale(lang);
            const params = new URLSearchParams({
                q: query,
                type: 'list'
            });
            if (locale.kl) params.set('kl', locale.kl);
            if (locale.kad) params.set('kad', locale.kad);
            return {
                url: `https://duckduckgo.com/ac/?${params.toString()}`,
                cacheKey: `${query.toLowerCase()}|${locale.kl || ''}|${locale.kad || ''}`,
                responseType: 'json',
                parser(payload) {
                    if (Array.isArray(payload)) {
                        return normalizeSuggestionPayload(payload.map(item => (typeof item === 'string' ? item : item?.phrase || item?.text || '')));
                    }
                    return normalizeSuggestionPayload(payload);
                }
            };
        }
    },
    baidu: {
        buildRequest(query, lang, callbackId) {
            const locale = getBaiduSuggestionLocale(lang);
            const params = new URLSearchParams({
                wd: query,
                ie: locale.ie || 'utf-8',
                json: '1',
                p: '3',
                cb: callbackId
            });
            if (locale.csor) params.set('csor', locale.csor);
            return {
                url: `https://suggestion.baidu.com/su?${params.toString()}`,
                cacheKey: `${query.toLowerCase()}|${locale.ie || 'utf-8'}`
            };
        }
    }
};

function getGoogleSuggestionLocale(lang = currentLanguage) {
    switch (lang) {
        case 'zh-CN':
            return { hl: 'zh-CN', gl: 'cn' };
        case 'zh-TW':
            return { hl: 'zh-TW', gl: 'tw' };
        case 'ja':
            return { hl: 'ja', gl: 'jp' };
        case 'en':
        default:
            return { hl: 'en', gl: 'us' };
    }
}

function getBingSuggestionLocale(lang = currentLanguage) {
    switch (lang) {
        case 'zh-CN':
            return { language: 'zh-cn', market: 'zh-CN' };
        case 'zh-TW':
            return { language: 'zh-tw', market: 'zh-TW' };
        case 'ja':
            return { language: 'ja-jp', market: 'ja-JP' };
        case 'en':
        default:
            return { language: 'en-us', market: 'en-US' };
    }
}

function getDuckDuckGoLocale(lang = currentLanguage) {
    switch (lang) {
        case 'zh-CN':
            return { kl: 'cn-zh', kad: 'zh-cn' };
        case 'zh-TW':
            return { kl: 'tw-tzh', kad: 'zh-tw' };
        case 'ja':
            return { kl: 'jp-ja', kad: 'ja-jp' };
        case 'en':
        default:
            return { kl: 'us-en', kad: 'en-us' };
    }
}

function getBaiduSuggestionLocale(lang = currentLanguage) {
    switch (lang) {
        case 'zh-CN':
        case 'zh-TW':
            return { ie: 'utf-8' };
        case 'en':
        default:
            return { ie: 'utf-8' };
    }
}

async function fetchRemoteSuggestions(query) {
    if (!query || query.length < getRemoteSuggestionMinLength()) {
        return [];
    }

    if (remoteSuggestAbortController) {
        try {
            remoteSuggestAbortController.abort();
        } catch (err) {
            console.warn('Abort previous suggest fetch failed:', err);
        }
        remoteSuggestAbortController = null;
    }

    if (remoteSuggestCancel) {
        try {
            remoteSuggestCancel();
        } catch (err) {
            console.warn('Cancel previous JSONP suggest failed:', err);
        }
        remoteSuggestCancel = null;
    }

    const abortController = new AbortController();
    remoteSuggestAbortController = abortController;

    const providers = getSuggestionProviderOrder();
    try {
        for (const providerKey of providers) {
            try {
                const suggestions = await requestSuggestionsFromProvider(providerKey, query, abortController);
                if (Array.isArray(suggestions) && suggestions.length > 0) {
                    return suggestions;
                }
            } catch (error) {
                if (error?.name === 'AbortError') {
                    logDebug('Suggestion request aborted');
                    return [];
                }
                console.warn(`Suggestion provider ${providerKey} failed:`, error);
            }
        }
    } finally {
        if (remoteSuggestAbortController === abortController) {
            remoteSuggestAbortController = null;
        }
    }

    return [];
}

function requestSuggestionsFromProvider(providerKey, query, abortController) {
    const provider = suggestionProviders[providerKey];
    if (!provider) {
        return Promise.resolve([]);
    }

    const fetchRequest = typeof provider.buildFetchRequest === 'function'
        ? provider.buildFetchRequest(query, currentLanguage)
        : null;

    if (fetchRequest?.url) {
        const { url, cacheKey, responseType = 'json', parser, options = {} } = fetchRequest;
        const fullCacheKey = `fetch|${providerKey}|${cacheKey || query.toLowerCase()}`;
        if (remoteSuggestCache.has(fullCacheKey)) {
            return Promise.resolve(remoteSuggestCache.get(fullCacheKey));
        }

        return fetch(url, {
            method: options.method || 'GET',
            mode: options.mode || 'cors',
            credentials: options.credentials || 'omit',
            headers: options.headers || {},
            signal: abortController?.signal
        }).then(async response => {
            if (!response.ok) {
                throw new Error(`HTTP_${response.status}`);
            }
            const payload = responseType === 'text' ? await response.text() : await response.json();
            const parserFn = typeof parser === 'function'
                ? parser
                : (typeof provider.parse === 'function' ? provider.parse : extractRemoteSuggestions);
            const suggestions = parserFn(payload, query, SEARCH_SUGGESTION_LIMIT) || [];
            if (Array.isArray(suggestions) && suggestions.length) {
                remoteSuggestCache.set(fullCacheKey, suggestions);
            }
            return suggestions;
        }).catch(error => {
            if (error?.name === 'AbortError') {
                throw error;
            }
            logDebug(`Suggestion fetch failed for ${providerKey}: ${error?.message || error}`);
            return [];
        });
    }

    if (typeof provider.buildRequest !== 'function') {
        return Promise.resolve([]);
    }

    if (remoteSuggestCancel) {
        remoteSuggestCancel();
        remoteSuggestCancel = null;
    }

    const callbackId = `__suggest_${providerKey}_${Date.now()}_${remoteSuggestCallbackSeed++}`;
    const request = provider.buildRequest(query, currentLanguage, callbackId);
    if (!request || !request.url) {
        return Promise.resolve([]);
    }

    const { url, cacheKey } = request;
    const fullCacheKey = `${providerKey}|${cacheKey || query.toLowerCase()}`;
    if (remoteSuggestCache.has(fullCacheKey)) {
        return Promise.resolve(remoteSuggestCache.get(fullCacheKey));
    }

    return new Promise(resolve => {
        const script = document.createElement('script');
        if (!script) {
            resolve([]);
            return;
        }

        let settled = false;

        const finalize = (result) => {
            if (settled) return;
            settled = true;
            if (remoteSuggestCancel === cancel) {
                remoteSuggestCancel = null;
            }
            window.clearTimeout(timeoutId);
            try {
                delete window[callbackId];
            } catch (err) {
                // ignore
            }
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            if (Array.isArray(result) && result.length) {
                remoteSuggestCache.set(fullCacheKey, result);
            }
            resolve(Array.isArray(result) ? result : []);
        };

        const cancel = () => finalize([]);
        remoteSuggestCancel = cancel;

        window[callbackId] = (payload) => {
            try {
                const parser = typeof provider.parse === 'function' ? provider.parse : extractRemoteSuggestions;
                const suggestions = parser(payload, query, SEARCH_SUGGESTION_LIMIT);
                finalize(suggestions);
            } catch (err) {
                console.warn(`Failed to parse ${providerKey} suggestions`, err);
                finalize([]);
            }
        };

        script.onerror = cancel;
        script.src = url;
        script.async = true;
        document.head.appendChild(script);

        const timeoutId = window.setTimeout(cancel, 4000);
    });
}

function setCurrentSearchEngine(engineKey, { persist = true } = {}) {
    if (!searchEngines[engineKey]) {
        engineKey = 'google';
    }

    if (persist) {
        localStorage.setItem('searchEngine', engineKey);
    }

    currentSearchEngine = engineKey;
    renderEngineDropdown();
    updateEngineSelector();
    updateSearchIcon();
    toggleCustomEngineConfig(engineKey === 'custom');

    if (engineKey === 'custom' && !searchEngines.custom.url) {
        const inline = document.getElementById('customSearchInline');
        if (inline) inline.focus();
    }

    updateSearchSuggestions(document.getElementById('searchInput')?.value || '');
}

function renderEngineDropdown() {
    const dropdown = document.getElementById('engineDropdown');
    if (!dropdown) return;
    dropdown.innerHTML = Object.keys(searchEngines).map(key => {
        const engine = searchEngines[key];
        const label = t(engine.labelKey || key);
        const iconSize = engine.dropdownIconSize ?? engine.iconSize ?? 18;
        return `
            <button type="button" class="engine-option${key === currentSearchEngine ? ' active' : ''}" data-engine="${key}" role="option" aria-selected="${key === currentSearchEngine}">
                <span class="engine-option__icon" style="--engine-option-icon-size:${iconSize}px;">${getIconMarkup(engine.icon, iconSize, label)}</span>
                <span class="engine-option__name">${escapeHtml(label)}</span>
            </button>
        `;
    }).join('');
    if (window.lucide) window.lucide.createIcons();
}

function updateEngineSelector() {
    const selector = document.getElementById('engineSelector');
    const iconTarget = document.getElementById('engineSelectorIcon');
    const labelTarget = document.getElementById('engineSelectorLabel');
    const engine = searchEngines[currentSearchEngine];
    if (selector) {
        selector.setAttribute('aria-expanded', engineDropdownOpen ? 'true' : 'false');
    }
    if (labelTarget && engine) {
        labelTarget.textContent = t(engine.labelKey || currentSearchEngine);
    }
    if (iconTarget && engine) {
        const selectorSize = engine.selectorIconSize ?? engine.iconSize ?? 20;
        iconTarget.style.setProperty('--selector-icon-size', `${selectorSize}px`);
        iconTarget.innerHTML = getIconMarkup(engine.icon, selectorSize, t(engine.labelKey || currentSearchEngine));
        if (window.lucide) window.lucide.createIcons();
    }
}

function toggleEngineDropdown(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    engineDropdownOpen = !engineDropdownOpen;
    const dropdown = document.getElementById('engineDropdown');
    const selector = document.getElementById('engineSelector');
    if (dropdown) dropdown.classList.toggle('show', engineDropdownOpen);
    if (selector) selector.setAttribute('aria-expanded', engineDropdownOpen ? 'true' : 'false');
}

function handleEngineIconClick(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    cycleSearchEngine(1);
}

function handleEngineSelectorKeydown(event) {
    if (!event) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        cycleSearchEngine(1);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        cycleSearchEngine(-1);
    } else if (event.key === 'Enter' || event.key === ' ') {
        toggleEngineDropdown(event);
    } else if (event.key === 'Escape') {
        closeEngineDropdown();
    }
}

function getSelectableSearchEngines() {
    const customUrl = searchEngines.custom?.url || '';
    return Object.keys(searchEngines).filter(key => {
        if (key === 'custom') {
            if (currentSearchEngine === 'custom') return true;
            return customUrl.includes('{query}');
        }
        return true;
    });
}

function cycleSearchEngine(direction = 1) {
    const engines = getSelectableSearchEngines();
    if (!engines.length) return;
    const currentIndex = engines.indexOf(currentSearchEngine);
    const baseIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex = (baseIndex + direction + engines.length) % engines.length;
    setCurrentSearchEngine(engines[nextIndex]);
    closeEngineDropdown();
}

function closeEngineDropdown() {
    if (!engineDropdownOpen) return;
    engineDropdownOpen = false;
    const dropdown = document.getElementById('engineDropdown');
    const selector = document.getElementById('engineSelector');
    if (dropdown) dropdown.classList.remove('show');
    if (selector) selector.setAttribute('aria-expanded', 'false');
}

function handleEngineDropdownClick(event) {
    const option = event.target.closest('.engine-option');
    if (!option) return;
    const engineKey = option.dataset.engine;
    setCurrentSearchEngine(engineKey);
    closeEngineDropdown();
}

function handleGlobalClickForDropdowns(event) {
    const dropdown = document.getElementById('engineDropdown');
    const selector = document.getElementById('engineSelector');
    if (dropdown && selector && engineDropdownOpen && !dropdown.contains(event.target) && !selector.contains(event.target)) {
        closeEngineDropdown();
    }

    const suggestions = document.getElementById('searchSuggestions');
    const searchWrapper = document.querySelector('.search-input-wrapper');
    const searchInput = document.getElementById('searchInput');
    
    if (suggestions && !suggestions.classList.contains('hidden')) {
        const clickedInsideSearch = searchWrapper?.contains(event.target) || suggestions.contains(event.target);
        if (!clickedInsideSearch) {
            // 只隱藏，不清空內容，這樣重新聚焦時還能看到
            suggestions.classList.add('hidden');
        }
    }
}

function toggleCustomEngineConfig(show) {
    const config = document.getElementById('customEngineConfig');
    if (!config) return;
    config.classList.toggle('hidden', !show);
}

function syncCustomSearchInputs(value) {
    const inline = document.getElementById('customSearchInline');
    if (inline && inline.value !== value) {
        inline.value = value;
    }
}

function saveCustomSearchInline() {
    const inline = document.getElementById('customSearchInline');
    if (!inline) return;
    const template = inline.value.trim();
    if (!template || !template.includes('{query}')) {
        alert(t('customSearchInlineHint'));
        inline.focus();
        return;
    }
    searchEngines.custom.url = template;
    localStorage.setItem('customSearchUrl', template);
    const settingsInput = document.getElementById('customSearchUrl');
    if (settingsInput) settingsInput.value = template;
    setCurrentSearchEngine('custom');
    updateSearchSuggestions(document.getElementById('searchInput')?.value || '');
}

// 更新搜尋圖示
function updateSearchIcon() {
    const el = document.getElementById('searchEngineIcon');
    if (!el) return;
    const engine = searchEngines[currentSearchEngine];
    if (!engine) return;
    const selectorSize = engine.selectorIconSize ?? engine.iconSize ?? 20;
    el.style.setProperty('--selector-icon-size', `${selectorSize}px`);
    el.innerHTML = getIconMarkup(engine.icon, selectorSize, t(engine.labelKey || currentSearchEngine));
    if (window.lucide) window.lucide.createIcons();
}

function openQueryUrl(rawValue) {
    const value = (rawValue || '').trim();
    if (!value) return;

    if (/^(mailto:|tel:)/i.test(value)) {
        window.location.href = value;
        return;
    }

    let target = value;
    if (!/^[a-z][a-z0-9+\-.]*:/.test(value)) {
        const sanitized = value.replace(/^\/+/, '');
        target = `https://${sanitized}`;
    }

    try {
        const url = new URL(target);
        addSearchHistoryEntry(value);
        updateSearchSuggestions(value);
        window.open(url.toString(), '_blank', 'noopener');
    } catch (error) {
        console.warn('Invalid URL, falling back to search:', error);
        const input = document.getElementById('searchInput');
        if (input) {
            input.value = value;
            performSearch();
        }
    }
}

// 執行搜尋
function performSearch() {
    const input = document.getElementById('searchInput');
    const query = input ? input.value.trim() : '';
    if (!query) return;
    
    let searchUrl = searchEngines[currentSearchEngine].url;
    
    if (currentSearchEngine === 'custom' && !searchUrl) {
        alert(t('alertSetCustomUrl'));
        openModal('settingsModal');
        return;
    }
    
    addSearchHistoryEntry(query);
    updateSearchSuggestions(query);

    searchUrl = searchUrl.replace('{query}', encodeURIComponent(query));
    
    // 顯示載入動畫
    showSearchLoading();
    
    // 短暫延遲後跳轉，讓動畫顯示
    setTimeout(() => {
        window.location.href = searchUrl;
    }, 300);
}

// 顯示搜尋載入動畫
function showSearchLoading() {
    const overlay = document.getElementById('searchLoadingOverlay');
    if (overlay) {
        overlay.classList.remove('hidden');
    }
}

// 隱藏搜尋載入動畫
function hideSearchLoading() {
    const overlay = document.getElementById('searchLoadingOverlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

// 分類管理
function loadCategories() {
    const saved = localStorage.getItem('categories');
    if (!saved) {
        categories = [];
    } else {
        const parsed = JSON.parse(saved);
        // 向後兼容：如果是字符串數組，轉換為對象數組
        if (Array.isArray(parsed) && parsed.length > 0) {
            if (typeof parsed[0] === 'string') {
                categories = parsed.map(name => ({ name, icon: '📁' }));
                saveCategories(); // 保存新格式
            } else {
                categories = parsed;
            }
        } else {
            categories = [];
        }
    }
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
        const catName = typeof cat === 'string' ? cat : cat.name;
        select.innerHTML += `<option value="${catName}">${catName}</option>`;
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
    const baseId = Date.now();
    return [
        { id: baseId, name: 'GitHub', url: 'https://github.com', icon: 'assets/github.svg', category: '' },
        { id: baseId + 1, name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'assets/openai.svg', category: '' },
        { id: baseId + 2, name: 'Gemini', url: 'https://gemini.google.com', icon: 'assets/googlegemini.svg', category: '' },
        { id: baseId + 3, name: 'YouTube', url: 'https://youtube.com', icon: 'assets/youtube.svg', category: '' },
        { id: baseId + 4, name: 'YouTube Music', url: 'https://music.youtube.com', icon: 'assets/youtube-music.svg', category: '' },
        { id: baseId + 5, name: 'Gmail', url: 'https://gmail.com', icon: 'assets/gmail.svg', category: '' },
        { id: baseId + 6, name: 'X', url: 'https://x.com', icon: 'assets/x.svg', category: '' },
        { id: baseId + 7, name: 'Notion', url: 'https://notion.so', icon: 'assets/notion.svg', category: '' },
        { id: baseId + 8, name: 'Instagram', url: 'https://www.instagram.com/', icon: 'assets/instagram.svg', category: '' }
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

    const weatherEnabled = isWeatherEnabled();

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

    if (weatherEnabled) {
        mainGrid.appendChild(createWeatherBookmarkTile());
    }

    if (mainBookmarks.length) {
        mainBookmarks.forEach(bookmark => {
            const bookmarkEl = createBookmarkElement(bookmark);
            mainGrid.appendChild(bookmarkEl);
        });
    } else if (!weatherEnabled) {
        const emptyState = document.createElement('p');
        emptyState.className = 'bookmark-empty';
        emptyState.setAttribute('data-i18n', 'noBookmarks');
        emptyState.textContent = t('noBookmarks');
        mainGrid.appendChild(emptyState);
    }

    // 渲染分類書籤
    Object.keys(categorizedBookmarks).forEach(category => {
        const section = createCategorySection(category, categorizedBookmarks[category]);
        categoriesContainer.appendChild(section);
    });

    bindWeatherBookmarkActions(mainGrid);

    if (window.lucide) {
        window.lucide.createIcons({ nameAttr: 'data-lucide' });
    }

    updateWeatherWidget();
}

function createCategorySection(category, categoryBookmarks) {
    const section = document.createElement('div');
    section.className = 'category-section';

    const catObj = categories.find(c => (typeof c === 'string' ? c : c.name) === category);
    const catIcon = catObj && typeof catObj === 'object' ? catObj.icon : '📁';
    const safeCategory = category.replace(/'/g, "\\'");
    const bookmarkCountText = t('categoryBookmarkCount').replace('{count}', categoryBookmarks.length);

    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
        <div class="category-header__meta">
            <div class="category-header__icon" aria-hidden="true">${catIcon}</div>
            <div class="category-header__text">
                <h3 class="category-header__title">${category}</h3>
                <p class="category-header__count">${bookmarkCountText}</p>
            </div>
        </div>
        <div class="category-header__actions">
            <button type="button" class="category-header__btn" onclick="openBookmarkModal(null, '${safeCategory}')">
                <i data-lucide="plus"></i>
                <span>${t('addBookmark')}</span>
            </button>
            <button type="button" class="category-header__btn category-header__btn--ghost" onclick="openCategoryManagement('${safeCategory}')">
                <i data-lucide="settings"></i>
                <span>${t('manageCategories')}</span>
            </button>
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
    
    const { html: iconHtml, type: iconType } = resolveBookmarkIcon(bookmark.icon, 32, bookmark.name);
    const iconTypeClass = iconType && iconType !== 'empty' ? ` bookmark-icon--${iconType}` : '';
    
    div.innerHTML = `
        <div class="bookmark-actions">
            <button onclick="editBookmark(${bookmark.id}); event.stopPropagation();" title="編輯"><i data-lucide="pencil" style="width:14px;height:14px;"></i></button>
            <button onclick="deleteBookmark(${bookmark.id}); event.stopPropagation();" title="刪除"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
        </div>
        <div class="bookmark-icon${iconTypeClass}">${iconHtml}</div>
        <div class="bookmark-name">${bookmark.name}</div>
    `;
    
    // initialize lucide icons in this element
    if (window.lucide) window.lucide.createIcons({ nameAttr: 'data-lucide' });
    
    return div;
}

function createWeatherBookmarkTile() {
    const tile = document.createElement('div');
    tile.className = 'bookmark-item bookmark-item--weather';
    tile.setAttribute('data-weather-bookmark', 'true');
    tile.innerHTML = `
        <div class="weather-tile" data-weather-trigger role="button" tabindex="0" data-i18n-attr="aria-label:weatherWidgetLabel">
            <div class="bookmark-icon weather-tile__icon" aria-hidden="true">
                <span data-weather-icon="tile"><img src="assets/weather/sun-behind-small-cloud.png" alt="weather" class="weather-icon-img" /></span>
            </div>
            <div class="bookmark-name weather-tile__temp" data-weather-temp="tile">--°</div>
        </div>
    `;
    return tile;
}

function bindWeatherBookmarkActions(root = document) {
    const tile = root.querySelector('[data-weather-bookmark]');
    if (!tile) return;

    const trigger = tile.querySelector('[data-weather-trigger]');
    const openWeatherSettings = (event) => {
        event.preventDefault();
        if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) {
            return;
        }
        // Open settings modal and navigate to weather section
        openModal('settingsModal');
        setTimeout(() => {
            const weatherNavBtn = document.querySelector('[data-settings-nav="weather"]');
            if (weatherNavBtn) {
                weatherNavBtn.click();
            }
        }, 100);
    };
    if (trigger) {
        trigger.addEventListener('click', openWeatherSettings);
        trigger.addEventListener('keydown', openWeatherSettings);
    }
}

function openWeatherModal() {
    openModal('weatherModal');
    updateWeatherControlsUI();
    updateWeatherWidget();
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
    if (iconInput) {
        iconInput.value = bookmark ? (bookmark.icon || '') : '';
        updateBookmarkIconPreview(iconInput.value);
    } else {
        updateBookmarkIconPreview('');
    }
    
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
        
        // 從分類列表中移除（支持字符串和對象格式）
        categories = categories.filter(cat => {
            const name = typeof cat === 'string' ? cat : cat.name;
            return name !== category;
        });
        
        saveCategories();
        saveBookmarksToStorage();
        updateCategorySelect();
        renderBookmarks();
    }
}

// 分類管理彈窗
function openCategoryManagement(focusCategory = null) {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';
    
    if (categories.length === 0) {
        categoryList.innerHTML = `<div class="category-empty">${t('noCategories')}</div>`;
    } else {
        const focusName = focusCategory ? String(focusCategory) : '';
        let focusElement = null;
        categories.forEach((cat, index) => {
            const catName = typeof cat === 'string' ? cat : cat.name;
            const catIcon = typeof cat === 'object' && cat.icon ? cat.icon : '📁';
            const bookmarkCount = bookmarks.filter(b => b.category === catName).length;
            const countText = t('categoryBookmarkCount').replace('{count}', bookmarkCount);

            const item = document.createElement('div');
            item.className = 'category-item';
            item.dataset.categoryName = catName;
            item.innerHTML = `
                <div class="category-item__meta">
                    <span class="category-item__icon">${catIcon}</span>
                    <div class="category-item__text">
                        <span class="category-item__name">${catName}</span>
                        <span class="category-item__count">${countText}</span>
                    </div>
                </div>
                <div class="category-item__actions" role="group" aria-label="${t('manageCategories')}">
                    <button type="button" onclick="renameCategoryPrompt(${index})" class="category-item__action" title="${t('renameCategory')}" aria-label="${t('renameCategory')}">
                        <i data-lucide="edit-3"></i>
                        <span>${t('renameCategory')}</span>
                    </button>
                    <button type="button" onclick="editCategoryIconPrompt(${index})" class="category-item__action" title="${t('editCategoryIcon')}" aria-label="${t('editCategoryIcon')}">
                        <i data-lucide="image"></i>
                        <span>${t('editCategoryIcon')}</span>
                    </button>
                    <button type="button" onclick="deleteCategoryFromModal('${catName.replace(/'/g, "\\'")}')" class="category-item__action category-item__action--danger" title="${t('deleteCategory')}" aria-label="${t('deleteCategory')}">
                        <i data-lucide="trash-2"></i>
                        <span>${t('deleteCategory')}</span>
                    </button>
                </div>
            `;
            categoryList.appendChild(item);
            if (focusName && catName === focusName) {
                focusElement = item;
            }
        });

        if (window.lucide) {
            window.lucide.createIcons({ nameAttr: 'data-lucide' });
        }

        if (focusElement) {
            requestAnimationFrame(() => {
                focusElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
                focusElement.classList.add('is-highlighted');
                setTimeout(() => focusElement.classList.remove('is-highlighted'), 1600);
            });
        }
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
    
    // 檢查是否已存在
    const exists = categories.some(c => {
        const name = typeof c === 'string' ? c : c.name;
        return name === newCat;
    });
    
    if (exists) {
        alert(t('alertCategoryExists'));
        return;
    }
    
    categories.push({ name: newCat, icon: '📁' });
    saveCategories();
    updateCategorySelect();
    openCategoryManagement(); // 刷新列表
}

function renameCategoryPrompt(index) {
    const cat = categories[index];
    const oldName = typeof cat === 'string' ? cat : cat.name;
    const newName = prompt(`重新命名分類「${oldName}」：`, oldName);
    
    if (!newName || newName.trim() === '') return;
    if (newName.trim() === oldName) return;
    
    // 檢查新名稱是否已存在
    const exists = categories.some((c, i) => {
        if (i === index) return false;
        const name = typeof c === 'string' ? c : c.name;
        return name === newName.trim();
    });
    
    if (exists) {
        alert('分類名稱已存在');
        return;
    }
    
    // 更新分類
    if (typeof categories[index] === 'string') {
        categories[index] = { name: newName.trim(), icon: '📁' };
    } else {
        categories[index].name = newName.trim();
    }
    
    // 更新所有使用此分類的書籤
    bookmarks.forEach(bookmark => {
        if (bookmark.category === oldName) {
            bookmark.category = newName.trim();
        }
    });
    
    saveCategories();
    saveBookmarksToStorage();
    updateCategorySelect();
    renderBookmarks();
    openCategoryManagement();
}

function editCategoryIconPrompt(index) {
    const cat = categories[index];
    const catName = typeof cat === 'string' ? cat : cat.name;
    const currentIcon = typeof cat === 'object' && cat.icon ? cat.icon : '📁';
    const newIcon = prompt(`修改分類「${catName}」的圖標（Emoji 或圖片網址）：`, currentIcon);
    
    if (!newIcon) return;
    
    // 確保是對象格式
    if (typeof categories[index] === 'string') {
        categories[index] = { name: catName, icon: newIcon.trim() };
    } else {
        categories[index].icon = newIcon.trim();
    }
    
    saveCategories();
    renderBookmarks();
    openCategoryManagement();
}

function deleteCategoryFromModal(category) {
    deleteCategory(category);
    openCategoryManagement(); // 刷新列表
}

// 抓取網站 favicon
function fetchFavicon() {
    const urlInput = document.getElementById('bookmarkUrl');
    const iconInput = document.getElementById('bookmarkIcon');

    if (!urlInput || !iconInput) {
        return;
    }

    const rawUrl = (urlInput.value || '').trim();
    if (!rawUrl) {
        alert(t('alertInvalidUrl') || '請確認網址格式正確');
        return;
    }

    let normalized;
    try {
        normalized = new URL(rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`);
    } catch (error) {
        alert(t('alertInvalidUrl') || '請確認網址格式正確');
        return;
    }

    const faviconUrl = `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(normalized.origin)}`;
    iconInput.value = faviconUrl;
    iconInput.dataset.fetched = '1';
    updateBookmarkIconPreview(faviconUrl);
    alert(t('alertIconFetched') || '已自動填入網站圖示！');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('show');
    document.body.classList.add('modal-open');

    if (modalId === 'settingsModal') {
        prepareSettingsModal();
    }

    const focusable = modal.querySelector('[data-autofocus], input:not([type="hidden"]), select, textarea, button, [tabindex]:not([tabindex="-1"])');
    if (focusable) {
        window.setTimeout(() => {
            try {
                focusable.focus({ preventScroll: true });
            } catch (err) {
                focusable.focus();
            }
        }, 0);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove('show');

    if (modalId === 'settingsModal' && typeof settingsNavCleanup === 'function') {
        try {
            settingsNavCleanup();
        } catch (error) {
            console.warn('Settings navigation cleanup failed:', error);
        }
    }

    if (!document.querySelector('.modal.show')) {
        document.body.classList.remove('modal-open');
    }
}

// FAB 輔助函數
function closeFabMenu() {
    const fabMenu = document.getElementById('fabMenu');
    const fabBtn = document.getElementById('fabBtn');
    const fabBackdrop = document.getElementById('fabBackdrop');
    if (fabMenu) fabMenu.classList.remove('show');
    if (fabBtn) fabBtn.classList.remove('active');
    if (fabBtn) fabBtn.setAttribute('aria-expanded', 'false');
    if (fabBackdrop) fabBackdrop.classList.remove('show');
}

function cycleFabLanguage() {
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
    changeLanguage(SUPPORTED_LANGUAGES[nextIndex]);
}

// 舊版本的 updateFabDarkModeIcon 已被移除，現在使用新版本

// 夜間模式功能
function toggleDarkMode(forceState, options = {}) {
    const currentDark = document.body.classList.contains('dark-mode');
    const isDark = forceState !== undefined ? forceState : !currentDark;
    const { skipTransition = false } = options;
    
    // 添加過渡動畫類
    document.body.style.transition = skipTransition ? '' : 'background-color 0.3s ease, color 0.3s ease';
    
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    
    // 注意：按鈕UI由 updateDarkModeUI() 統一管理
    
    // 深色強度設置現在常駐顯示，不需要切換 hidden class
}

function updateDarkModeDepth(depth) {
    const opacity = depth / 100;
    document.documentElement.style.setProperty('--dark-overlay-opacity', opacity);
    localStorage.setItem('darkModeDepth', depth);
}

function loadDarkMode() {
    const darkModePreference = localStorage.getItem('darkModePreference') || 'auto'; // auto, light, dark
    const depth = localStorage.getItem('darkModeDepth') || '35';
    
    applyDarkModePreference(darkModePreference, { skipTransition: true });
    updateDarkModeUI(darkModePreference);
    
    const depthInput = document.getElementById('darkModeDepth');
    if (depthInput) {
        depthInput.value = depth;
        const valueDisplay = document.getElementById('darkModeDepthValue');
        if (valueDisplay) valueDisplay.textContent = depth + '%';
    }
    updateDarkModeDepth(depth);
    
    // 監聽系統主題變化
    if (window.matchMedia) {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', (e) => {
            const currentPreference = localStorage.getItem('darkModePreference') || 'auto';
            if (currentPreference === 'auto') {
                applyDarkModePreference('auto');
            }
        });
    }
}

// 應用夜間模式偏好設置
function applyDarkModePreference(preference, options = {}) {
    let shouldBeDark = false;
    
    if (preference === 'auto') {
        // 跟隨系統設定
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            shouldBeDark = true;
        }
    } else if (preference === 'dark') {
        shouldBeDark = true;
    } else if (preference === 'light') {
        shouldBeDark = false;
    }
    
    toggleDarkMode(shouldBeDark, options);
}

// 更新夜間模式 UI
function updateDarkModeUI(preference) {
    // 更新設定面板中的按鈕
    const autoBtn = document.getElementById('darkModeAutoBtn');
    const lightBtn = document.getElementById('darkModeLightBtn');
    const darkBtn = document.getElementById('darkModeDarkBtn');
    
    [autoBtn, lightBtn, darkBtn].forEach(btn => {
        if (btn) btn.classList.remove('active');
    });
    
    if (preference === 'auto' && autoBtn) {
        autoBtn.classList.add('active');
    } else if (preference === 'light' && lightBtn) {
        lightBtn.classList.add('active');
    } else if (preference === 'dark' && darkBtn) {
        darkBtn.classList.add('active');
    }
    
    // 更新快速按鈕圖示
    updateQuickDarkModeButton(preference);
    updateFabDarkModeIcon(preference);
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// 設置夜間模式偏好
function setDarkModePreference(preference) {
    localStorage.setItem('darkModePreference', preference);
    applyDarkModePreference(preference);
    updateDarkModeUI(preference);
}

// 循環切換夜間模式（用於快速按鈕）
function cycleDarkModePreference() {
    const current = localStorage.getItem('darkModePreference') || 'auto';
    const modes = ['auto', 'light', 'dark'];
    const currentIndex = modes.indexOf(current);
    const nextIndex = (currentIndex + 1) % modes.length;
    const nextMode = modes[nextIndex];
    
    setDarkModePreference(nextMode);
}

// 更新快速按鈕圖示
function updateQuickDarkModeButton(preference) {
    const quickBtn = document.getElementById('quickDarkModeBtn');
    if (!quickBtn) return;
    
    const icon = quickBtn.querySelector('i');
    if (!icon) return;
    
    const icons = {
        'auto': 'monitor',
        'light': 'sun',
        'dark': 'moon'
    };
    
    const labels = {
        'auto': t('autoMode') || '自動',
        'light': t('lightMode') || '日間',
        'dark': t('darkMode') || '夜間'
    };
    
    icon.setAttribute('data-lucide', icons[preference] || 'moon');
    quickBtn.setAttribute('title', labels[preference]);
    quickBtn.setAttribute('aria-label', labels[preference]);
}

// 更新 FAB 夜間模式圖示
function updateFabDarkModeIcon(preference) {
    const fabDarkMode = document.getElementById('fabDarkMode');
    if (!fabDarkMode) return;
    
    const icon = fabDarkMode.querySelector('i');
    const span = fabDarkMode.querySelector('span');
    
    if (!icon) return;
    
    const icons = {
        'auto': 'monitor',
        'light': 'sun',
        'dark': 'moon'
    };
    
    const labels = {
        'auto': t('autoMode') || '自動',
        'light': t('lightMode') || '日間',
        'dark': t('darkMode') || '夜間'
    };
    
    icon.setAttribute('data-lucide', icons[preference] || 'moon');
    if (span) {
        span.textContent = labels[preference];
    }
}

// 語言循環切換
function cycleLanguage() {
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
    changeLanguage(SUPPORTED_LANGUAGES[nextIndex]);
}

function ensureIconLibrary() {
    if (iconLibrary.length) {
        return Promise.resolve(iconLibrary);
    }
    if (iconLibraryPromise) {
        return iconLibraryPromise;
    }

    const primeAliasOverrides = () => {
        iconAliasLookup = new Map();
        Object.entries(ICON_ALIAS_OVERRIDES).forEach(([alias, target]) => {
            registerIconAlias(alias, target);
        });
    };

    const hydrateLibrary = (icons) => {
        if (!Array.isArray(icons) || !icons.length) {
            const fallback = POPULAR_ICON_FALLBACK.map(item => ({
                slug: item.slug,
                title: item.title || item.slug,
                aliases: item.aliases || []
            }));
            primeAliasOverrides();
            fallback.forEach(icon => {
                registerIconAlias(icon.slug, icon.slug);
                registerIconAlias(icon.title, icon.slug);
                (icon.aliases || []).forEach(alias => registerIconAlias(alias, icon.slug));
            });
            iconLibrary = fallback.sort((a, b) => a.title.localeCompare(b.title));
            return iconLibrary;
        }

        primeAliasOverrides();

        iconLibrary = icons
            .map(icon => {
                if (!icon?.slug) return null;
                const slug = icon.slug;
                const title = icon.title || slug;
                const aliases = Array.isArray(icon.aliases)
                    ? icon.aliases
                    : (typeof icon.aliases === 'string' ? icon.aliases.split(',').map(a => a.trim()).filter(Boolean) : []);
                registerIconAlias(slug, slug);
                registerIconAlias(title, slug);
                aliases.forEach(alias => registerIconAlias(alias, slug));
                return {
                    slug,
                    title,
                    hex: icon.hex || '',
                    aliases
                };
            })
            .filter(Boolean)
            .sort((a, b) => a.title.localeCompare(b.title));

        return iconLibrary;
    };

    iconLibraryPromise = fetch('https://unpkg.com/simple-icons@latest/_data/simple-icons.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch icon list');
            }
            return response.json();
        })
        .then(data => hydrateLibrary(data?.icons))
        .catch(error => {
            console.error('Icon library load failed:', error);
            return hydrateLibrary(null);
        });

    return iconLibraryPromise;
}

// 天氣位置搜索功能
let weatherLocationSearchTimeout = null;
let weatherLocationCache = new Map();

async function searchWeatherLocations(query) {
    if (!query || query.length < 2) {
        hideWeatherLocationSuggestions();
        return;
    }

    const cacheKey = query.toLowerCase();
    if (weatherLocationCache.has(cacheKey)) {
        showWeatherLocationSuggestions(weatherLocationCache.get(cacheKey));
        return;
    }

    try {
        // 首先嘗試 Open-Meteo Geocoding API
        let results = [];
        
        try {
            const url = `${WEATHER_GEOCODE_URL}?name=${encodeURIComponent(query)}&count=10&language=${currentLanguage || 'en'}&format=json`;
            const response = await fetch(url);
            
            if (response.ok) {
                const data = await response.json();
                results = data?.results || [];
            }
        } catch (error) {
            console.warn('Open-Meteo geocoding failed, trying backup...', error);
        }

        // 如果沒有結果，嘗試使用 Nominatim (OpenStreetMap) 作為備用
        if (results.length === 0) {
            try {
                const backupUrl = `${WEATHER_GEOCODE_URL_BACKUP}?q=${encodeURIComponent(query)}&format=json&limit=10&accept-language=${currentLanguage || 'en'}`;
                const backupResponse = await fetch(backupUrl, {
                    headers: {
                        'User-Agent': 'CustomHomePage/1.0'
                    }
                });
                
                if (backupResponse.ok) {
                    const backupData = await backupResponse.json();
                    // 轉換 Nominatim 格式到我們的格式
                    results = backupData.map(item => ({
                        name: item.display_name.split(',')[0],
                        admin1: item.address?.state || item.address?.county || '',
                        admin2: item.address?.city || item.address?.town || '',
                        country: item.address?.country || '',
                        country_code: item.address?.country_code?.toUpperCase() || '',
                        latitude: parseFloat(item.lat),
                        longitude: parseFloat(item.lon)
                    }));
                }
            } catch (backupError) {
                console.error('Backup geocoding also failed:', backupError);
            }
        }
        
        weatherLocationCache.set(cacheKey, results);
        showWeatherLocationSuggestions(results);
    } catch (error) {
        console.error('Weather location search failed:', error);
        hideWeatherLocationSuggestions();
    }
}

function showWeatherLocationSuggestions(results) {
    const container = document.getElementById('weatherLocationSuggestions');
    if (!container) return;

    if (!results || results.length === 0) {
        hideWeatherLocationSuggestions();
        return;
    }

    container.innerHTML = results.map(location => {
        const parts = [
            location.name,
            location.admin1,
            location.admin2,
            location.country
        ].filter(Boolean);
        
        const name = location.name || '';
        const details = [location.admin1, location.country].filter(Boolean).join(', ');

        return `
            <div class="weather-location-suggestion" data-location="${escapeAttribute(location.name)}" data-lat="${location.latitude}" data-lon="${location.longitude}">
                <div class="weather-location-suggestion__name">${escapeHtml(name)}</div>
                ${details ? `<div class="weather-location-suggestion__details">${escapeHtml(details)}</div>` : ''}
            </div>
        `;
    }).join('');

    container.classList.add('show');

    // 綁定點擊事件
    container.querySelectorAll('.weather-location-suggestion').forEach(item => {
        item.addEventListener('click', () => {
            const locationName = item.dataset.location;
            const input = document.getElementById('weatherModalLocationInput');
            if (input) {
                input.value = locationName;
            }
            hideWeatherLocationSuggestions();
        });
    });
}

function hideWeatherLocationSuggestions() {
    const container = document.getElementById('weatherLocationSuggestions');
    if (container) {
        container.classList.remove('show');
        container.innerHTML = '';
    }
}

function initializeWeatherLocationSearch() {
    const input = document.getElementById('weatherModalLocationInput');
    if (!input) return;

    input.addEventListener('input', (event) => {
        const query = event.target.value.trim();
        
        if (weatherLocationSearchTimeout) {
            clearTimeout(weatherLocationSearchTimeout);
        }

        if (!query || query.length < 2) {
            hideWeatherLocationSuggestions();
            return;
        }

        weatherLocationSearchTimeout = setTimeout(() => {
            searchWeatherLocations(query);
        }, 300);
    });

    input.addEventListener('focus', () => {
        const query = input.value.trim();
        if (query && query.length >= 2) {
            searchWeatherLocations(query);
        }
    });

    // 點擊外部關閉建議
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.weather-location-search')) {
            hideWeatherLocationSuggestions();
        }
    });
}

// 暴露全局函數
window.openBookmarkModal = openBookmarkModal;
window.editBookmark = editBookmark;
window.deleteBookmark = deleteBookmark;
window.deleteCategory = deleteCategory;
window.deleteCategoryFromModal = deleteCategoryFromModal;
