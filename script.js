// 搜尋引擎配置
const searchEngines = {
    google: 'https://www.google.com/search?q={query}',
    bing: 'https://www.bing.com/search?q={query}',
    duckduckgo: 'https://duckduckgo.com/?q={query}',
    baidu: 'https://www.baidu.com/s?wd={query}',
    custom: ''
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    loadBookmarks();
    initEventListeners();
});

// 載入設定
function loadSettings() {
    const savedEngine = localStorage.getItem('searchEngine') || 'google';
    const customUrl = localStorage.getItem('customSearchUrl') || '';
    
    document.getElementById('searchEngine').value = savedEngine;
    document.getElementById('customSearchUrl').value = customUrl;
    
    if (savedEngine === 'custom') {
        searchEngines.custom = customUrl;
    }
}

// 儲存設定
function saveSettings() {
    const customUrl = document.getElementById('customSearchUrl').value;
    localStorage.setItem('customSearchUrl', customUrl);
    searchEngines.custom = customUrl;
    closeModal('settingsModal');
}

// 初始化事件監聽
function initEventListeners() {
    // 搜尋功能
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 搜尋引擎選擇
    document.getElementById('searchEngine').addEventListener('change', function(e) {
        localStorage.setItem('searchEngine', e.target.value);
        if (e.target.value === 'custom') {
            openModal('settingsModal');
        }
    });
    
    // 設定按鈕
    document.getElementById('settingsBtn').addEventListener('click', function() {
        openModal('settingsModal');
    });
    
    document.getElementById('saveSettings').addEventListener('click', saveSettings);
    
    // 書籤按鈕
    document.getElementById('addBookmarkBtn').addEventListener('click', function() {
        openBookmarkModal();
    });
    
    document.getElementById('saveBookmark').addEventListener('click', saveBookmark);
    document.getElementById('cancelBookmark').addEventListener('click', function() {
        closeModal('bookmarkModal');
    });
    
    // 關閉彈窗
    document.querySelectorAll('.close').forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // 點擊外部關閉彈窗
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
}

// 執行搜尋
function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return;
    
    const engine = document.getElementById('searchEngine').value;
    let searchUrl = searchEngines[engine];
    
    if (engine === 'custom' && !searchUrl) {
        alert('請先設定自訂搜尋引擎 URL');
        openModal('settingsModal');
        return;
    }
    
    searchUrl = searchUrl.replace('{query}', encodeURIComponent(query));
    window.location.href = searchUrl;
}

// 書籤管理
let bookmarks = [];
let editingBookmarkId = null;

function loadBookmarks() {
    const saved = localStorage.getItem('bookmarks');
    bookmarks = saved ? JSON.parse(saved) : getDefaultBookmarks();
    renderBookmarks();
}

function getDefaultBookmarks() {
    return [
        { id: Date.now(), name: 'GitHub', url: 'https://github.com', icon: '🐙' },
        { id: Date.now() + 1, name: 'YouTube', url: 'https://youtube.com', icon: '📺' },
        { id: Date.now() + 2, name: 'Gmail', url: 'https://gmail.com', icon: '📧' },
        { id: Date.now() + 3, name: 'Twitter', url: 'https://twitter.com', icon: '🐦' }
    ];
}

function saveBookmarksToStorage() {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function renderBookmarks() {
    const container = document.getElementById('bookmarksList');
    container.innerHTML = '';
    
    bookmarks.forEach(function(bookmark) {
        const bookmarkEl = createBookmarkElement(bookmark);
        container.appendChild(bookmarkEl);
    });
}

function createBookmarkElement(bookmark) {
    const div = document.createElement('div');
    div.className = 'bookmark-item';
    div.onclick = function(e) {
        if (!e.target.closest('.bookmark-actions')) {
            window.location.href = bookmark.url;
        }
    };
    
    const icon = bookmark.icon.startsWith('http') 
        ? `<img src="${bookmark.icon}" alt="${bookmark.name}" onerror="this.parentElement.innerHTML='🌐';">`
        : bookmark.icon;
    
    div.innerHTML = `
        <div class="bookmark-actions">
            <button onclick="editBookmark(${bookmark.id}); event.stopPropagation();" title="編輯">✏️</button>
            <button onclick="deleteBookmark(${bookmark.id}); event.stopPropagation();" title="刪除">🗑️</button>
        </div>
        <div class="bookmark-icon">${icon}</div>
        <div class="bookmark-name">${bookmark.name}</div>
    `;
    
    return div;
}

function openBookmarkModal(bookmark = null) {
    editingBookmarkId = bookmark ? bookmark.id : null;
    
    const title = document.getElementById('bookmarkModalTitle');
    const nameInput = document.getElementById('bookmarkName');
    const urlInput = document.getElementById('bookmarkUrl');
    const iconInput = document.getElementById('bookmarkIcon');
    
    title.textContent = bookmark ? '編輯書籤' : '新增書籤';
    nameInput.value = bookmark ? bookmark.name : '';
    urlInput.value = bookmark ? bookmark.url : '';
    iconInput.value = bookmark ? bookmark.icon : '';
    
    openModal('bookmarkModal');
    nameInput.focus();
}

function saveBookmark() {
    const name = document.getElementById('bookmarkName').value.trim();
    const url = document.getElementById('bookmarkUrl').value.trim();
    const icon = document.getElementById('bookmarkIcon').value.trim() || '🌐';
    
    if (!name || !url) {
        alert('請填寫名稱和網址');
        return;
    }
    
    // 確保 URL 有協議
    const finalUrl = url.match(/^https?:\/\//) ? url : 'https://' + url;
    
    if (editingBookmarkId) {
        // 編輯現有書籤
        const index = bookmarks.findIndex(b => b.id === editingBookmarkId);
        if (index !== -1) {
            bookmarks[index] = { ...bookmarks[index], name, url: finalUrl, icon };
        }
    } else {
        // 新增書籤
        bookmarks.push({
            id: Date.now(),
            name,
            url: finalUrl,
            icon
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

// 彈窗控制
function openModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}
