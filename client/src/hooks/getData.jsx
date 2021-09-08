import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PORT = 3000;
// const LOCAL_URL = `http://localhost:${PORT}`;
const URL = `13.59.113.13:${PORT}`;

// Todo: incorporate query params
const useGetData = ({ route }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // * Data should be stored and retrieved from the cache whenever possible

  // *

  // * WITHOUT EFFECT THIS WILL TRIGGER ON EVERY RENDER

  // * Add a cache
  // useEffect(() => {
  axios({
    method: 'GET',
    url: `${URL}/${route}`,
  })
    .then((response) => {
      setData(response.data);
      setLoading(false);
      return { data, loading, error };
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
      return { data, loading, error };
    });
  // }, [data, loading, error, route]);

  // return { data, loading, error };
};

export default useGetData;
