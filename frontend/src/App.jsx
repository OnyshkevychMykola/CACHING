import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userResult, setUserResult] = useState(null);
  const [productResult, setProductResult] = useState(null);
  const [orderResult, setOrderResult] = useState(null);

  const handleApiCall = async (endpoint, id, setResult) => {
    try {
      const response = await axios.get(`http://localhost:5000${endpoint}/${id}`);
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult({ error: 'Failed to fetch data' });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>API Call Example with Cache Info</h1>

      <button onClick={() => handleApiCall('/users', 1, setUserResult)}>
        Get User Data
      </button>
      {userResult && (
        <div>
          <p>Data: {JSON.stringify(userResult.data)}</p>
          <p>Is Cached: {userResult.isCached ? 'Yes' : 'No'}</p>
          <p>Duration: {userResult.duration}</p>
        </div>
      )}

      <hr />

      <button onClick={() => handleApiCall('/products', 1, setProductResult)}>
        Get Product Data
      </button>
      {productResult && (
        <div>
          <p>Data: {JSON.stringify(productResult.data)}</p>
          <p>Is Cached: {productResult.isCached ? 'Yes' : 'No'}</p>
          <p>Duration: {productResult.duration}</p>
        </div>
      )}

      <hr />

      <button onClick={() => handleApiCall('/orders', 1, setOrderResult)}>
        Get Order Data
      </button>
      {orderResult && (
        <div>
          <p>Data: {JSON.stringify(orderResult.data)}</p>
          <p>Is Cached: {orderResult.isCached ? 'Yes' : 'No'}</p>
          <p>Duration: {orderResult.duration}</p>
        </div>
      )}
    </div>
  );
};

export default App;
