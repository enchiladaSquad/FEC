import React, { useState, useEffect } from 'react';
import Reviews from './components/R&R/Reviews.jsx';
import Questions from './components/Q&A/questions.jsx';
import axios from 'axios';
import { ProductContext } from './context';
import ProductOverview from 'components/overview/ProductOverview.jsx';
import { composeParams } from './utils'

const port = 4000;
const baseUrl = `http://localhost:${port}`;


const App = () => {
  const [reviews, setReviews] = useState(null);
  const [reviewsMeta, setReviewsMeta] = useState(null);
  const [product, setProduct] = useState(null);
  const [productStyles, setProductStyles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productId, setProductId] = useState(18082);
  const [error, setError] = useState('');

  function fetchData(route, setData, params) {
    return new Promise((resolve, reject) => {
      const requestURL = params ? `${baseUrl}${route}${composeParams(params)}` : `${baseUrl}${route}`
      axios.get(requestURL)
        .then((results) => {
          setData(results.data);
          resolve();
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    })
  }

  useEffect(() => {
    const fetchPromises = [
    { route: '/reviews', setter: setReviews, params: { page: 1, count: 100, sort: 'relevant', product_id: productId } },
    { route: '/reviews/meta', setter: setReviewsMeta, params: { product_id: productId } },
    { route: `/products/${productId}`, setter: setProduct },
    { route: `/products/${productId}/styles`, setter: setProductStyles },
    ].map((item) => {
      return fetchData(item.route, item.setter, item.params);
    });
Promise.all(fetchPromises).then(() => {
  setLoading(false);
})
  .catch((err) => {
    console.error(err);
    setError(err);
  });
  }, []);


return (
  <div>
    {error ? <div> error: {(JSON.stringify(error))} </div> : (loading ? <div> We Be Loadin </div> :
      <div>
        <ProductOverview />
        <Reviews />
        <Questions />
      </div>
    )}
  </div>
);
};

export default App;
