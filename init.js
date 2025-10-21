// UUID Polyfill
(function ensureUUID() {
    const global = window;
    if (!global.crypto) {
        global.crypto = global.msCrypto || {};
    }
    if (global.crypto && typeof global.crypto.randomUUID !== 'function') {
        const getRandomValues = typeof global.crypto.getRandomValues === 'function'
            ? global.crypto.getRandomValues.bind(global.crypto)
            : null;
        global.crypto.randomUUID = function randomUUID() {
            const bytes = new Uint8Array(16);
            if (getRandomValues) {
                getRandomValues(bytes);
            } else {
                for (let i = 0; i < 16; i++) {
                    bytes[i] = Math.floor(Math.random() * 256);
                }
            }
            bytes[6] = (bytes[6] & 0x0f) | 0x40;
            bytes[8] = (bytes[8] & 0x3f) | 0x80;
            const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0'));
            return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10, 16).join('')}`;
        };
    }
})();

