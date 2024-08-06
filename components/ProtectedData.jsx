import React, { useEffect, useState } from 'react';
import axios from './axios'; // the axios instance with interceptor

const ProtectedData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/protected-endpoint');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching protected data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <div>Loading protected data...</div>
      )}
    </div>
  );
};

export default ProtectedData;
