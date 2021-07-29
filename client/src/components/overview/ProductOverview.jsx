import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import ProductDetails from './ProductDetails'; // TodoQ: why not check for JSX?

import { ProductContext } from '../../context';

const ProductOverview = () => {
  const { reviewsMeta, product, productStyles } = useContext(ProductContext);

  return (
    <>
      <div>{JSON.stringify(reviewsMeta.ratings)}</div>
      <ProductDetails
        productCategory={product.category || ''}
        productName={product.name || ''}
        productPrice={product.default_price || ''}
      />
      <div>{JSON.stringify(productStyles)}</div>
    </>
  );
};

// ProductOverview.propTypes = {
//   averageRating: PropTypes.number.isRequired,
// };

export default ProductOverview;
