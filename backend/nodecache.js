const NodeCache = require('node-cache');
const nodecache = new NodeCache();

/**
 * Отримати дані з кешу.
 * @param {string} key - Ключ кешу.
 * @returns {any} Дані або undefined, якщо кеш порожній.
 */
function getFromCache(key) {
  return nodecache.get(key);
}

/**
 * Додати дані в кеш.
 * @param {string} key - Ключ кешу.
 * @param {any} value - Значення для збереження.
 * @param {number} ttl - Час життя кешу в секундах.
 */
function setToCache(key, value, ttl = 3600) {
  nodecache.set(key, value, ttl);
}

module.exports = { getFromCache, setToCache };
