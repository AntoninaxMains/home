// Language detection and loading
(function() {
    const supportedLanguages = ['en', 'zh-CN', 'zh-TW', 'ja'];
    const savedLang = localStorage.getItem('language');

    const normalizeLanguage = (code) => {
        if (!code || typeof code !== 'string') return null;
        const lower = code.trim().toLowerCase();
        if (!lower) return null;
        if (supportedLanguages.includes(lower)) return lower;
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
    };

    const languageCandidates = [];
    if (Array.isArray(navigator.languages)) {
        navigator.languages.forEach(lang => languageCandidates.push(lang));
    }
    if (navigator.language) languageCandidates.push(navigator.language);
    if (navigator.userLanguage) languageCandidates.push(navigator.userLanguage);
    languageCandidates.push('en');

    let detectedLang = savedLang;
    if (!detectedLang) {
        for (const candidate of languageCandidates) {
            const resolved = normalizeLanguage(candidate);
            if (resolved && supportedLanguages.includes(resolved)) {
                detectedLang = resolved;
                break;
            }
        }
    }

    if (!detectedLang || !supportedLanguages.includes(detectedLang)) {
        detectedLang = 'en';
    }

    const initialLanguage = detectedLang;
    
    // Load language file
    const script = document.createElement('script');
    script.src = `i18n/${initialLanguage}.js`;
    script.onload = function() {
        window.TRANSLATIONS = window.TRANSLATIONS || {};
        window.translations = window.TRANSLATIONS;
        window.currentLanguage = initialLanguage;
        window.SUPPORTED_LANGUAGES = supportedLanguages;
        
        // Load main script
        const mainScript = document.createElement('script');
        mainScript.src = 'script.js';
        mainScript.onerror = function() {
            console.error('Failed to load main script');
        };
        document.body.appendChild(mainScript);
    };
    script.onerror = function() {
        console.error('Failed to load language file:', initialLanguage);
        // Fallback to English
        window.TRANSLATIONS = window.TRANSLATIONS || {};
        window.translations = window.TRANSLATIONS;
        window.currentLanguage = 'en';
        const mainScript = document.createElement('script');
        mainScript.src = 'script.js';
        document.body.appendChild(mainScript);
    };
    document.body.appendChild(script);
})();

