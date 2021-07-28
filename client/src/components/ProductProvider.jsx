import React, { useContext, useState, useEffect} from "react";
import { composeParams } from '../utils'
import axios from 'axios';
import { ProductContext } from '../context';

const ProductProvider = ({ children }) => {
  const [productId, setProductId]         = useState(18082);
  const [product, setProduct]             = useState(null);
  const [productStyles, setProductStyles] = useState(null);
  const [reviews, setReviews]             = useState(null);
  const [reviewsMeta, setReviewsMeta]     = useState(null);
  const [reviewPage, setReviewPage]       = useState(1);
  const [reviewCount, setReviewCount]     = useState(5);
  const [reviewSort, setReviewSort]       = useState('relevant');
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState('');

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
    { route: '/reviews', setter: setReviews, params: { 
        page: reviewPage, count: reviewCount, sort: reviewSort, product_id: productId 
      } 
    },
    { route: '/reviews/meta', setter: setReviewsMeta, params: { product_id: productId } },
    { route: `/products/${productId}`, setter: setProduct },
    { route: `/products/${productId}/styles`, setter: setProductStyles },
    ].map((item) => {
      return fetchData(item.route, item.setter, item.params);
    });
     
Promise.allSettled(fetchPromises).then(() => {
  //dis ok? ^
  setLoading(false);
})
  .catch((err) => {
    console.error(err);
    setError(err);
  });
  }, []);
  
//   useEffect(() => {
//     const fetchPromises = [
//     { route: '/reviews', setter: setReviews, params: { 
//         page: reviewPage, count: reviewCount, sort: reviewSort, product_id: productId 
//       } 
//     },
//     { route: '/reviews/meta', setter: setReviewsMeta, params: { product_id: productId } },
//     ].map((item) => {
//       return fetchData(item.route, item.setter, item.params);
//     });
     
// Promise.allSettled(fetchPromises).then(() => {
// //is this ok? ^
//   setLoading(false);
// })
//   .catch((err) => {
//     console.error(err);
//     setError(err);
//   });
//   }, [reviews]);
return (
  <>
  {error ? <div> error: {(JSON.stringify(error))} </div> : (loading ? <div> We Be Loadin </div> :
    <ProductContext.Provider value={{
      productId,
      product,
      productStyles,
      reviews,
      reviewsMeta,
      reviewPage,
      reviewCount,
      reviewSort, 
      setReviewSort 
    }}>
      {React.Children.map(children, child =>  <>{child}</> )}
    </ProductContext.Provider>
  )}
  </>
)
};

export default ProductProvider;