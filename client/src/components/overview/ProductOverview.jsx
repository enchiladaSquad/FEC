import React, { useState, useEffect } from 'react';

import ProductDetails from 'components/overview/ProductDetails.jsx'; // TodoQ: why not check for JSX?

import mockProductData from 'data/exampleProductIdRes';

const ProductOverview = ({ averageRating }) => {
  const [productData, setProductData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setProductData(mockProductData);
    setLoaded(true);
  }, []);

  if (error) {
    return <div>An error has occurred</div>;
  }

  return (
    <div>
      {loaded ? (
        <ProductDetails
          productCategory={productData.category || ''}
          productName={productData.name || ''}
          productPrice={productData.default_price || ''}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductOverview;
