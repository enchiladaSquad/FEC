import React, { useState, useEffect } from 'react';
import mockProductData from 'data/exampleProductIdRes';

const ProductOverview = ({ averageRating }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    setProductData(mockProductData);
  }, []);

  return <div>{JSON.stringify(productData)}</div>;
};

export default ProductOverview;
