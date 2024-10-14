const Redis = require('ioredis');
const redis = new Redis();

/**
 * Отримати дані з Redis.
 * @param {string} key - Ключ кешу.
 * @returns {Promise<any>} Об'єкт з кешу або null, якщо кеш відсутній.
 */
async function getFromRedis(key) {
  return await redis.get(key);
}

/**
 * Зберегти дані в Redis.
 * @param {string} key - Ключ кешу.
 * @param {any} value - Значення для збереження.
 * @param {number} lifetime - Час життя кешу в секундах.
 */
async function setToRedis(key, value, lifetime = 3600) {
  await redis.set(key, JSON.stringify(value), 'EX', lifetime);
}

module.exports = { getFromRedis, setToRedis };
