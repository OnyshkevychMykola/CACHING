const { faker } = require('@faker-js/faker');

/**
 * Імітація API-запиту для отримання даних користувача.
 * @param {string} userId - Ідентифікатор користувача.
 * @returns {Promise<object>} Об'єкт з даними користувача.
 */
function fetchDataFromAPI(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = {
        id: userId,
        name: faker.person.fullName(),
        email: faker.internet.email(),
      };
      resolve(userData);
    }, 200);
  });
}

/**
 * Імітація API-запиту для отримання даних про продукт.
 * @param {string} productId - Ідентифікатор продукту.
 * @returns {Promise<object>} Об'єкт з даними продукту.
 */
function fetchProductFromAPI(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productData = {
        id: productId,
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
      };
      resolve(productData);
    }, 200);
  });
}

/**
 * Імітація API-запиту для отримання інформації про замовлення.
 * @param {string} orderId - Ідентифікатор замовлення.
 * @returns {Promise<object>} Об'єкт з даними замовлення.
 */
function fetchOrderFromAPI(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderData = {
        id: orderId,
        items: [
          faker.commerce.productName(),
          faker.commerce.productName(),
        ],
        total: parseFloat(faker.commerce.price(100, 500)),
      };
      resolve(orderData);
    }, 300);
  });
}

module.exports = { fetchOrderFromAPI, fetchDataFromAPI, fetchProductFromAPI };
