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
        name: 'John Doe',
        email: 'johndoe@example.com',
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
        name: 'Awesome Product',
        price: 100,
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
        items: ['Product 1', 'Product 2'],
        total: 250,
      };
      resolve(orderData);
    }, 300);
  });
}

module.exports = { fetchOrderFromAPI, fetchDataFromAPI, fetchProductFromAPI };
