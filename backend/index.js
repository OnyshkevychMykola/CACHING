const express = require('express');
const cors = require('cors');
const { getFromCache, setToCache } = require('./nodecache');
const { getFromMemcached, setToMemcached } = require('./memcached');
const { getFromRedis, setToRedis } = require('./redisCache');
const { fetchDataFromAPI, fetchProductFromAPI, fetchOrderFromAPI } = require('./apiService');

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());


// Ендпоінт для отримання користувача (NodeCache)
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const startTime = Date.now();

  try {
    const cachedData = getFromCache(userId);

    if (cachedData) {
      const duration = Date.now() - startTime;
      return res.json({
        data: cachedData,
        isCached: true,
        duration: `${duration}ms`,
      });
    }

    const userData = await fetchDataFromAPI(userId);
    setToCache(userId, userData);

    const duration = Date.now() - startTime;
    res.json({
      data: userData,
      isCached: false,
      duration: `${duration}ms`,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Ендпоінт для отримання продукту (Memcached)
app.get('/products/:id', async (req, res) => {
  const productId = req.params.id;
  const startTime = Date.now();

  try {
    const cachedData = await getFromMemcached(productId);

    if (cachedData) {
      const duration = Date.now() - startTime;
      return res.json({
        data: cachedData,
        isCached: true,
        duration: `${duration}ms`,
      });
    }

    const productData = await fetchProductFromAPI(productId);
    setToMemcached(productId, productData);

    const duration = Date.now() - startTime;
    res.json({
      data: productData,
      isCached: false,
      duration: `${duration}ms`,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Ендпоінт для отримання замовлення (Redis)
app.get('/orders/:id', async (req, res) => {
  const orderId = req.params.id;
  const startTime = Date.now();

  try {
    const cachedData = await getFromRedis(orderId);

    if (cachedData) {
      const duration = Date.now() - startTime;
      return res.json({
        data: JSON.parse(cachedData),
        isCached: true,
        duration: `${duration}ms`,
      });
    }

    const orderData = await fetchOrderFromAPI(orderId);
    setToRedis(orderId, orderData);

    const duration = Date.now() - startTime;
    res.json({
      data: orderData,
      isCached: false,
      duration: `${duration}ms`,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
