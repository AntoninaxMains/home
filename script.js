// 多語言配置
const translations = {
    'en': {
        // Hero
        heroTitle: 'Start Page',
        heroSubtitle: 'Quick search and manage your bookmarks, all starts here.',
        // Search
        searchPlaceholder: 'Search anything...',
        searchButton: 'Search',
        searchOpenLink: 'Open link',
        searchSuggestionsTitle: 'Suggestions',
        searchHistoryTitle: 'Search History',
        noSearchHistory: 'No search history yet',
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
        iconSearchHint: 'Search Simple Icons for brand logos, e.g. github, google, youtube',
        iconSearchLibraryLink: 'Open Simple Icons library',
        iconSearchPlaceholder: 'Enter a brand name...',
        iconLoading: 'Loading icon library…',
        iconLoadError: 'Unable to load icon library. Please try again later.',
        iconLoadMore: 'Load more icons',
        iconNoResults: 'No icons available right now.',
        iconNoResultsWithQuery: 'No icons found for "{query}".',
        manageCategoriesTitle: 'Manage Categories',
        categoriesDesc: 'Create categories to organize bookmarks. When a category is deleted, bookmarks return to main list.',
        noCategories: 'No categories yet',
        addCategoryBtn: '+ Add',
        deleteCategory: 'Delete',
        // Settings
        settingsTitle: 'Settings',
        searchEngineSection: 'Search Engine',
        engineGoogle: 'Google',
        engineBing: 'Bing',
        engineDuckDuckGo: 'DuckDuckGo',
        engineBaidu: 'Baidu',
        engineCustom: 'Custom',
        customSearchUrl: 'Custom Search Engine URL',
        customSearchHint: 'Use {query} as the search keyword placeholder',
        customSearchInlineLabel: 'Custom search engine URL',
        customSearchInlineHint: 'Use {query} as the search keyword placeholder',
        customSearchSave: 'Save and apply',
        customSearchPlaceholder: 'https://example.com/search?q={query}',
        cleanupSectionTitle: 'Cleanup & reset',
        clearSettings: 'Reset all settings',
        clearSettingsDescription: 'Restore the homepage to its default appearance and content.',
        clearSettingsAction: 'Reset now',
        clearSettingsConfirm: 'Are you sure you want to reset everything? This will remove custom bookmarks, categories, and settings.',
        clearSettingsSuccess: 'All settings cleared, reloading…',
        clearSearchHistory: 'Clear search history',
        clearSearchHistoryDescription: 'Delete all search history records.',
        clearSearchHistoryAction: 'Clear now',
        clearSearchHistoryConfirm: 'Are you sure you want to clear all search history?',
        clearSearchHistorySuccess: 'Search history cleared!',
        renameCategory: 'Rename',
        editCategoryIcon: 'Edit Icon',
        backgroundSection: 'Background Settings',
        backgroundType: 'Background Type',
        gradient: 'Gradient',
        image: 'Image',
        solidColor: 'Solid Color',
        selectGradient: 'Select Gradient',
        imageUrl: 'Image URL',
        imageHint: 'Tip: Use Unsplash, e.g. https://source.unsplash.com/1920x1080/?nature',
        uploadImage: 'Upload Image',
        uploadHint: 'Uploaded image will be saved in browser cache',
        selectColor: 'Select Color',
        appearanceSection: 'Display Effects (Appearance)',
        backgroundBlur: 'Background Blur',
        enableBlur: 'Enable Background Blur',
        disableBlur: 'Disable Background Blur',
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
        disableDarkMode: 'Disable Dark Mode',
        darkModeDepth: 'Dark Mode Depth',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',
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
        alertInvalidUrl: 'Please confirm URL format is correct',
        alertInvalidImage: 'Please select a valid image file',
        alertImageTooLarge: 'Image size cannot exceed 5MB',
        alertImageUploaded: 'Image uploaded and applied!',
        alertUploadError: 'Image upload failed, please try again',
        alertIconSelected: 'Icon selected: {icon}'
    },
    'zh-CN': {
        // Hero
        heroTitle: 'Start Page',
        heroSubtitle: '快速搜索、管理收藏，一切从这里开始。',
        // Search
        searchPlaceholder: '搜索任何内容...',
        searchButton: '搜索',
    searchOpenLink: '打开链接',
    searchSuggestionsTitle: '搜索联想',
    searchHistoryTitle: '搜索历史',
    noSearchHistory: '暂无搜索历史',
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
    iconSearchHint: '从 Simple Icons 搜索品牌图标，例如：github、google、youtube',
    iconSearchLibraryLink: '前往 Simple Icons 图标库',
    iconSearchPlaceholder: '输入品牌名称...',
    iconLoading: '图标库载入中…',
    iconLoadError: '图标库载入失败，请稍后重试。',
    iconLoadMore: '加载更多图标',
    iconNoResults: '目前没有可用的图标。',
    iconNoResultsWithQuery: '找不到符合「{query}」的图标。',
        manageCategoriesTitle: '管理分类',
        categoriesDesc: '建立分类来整理书签。删除分类时，书签会回到主列表。',
        noCategories: '还没有分类',
        addCategoryBtn: '+ 新增',
        deleteCategory: '删除',
        // Settings
        settingsTitle: '设置',
        searchEngineSection: '搜索引擎',
    engineGoogle: 'Google',
    engineBing: 'Bing',
    engineDuckDuckGo: 'DuckDuckGo',
    engineBaidu: '百度',
    engineCustom: '自定义',
        customSearchUrl: '自定义搜索引擎 URL',
        customSearchHint: '使用 {query} 作为搜索关键字的占位符',
    customSearchInlineLabel: '自定义搜索引擎 URL',
    customSearchInlineHint: '使用 {query} 作为搜索关键字的占位符',
    customSearchSave: '保存并应用',
    customSearchPlaceholder: 'https://example.com/search?q={query}',
    cleanupSectionTitle: '清理与重置',
    clearSettings: '重置所有设置',
    clearSettingsDescription: '恢复默认界面、书签、分类与所有个性化选项。',
    clearSettingsAction: '立即重置',
    clearSettingsConfirm: '确定要重置所有设置吗？这会清除自定义书签、分类与搜索记录。',
    clearSettingsSuccess: '设置已清除，页面即将重新载入…',
    clearSearchHistory: '清空搜索记录',
    clearSearchHistoryDescription: '删除所有搜索历史记录。',
    clearSearchHistoryAction: '立即清空',
    clearSearchHistoryConfirm: '确定要清空所有搜索记录吗？',
    clearSearchHistorySuccess: '搜索记录已清空！',
    renameCategory: '重新命名',
    editCategoryIcon: '修改图标',
        backgroundSection: '背景设置',
        backgroundType: '背景类型',
        gradient: '渐层',
        image: '图片',
        solidColor: '纯色',
        selectGradient: '选择渐层',
        imageUrl: '图片网址',
        imageHint: '提示：可使用 Unsplash，如 https://source.unsplash.com/1920x1080/?nature',
        uploadImage: '上传图片',
        uploadHint: '上传的图片将保存在浏览器缓存中',
        selectColor: '选择颜色',
    appearanceSection: '显示效果（外观）',
    backgroundBlur: '背景模糊',
    enableBlur: '启用背景模糊',
    disableBlur: '停用背景模糊',
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
    disableDarkMode: '停用夜间模式',
    darkModeDepth: '深色强度',
        darkMode: '夜间模式',
        lightMode: '日间模式',
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
        alertInvalidUrl: '无法获取图标，请确认网址格式正确',
        alertInvalidImage: '请选择有效的图片文件',
        alertImageTooLarge: '图片大小不能超过 5MB',
        alertImageUploaded: '图片已上传并应用！',
    alertUploadError: '图片上传失败，请重试',
    alertIconSelected: '已选择图标：{icon}'
    },
    'zh-TW': {
        // Hero
        heroTitle: 'Start Page',
        heroSubtitle: '快速搜尋、管理收藏，一切從這裡開始。',
        // Search
        searchPlaceholder: '搜尋任何內容...',
        searchButton: '搜尋',
    searchOpenLink: '打開連結',
    searchSuggestionsTitle: '搜尋聯想',
    searchHistoryTitle: '搜尋歷史',
    noSearchHistory: '暫無搜尋歷史',
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
    iconSearchHint: '從 Simple Icons 搜尋品牌圖標，例如：github、google、youtube',
    iconSearchLibraryLink: '前往 Simple Icons 圖標庫',
    iconSearchPlaceholder: '輸入品牌名稱...',
    iconLoading: '圖標庫載入中…',
    iconLoadError: '圖標庫載入失敗，請稍後再試。',
    iconLoadMore: '載入更多圖標',
    iconNoResults: '目前沒有可用的圖標。',
    iconNoResultsWithQuery: '找不到符合「{query}」的圖標。',
        manageCategoriesTitle: '管理分類',
        categoriesDesc: '建立分類來整理書籤。刪除分類時，書籤會回到主列表。',
        noCategories: '還沒有分類',
        addCategoryBtn: '+ 新增',
        deleteCategory: '刪除',
        // Settings
        settingsTitle: '設定',
        searchEngineSection: '搜尋引擎',
    engineGoogle: 'Google',
    engineBing: 'Bing',
    engineDuckDuckGo: 'DuckDuckGo',
    engineBaidu: '百度',
    engineCustom: '自訂',
        customSearchUrl: '自訂搜尋引擎 URL',
        customSearchHint: '使用 {query} 作為搜尋關鍵字的佔位符',
    customSearchInlineLabel: '自訂搜尋引擎 URL',
    customSearchInlineHint: '使用 {query} 作為搜尋關鍵字的佔位符',
    customSearchSave: '儲存並套用',
    customSearchPlaceholder: 'https://example.com/search?q={query}',
    cleanupSectionTitle: '快速清理與重置',
    clearSettings: '重設所有設定',
    clearSettingsDescription: '將首頁恢復到預設外觀、書籤與所有個人化設定。',
    clearSettingsAction: '立即重設',
    clearSettingsConfirm: '確定要重設所有設定嗎？這會清除自訂書籤、分類與搜尋記錄。',
    clearSettingsSuccess: '設定已清除，頁面即將重新載入…',
    clearSearchHistory: '清空搜尋記錄',
    clearSearchHistoryDescription: '刪除所有搜尋歷史記錄。',
    clearSearchHistoryAction: '立即清空',
    clearSearchHistoryConfirm: '確定要清空所有搜尋記錄嗎？',
    clearSearchHistorySuccess: '搜尋記錄已清空！',
    renameCategory: '重新命名',
    editCategoryIcon: '修改圖標',
    clearSettingsAction: '立即重設',
    clearSettingsConfirm: '確定要重設所有設定嗎？這將清除自訂書籤、分類與搜尋紀錄。',
    clearSettingsSuccess: '設定已重設，重新整理中…',
        backgroundSection: '背景設定',
        backgroundType: '背景類型',
        gradient: '漸層',
        image: '圖片',
        solidColor: '純色',
        selectGradient: '選擇漸層',
        imageUrl: '圖片網址',
        imageHint: '提示：可使用 Unsplash，如 https://source.unsplash.com/1920x1080/?nature',
        uploadImage: '上傳圖片',
        uploadHint: '上傳的圖片將保存在瀏覽器緩存中',
        selectColor: '選擇顏色',
    appearanceSection: '顯示效果（外觀）',
    backgroundBlur: '背景模糊',
    enableBlur: '啟用背景模糊',
    disableBlur: '停用背景模糊',
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
    disableDarkMode: '停用夜間模式',
    darkModeDepth: '深色強度',
        darkMode: '夜間模式',
        lightMode: '日間模式',
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
        alertInvalidUrl: '無法獲取圖示，請確認網址格式正確',
        alertInvalidImage: '請選擇有效的圖片檔案',
        alertImageTooLarge: '圖片大小不能超過 5MB',
        alertImageUploaded: '圖片已上傳並應用！',
    alertUploadError: '圖片上傳失敗，請重試',
    alertIconSelected: '已選擇圖標：{icon}'
    },
    'ja': {
        // Hero
        heroTitle: 'スタートページ',
        heroSubtitle: '素早く検索し、お気に入りを整理。すべてはここから始まります。',
        // Search
        searchPlaceholder: 'なんでも検索…',
        searchButton: '検索',
    searchOpenLink: 'リンクを開く',
    searchSuggestionsTitle: '検索候補',
    searchHistoryTitle: '検索履歴',
    noSearchHistory: '検索履歴はまだありません',
        // Toolbar
        addBookmark: 'ブックマークを追加',
        manageCategories: 'カテゴリを管理',
        settings: '設定',
        // Bookmarks
        myBookmarks: 'マイブックマーク',
        bookmarksDesc: 'よく使うサイトをここにまとめています。クリックですぐ開けます。',
        noBookmarks: 'まだブックマークがありません。上のボタンから追加しましょう！',
        // Modals
        addBookmarkTitle: 'ブックマークを追加',
        editBookmarkTitle: 'ブックマークを編集',
        categoryLabel: 'カテゴリ',
        nameLabel: '名前',
        urlLabel: 'URL',
        iconLabel: 'アイコン',
        autoFetch: '自動取得',
        save: '保存',
        cancel: 'キャンセル',
        done: '完了',
        mainList: 'メインリスト（カテゴリなし）',
        newCategory: '+ 新しいカテゴリを作成',
        enterNewCategory: '新しいカテゴリを入力',
        enterCategoryName: '新しいカテゴリ名を入力',
        namePlaceholder: 'サイト名',
        urlPlaceholder: 'https://example.com',
        iconPlaceholder: '🌐 絵文字または画像の URL',
        iconHint: '絵文字・画像 URL を入力するか、自動取得を使ってください',
        iconSearch: 'アイコンを検索',
    iconSearchHint: 'Simple Icons からブランドロゴを検索（例: github、google、youtube）',
    iconSearchLibraryLink: 'Simple Icons ライブラリを開く',
    iconSearchPlaceholder: 'ブランド名を入力…',
    iconLoading: 'アイコンライブラリを読み込み中…',
    iconLoadError: 'アイコンライブラリを読み込めません。しばらくしてから再試行してください。',
    iconLoadMore: 'さらにアイコンを表示',
    iconNoResults: '利用できるアイコンがありません。',
    iconNoResultsWithQuery: '「{query}」に一致するアイコンが見つかりませんでした。',
        manageCategoriesTitle: 'カテゴリを管理',
        categoriesDesc: 'ブックマークを整理するカテゴリを作成しましょう。カテゴリを削除するとブックマークはメインリストに戻ります。',
        noCategories: 'カテゴリがまだありません',
        addCategoryBtn: '+ 追加',
        deleteCategory: '削除',
        // Settings
        settingsTitle: '設定',
        searchEngineSection: '検索エンジン',
    engineGoogle: 'Google',
    engineBing: 'Bing',
    engineDuckDuckGo: 'DuckDuckGo',
    engineBaidu: 'Baidu',
    engineCustom: 'カスタム',
        customSearchUrl: 'カスタム検索エンジン URL',
        customSearchHint: '{query} を検索キーワードのプレースホルダーとして使用します',
    customSearchInlineLabel: 'カスタム検索エンジン URL',
    customSearchInlineHint: '検索キーワードのプレースホルダーとして {query} を使用してください',
    customSearchSave: '保存して適用',
    customSearchPlaceholder: 'https://example.com/search?q={query}',
    cleanupSectionTitle: 'クリーンアップとリセット',
    clearSettings: 'すべての設定をリセット',
    clearSettingsDescription: 'ホームを初期の外観と内容に戻します。',
    clearSettingsAction: '今すぐリセット',
    clearSettingsConfirm: '本当にすべてをリセットしますか？カスタムのブックマークやカテゴリ、設定が削除されます。',
    clearSettingsSuccess: '設定をクリアしました。ページを再読み込みします…',
    clearSearchHistory: '検索履歴をクリア',
    clearSearchHistoryDescription: 'すべての検索履歴を削除します。',
    clearSearchHistoryAction: '今すぐクリア',
    clearSearchHistoryConfirm: '本当にすべての検索履歴を削除しますか？',
    clearSearchHistorySuccess: '検索履歴をクリアしました！',
        renameCategory: '名前を変更',
        editCategoryIcon: 'アイコンを変更',
        backgroundSection: '背景設定',
        backgroundType: '背景タイプ',
        gradient: 'グラデーション',
        image: '画像',
        solidColor: '単色',
        selectGradient: 'グラデーションを選択',
        imageUrl: '画像 URL',
        imageHint: 'ヒント: Unsplash を利用できます（例: https://source.unsplash.com/1920x1080/?nature）',
        uploadImage: '画像をアップロード',
        uploadHint: 'アップロードした画像はブラウザのキャッシュに保存されます',
        selectColor: '色を選択',
    appearanceSection: '表示効果（外観）',
    backgroundBlur: '背景ぼかし',
    enableBlur: '背景ぼかしを有効にする',
    disableBlur: '背景ぼかしを無効にする',
    blurDepth: 'ぼかしの強さ',
        backgroundFilter: '背景フィルター',
        filterNone: 'なし',
        filterWhite: 'ホワイトフィルター',
        filterBlack: 'ブラックフィルター',
        filterOpacity: 'フィルターの不透明度',
        languageSection: '言語',
        selectLanguage: '言語を選択',
    darkModeSection: 'ダークモード',
    enableDarkMode: 'ダークモードを有効にする',
    disableDarkMode: 'ダークモードを無効にする',
    darkModeDepth: 'ダークモードの強さ',
        darkMode: 'ダークモード',
        lightMode: 'ライトモード',
        // Gradient presets
        gradientDefault: 'スカイブルー',
        gradientSunset: 'サンセットオレンジ',
        gradientOcean: 'オーシャンブルー',
        gradientPurple: 'ドリーミーパープル',
        gradientGreen: 'フォレストグリーン',
        gradientDark: 'スターリーナイト',
        // Alerts
        alertFillRequired: '名前とURLを入力してください',
        alertEnterCategory: '新しいカテゴリ名を入力してください',
        alertCategoryExists: 'このカテゴリは既に存在します',
        alertDeleteBookmark: 'このブックマークを削除しますか？',
        alertDeleteCategory: '「{category}」カテゴリを削除してもよろしいですか？\nこのカテゴリ内のブックマークはメインリストに移動します。',
        alertSetCustomUrl: '先にカスタム検索エンジンのURLを設定してください',
        alertIconFetched: 'アイコンを自動で入力しました！',
        alertInvalidUrl: 'URLの形式が正しいか確認してください',
        alertInvalidImage: '有効な画像ファイルを選択してください',
        alertImageTooLarge: '画像サイズは5MB以下にしてください',
        alertImageUploaded: '画像をアップロードして適用しました！',
    alertUploadError: '画像のアップロードに失敗しました。もう一度お試しください',
    alertIconSelected: 'アイコンを選択しました: {icon}'
    }
};

const SUPPORTED_LANGUAGES = ['en', 'zh-CN', 'zh-TW', 'ja'];

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
document.addEventListener('DOMContentLoaded', function() {
    loadLanguage();
    loadSearchHistory();
    loadSettings();
    loadCategories();
    loadBookmarks();
    loadDarkMode();
    initializeSearchUI();
    setCurrentSearchEngine(currentSearchEngine, { persist: false });
    initEventListeners();
    updateUILanguage();
    // initialize lucide icons
    if (window.lucide) window.lucide.createIcons();
});

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

// 載入語言設定
function loadLanguage() {
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) {
        currentLanguage = saved;
        return;
    }

    currentLanguage = determinePreferredLanguage();
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
        updateToggleButton(darkModeToggleBtn, document.body.classList.contains('dark-mode'));
    }

    const blurToggleBtn = document.getElementById('blurToggleBtn');
    if (blurToggleBtn) {
        updateToggleButton(blurToggleBtn, isBlurEnabled());
    }

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
    
    // 儲存語言設定
    const langSelect = document.getElementById('languageSelect');
    if (langSelect && langSelect.value !== currentLanguage) {
        changeLanguage(langSelect.value);
    }

    closeModal('settingsModal');
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
        'darkModeDepth'
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
    const labels = button.dataset.toggleLabels ? button.dataset.toggleLabels.split(',').map(label => label && label.trim()) : [];
    const offKey = labels[0];
    const onKey = labels[1] || labels[0];
    const labelKey = isActive ? onKey : offKey;
    const labelText = labelKey ? t(labelKey) : '';

    const labelEl = button.querySelector('.settings-toggle__label');
    if (labelEl) labelEl.textContent = labelText;
    if (labelText) {
        button.setAttribute('aria-label', labelText);
        button.setAttribute('title', labelText);
    }

    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    button.classList.toggle('is-active', !!isActive);
    button.dataset.state = isActive ? 'on' : 'off';

    const stateEl = button.querySelector('.settings-toggle__state');
    if (stateEl) {
        stateEl.classList.toggle('is-active', !!isActive);
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
        quickDarkModeBtn.addEventListener('click', () => toggleDarkMode());
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
            toggleDarkMode();
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

    const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
    if (darkModeToggleBtn) {
        darkModeToggleBtn.addEventListener('click', () => toggleDarkMode());
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

async function updateSearchSuggestions(query) {
    const container = document.getElementById('searchSuggestions');
    if (!container) return;

    const value = typeof query === 'string' ? query : '';
    const trimmed = value.trim();

    updateOpenButtonState(value);

    const callToken = ++latestSuggestQueryToken;

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

    if (trimmed.length < getRemoteSuggestionMinLength() || isLikelyUrl(trimmed)) {
        return;
    }

    try {
        const remoteSuggestions = await fetchRemoteSuggestions(trimmed);
        if (callToken !== latestSuggestQueryToken) return;
        if (Array.isArray(remoteSuggestions) && remoteSuggestions.length) {
            const combined = mergeSuggestions(localSuggestions, remoteSuggestions, SEARCH_SUGGESTION_LIMIT);
            renderSuggestionList(container, combined, true);
        }
    } catch (error) {
        console.error('Failed to fetch suggestions:', error);
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
    // 如果沒有建議
    if (!suggestions || suggestions.length === 0) {
        // 沒有輸入且沒有歷史記錄，顯示提示
        if (!hasQuery && searchHistory.length === 0) {
            container.innerHTML = `<div class="suggestions-title">${t('searchHistoryTitle')}</div><div class="suggestion-list"><div class="hint" style="padding: 12px; text-align: center;">${t('noSearchHistory') || '暫無搜尋歷史'}</div></div>`;
            container.classList.remove('hidden');
            return;
        }
        // 其他情況隱藏
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }
    
    // 根據是否有輸入決定標題
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

    const providers = getSuggestionProviderOrder();
    for (const providerKey of providers) {
        const suggestions = await requestSuggestionsFromProvider(providerKey, query);
        if (Array.isArray(suggestions) && suggestions.length > 0) {
            return suggestions;
        }
    }

    return [];
}

function requestSuggestionsFromProvider(providerKey, query) {
    const provider = suggestionProviders[providerKey];
    if (!provider || typeof provider.buildRequest !== 'function') {
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
    window.location.href = searchUrl;
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
        { id: baseId + 4, name: 'Gmail', url: 'https://gmail.com', icon: 'assets/gmail.svg', category: '' },
        { id: baseId + 5, name: 'X', url: 'https://x.com', icon: 'assets/x.svg', category: '' },
        { id: baseId + 6, name: 'Notion', url: 'https://notion.so', icon: 'assets/notion.svg', category: '' },
        { id: baseId + 7, name: 'Instagram', url: 'https://www.instagram.com/', icon: 'assets/instagram.svg', category: '' }
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
    
    // 獲取分類對象
    const catObj = categories.find(c => (typeof c === 'string' ? c : c.name) === category);
    const catIcon = catObj && typeof catObj === 'object' ? catObj.icon : '📁';
    
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
        <div class="category-title">${catIcon} ${category}</div>
        <div class="category-actions" style="display: none;">
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
function openCategoryManagement() {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';
    
    if (categories.length === 0) {
        categoryList.innerHTML = `<div class="category-empty">${t('noCategories')}</div>`;
    } else {
        categories.forEach((cat, index) => {
            const catName = typeof cat === 'string' ? cat : cat.name;
            const catIcon = typeof cat === 'object' && cat.icon ? cat.icon : '📁';

            const item = document.createElement('div');
            item.className = 'category-item';
            item.innerHTML = `
                <div class="category-item-info">
                    <span class="category-item-icon">${catIcon}</span>
                    <span class="category-item-name">${catName}</span>
                </div>
                <div class="category-item-actions">
                    <button type="button" onclick="renameCategoryPrompt(${index})" class="btn ghost" title="${t('renameCategory')}" aria-label="${t('renameCategory')}">${t('renameCategory')}</button>
                    <button type="button" onclick="editCategoryIconPrompt(${index})" class="btn ghost" title="${t('editCategoryIcon')}" aria-label="${t('editCategoryIcon')}">${t('editCategoryIcon')}</button>
                    <button type="button" onclick="deleteCategoryFromModal('${catName.replace(/'/g, "\\'")}')" class="btn ghost btn-danger" title="${t('deleteCategory')}" aria-label="${t('deleteCategory')}">${t('deleteCategory')}</button>
                </div>
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

function updateFabDarkModeIcon() {
    const fabDarkMode = document.getElementById('fabDarkMode');
    if (fabDarkMode) {
        const isDark = document.body.classList.contains('dark-mode');
        const span = fabDarkMode.querySelector('span');
        fabDarkMode.querySelectorAll('[data-lucide]').forEach(el => el.remove());
        const newIcon = document.createElement('i');
        newIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        if (span) {
            fabDarkMode.insertBefore(newIcon, span);
        } else {
            fabDarkMode.insertBefore(newIcon, fabDarkMode.firstChild);
        }
        if (window.lucide) window.lucide.createIcons();
        if (span) {
            span.textContent = isDark ? t('lightMode') || '日間模式' : t('darkMode') || '夜間模式';
        }
        fabDarkMode.setAttribute('title', isDark ? t('lightMode') || '日間模式' : t('darkMode') || '夜間模式');
        fabDarkMode.setAttribute('aria-label', isDark ? t('lightMode') || '日間模式' : t('darkMode') || '夜間模式');
    }
}

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
    
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    
    // 更新桌面端按鈕狀態和圖標
    const quickBtn = document.getElementById('quickDarkModeBtn');
    if (quickBtn) {
        quickBtn.classList.toggle('active', isDark);
        const iconEl = document.createElement('i');
        iconEl.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        quickBtn.innerHTML = '';
        quickBtn.appendChild(iconEl);
        if (window.lucide) window.lucide.createIcons();
        quickBtn.setAttribute('title', t(isDark ? 'lightMode' : 'darkMode'));
        quickBtn.setAttribute('aria-label', t(isDark ? 'lightMode' : 'darkMode'));
    }
    
    const settingsToggleBtn = document.getElementById('darkModeToggleBtn');
    if (settingsToggleBtn) updateToggleButton(settingsToggleBtn, isDark);
    
    // 更新 FAB 圖標
    updateFabDarkModeIcon();
    
    // 顯示/隱藏深度設置
    const settings = document.getElementById('darkModeSettings');
    if (settings) settings.classList.toggle('hidden', !isDark);
}

function updateDarkModeDepth(depth) {
    const opacity = depth / 100;
    document.documentElement.style.setProperty('--dark-overlay-opacity', opacity);
    localStorage.setItem('darkModeDepth', depth);
}

function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    const depth = localStorage.getItem('darkModeDepth') || '35';
    const isDark = darkMode === 'enabled';

    toggleDarkMode(isDark, { skipTransition: true });
    
    const depthInput = document.getElementById('darkModeDepth');
    if (depthInput) {
        depthInput.value = depth;
        const valueDisplay = document.getElementById('darkModeDepthValue');
        if (valueDisplay) valueDisplay.textContent = depth + '%';
    }
    updateDarkModeDepth(depth);
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

// 暴露全局函數
window.openBookmarkModal = openBookmarkModal;
window.editBookmark = editBookmark;
window.deleteBookmark = deleteBookmark;
window.deleteCategory = deleteCategory;
window.deleteCategoryFromModal = deleteCategoryFromModal;
