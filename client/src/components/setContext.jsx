import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { composeParams } from '../utils';

const PORT = 3000;
const baseURL = '/api';

const useSetContext = (location) => {
  const [productId, setProductId] = useState(
    location.pathname.slice(1) || 46410,
  );
  // TODO: Replace these with useReducer
  const [product, setProduct] = useState(null);
  const [productStyles, setProductStyles] = useState(null);
  const [reportRerender, setReportRerender] = useState(0);
  const [reviews, setReviews] = useState(null);
  const [reviewsMeta, setReviewsMeta] = useState(null);
  const [reviewPage, setReviewPage] = useState(1);
  const [reviewCount, setReviewCount] = useState(2);
  const [reviewSort, setReviewSort] = useState('relevant');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  function fetchData(route, setData, params) {
    return new Promise((resolve, reject) => {
      const requestURL = params
        ? `${baseURL}${route}${composeParams(params)}`
        : `${baseURL}${route}`;
      axios
        .get(requestURL)
        .then((results) => {
          setData(results.data);
          resolve();
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }

  useEffect(() => {
    const fetchPromises = [
      {
        route: '/reviews',
        setter: setReviews,
        params: {
          page: reviewPage,
          count: reviewCount,
          sort: reviewSort,
          product_id: productId,
        },
      },
      {
        route: '/reviews/meta',
        setter: setReviewsMeta,
        params: { product_id: productId },
      },
      { route: `/products/${productId}`, setter: setProduct },
      { route: `/products/${productId}/styles`, setter: setProductStyles },
    ].map((item) => fetchData(item.route, item.setter, item.params));

    Promise.allSettled(fetchPromises)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        setError(err);
      });
  }, []);

  useEffect(() => {
    const request = {
      route: '/reviews',
      setter: setReviews,
      params: {
        page: reviewPage,
        count: reviewCount,
        sort: reviewSort,
        product_id: productId,
      },
    };
    fetchData(request.route, request.setter, request.params);
  }, [reviewCount, reviewSort, reportRerender]);

  const context = {
    setProductId,
    productId,
    product,
    productStyles,
    reportRerender,
    reviews,
    reviewsMeta,
    reviewPage,
    reviewCount,
    reviewSort,
    setReportRerender,
    setReviewCount,
    setReviewSort,
  };

  return { error, loading, context };
};

export default useSetContext;
