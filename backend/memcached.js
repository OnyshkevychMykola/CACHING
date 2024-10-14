const Memcached = require('memcached');
const memcachedConfig = 'localhost:11211';
const memcached = new Memcached(memcachedConfig);

/**
 * Отримати дані з Memcached.
 * @param {string} key - Ключ кешу.
 * @returns {Promise<any>} Об'єкт з кешу або null, якщо кеш відсутній.
 */
function getFromMemcached(key) {
  return new Promise((resolve, reject) => {
    memcached.get(key, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

/**
 * Зберегти дані в Memcached.
 * @param {string} key - Ключ кешу.
 * @param {any} value - Значення для збереження.
 * @param {number} lifetime - Час життя кешу в секундах.
 */
function setToMemcached(key, value, lifetime = 3600) {
  memcached.set(key, value, lifetime, (err) => {
    if (err) console.error('Error setting cache:', err);
  });
}

module.exports = { getFromMemcached, setToMemcached };
