import React, { useState, useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';

import ProductDetails from 'components/overview/ProductDetails';
import StyleSelector from 'components/overview/StyleSelector';

import { ProductContext } from '../../context';

const ProductOverview = () => {
  const { reviewsMeta, product, productStyles } = useContext(ProductContext);

  const [styles, setStyles] = useState(productStyles.results);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  return (
    <>
      <div>{JSON.stringify(reviewsMeta.ratings)}</div>
      <ProductDetails
        productCategory={product.category || ''}
        productName={product.name || ''}
        productPrice={product.default_price || ''}
      />
      <StyleSelector
        styles={styles}
        setCurrentStyleIndex={setCurrentStyleIndex}
        currentStyleIndex={currentStyleIndex}
      />
    </>
  );
};

export default ProductOverview;
