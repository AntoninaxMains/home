// 搜尋引擎配置（使用 Lucide icon names）
const searchEngines = {
    google: { url: 'https://www.google.com/search?q={query}', icon: 'search' },
    bing: { url: 'https://www.bing.com/search?q={query}', icon: 'compass' },
    duckduckgo: { url: 'https://duckduckgo.com/?q={query}', icon: 'shield' },
    baidu: { url: 'https://www.baidu.com/s?wd={query}', icon: 'globe' },
    custom: { url: '', icon: 'settings' }
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
    loadSettings();
    loadCategories();
    loadBookmarks();
    initEventListeners();
    updateSearchIcon();
    // initialize lucide icons
    if (window.lucide) window.lucide.createIcons();
});

// 載入設定
function loadSettings() {
    const savedEngine = localStorage.getItem('searchEngine') || 'google';
    const customUrl = localStorage.getItem('customSearchUrl') || '';
    
    currentSearchEngine = savedEngine;
    document.getElementById('customSearchUrl').value = customUrl;
    
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
    const iconName = searchEngines[currentSearchEngine].icon;
    el.innerHTML = `<i data-lucide="${iconName}"></i>`;
    // reinitialize lucide icons
    if (window.lucide) window.lucide.createIcons();
}

// 執行搜尋
function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return;
    
    let searchUrl = searchEngines[currentSearchEngine].url;
    
    if (currentSearchEngine === 'custom' && !searchUrl) {
        alert('請先設定自訂搜尋引擎 URL');
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
    select.innerHTML = '<option value="">主列表（不分類）</option>';
    categories.forEach(cat => {
        select.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    select.innerHTML += '<option value="new">+ 建立新分類</option>';
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
        mainGrid.innerHTML = '<p style="text-align:center; color: var(--text-subtle); padding: 40px;">還沒有書籤，點擊上方按鈕新增！</p>';
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
    
    title.textContent = bookmark ? '編輯書籤' : '新增書籤';
    categorySelect.value = bookmark ? bookmark.category : defaultCategory;
    nameInput.value = bookmark ? bookmark.name : '';
    urlInput.value = bookmark ? bookmark.url : '';
    iconInput.value = bookmark ? bookmark.icon : '';
    
    const newCat = document.getElementById('newCategoryInput');
    if (newCat) newCat.classList.add('hidden');
    
    openModal('bookmarkModal');
    nameInput.focus();
}

function saveBookmark() {
    const categorySelect = document.getElementById('bookmarkCategory');
    const newCategoryInput = document.getElementById('newCategoryInput');
    const name = document.getElementById('bookmarkName').value.trim();
    const url = document.getElementById('bookmarkUrl').value.trim();
    const icon = document.getElementById('bookmarkIcon').value.trim() || '🌐';
    
    if (!name || !url) {
        alert('請填寫名稱和網址');
        return;
    }
    
    let category = categorySelect.value;
    if (category === 'new') {
        category = newCategoryInput.value.trim();
        if (!category) {
            alert('請輸入新分類名稱');
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
    if (confirm('確定要刪除這個書籤嗎？')) {
        bookmarks = bookmarks.filter(b => b.id !== id);
        saveBookmarksToStorage();
        renderBookmarks();
    }
}

function deleteCategory(category) {
    if (confirm(`確定要刪除「${category}」分類嗎？\n此分類下的書籤將移至主列表。`)) {
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
    categoryList.innerHTML = '';
    
    if (categories.length === 0) {
        categoryList.innerHTML = '<p style="text-align:center; color: var(--text-secondary); padding: 20px;">還沒有分類</p>';
    } else {
        categories.forEach(cat => {
            const item = document.createElement('div');
            item.className = 'category-item';
            item.innerHTML = `
                <span class="category-item-name">📁 ${cat}</span>
                <button onclick="deleteCategoryFromModal('${cat}')" class="btn" style="padding: 6px 12px; font-size: 12px;">刪除</button>
            `;
            categoryList.appendChild(item);
        });
    }
    
    document.getElementById('newCategoryName').value = '';
    openModal('categoryModal');
}

function addNewCategory() {
    const input = document.getElementById('newCategoryName');
    const newCat = input.value.trim();
    
    if (!newCat) {
        alert('請輸入分類名稱');
        return;
    }
    
    if (categories.includes(newCat)) {
        alert('此分類已存在');
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
        alert('已自動填入網站圖示！');
        
    } catch (error) {
        alert('無法獲取圖示，請確認網址格式正確');
    }
}

// 彈窗控制
function openModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// 暴露全局函數
window.openBookmarkModal = openBookmarkModal;
window.editBookmark = editBookmark;
window.deleteBookmark = deleteBookmark;
window.deleteCategory = deleteCategory;
window.deleteCategoryFromModal = deleteCategoryFromModal;
