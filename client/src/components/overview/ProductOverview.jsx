import React, { useState, useEffect, useContext } from 'react';

import ProductDetails from './components/overview/ProductDetails.jsx'; // TodoQ: why not check for JSX?

import mockProductData from 'data/exampleProductIdRes';

import { ProductContext } from '../../context';

const ProductOverview = ({ averageRating }) => {
  const [productData, setProductData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const {reviewsMeta, product, productStyles} = useContext(ProductContext);
  
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
