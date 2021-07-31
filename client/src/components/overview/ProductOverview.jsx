import React, { useState, useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';

import ProductDetails from 'components/overview/ProductDetails';
import StyleSelector from 'components/overview/StyleSelector';
import AddToCart from 'components/overview/AddToCart';

import StarRating from 'components/SharedComponents';

import { averageRatings } from 'src/utils';
import { ProductContext } from '../../context';

const ProductOverview = () => {
  const { reviewsMeta, product, productStyles } = useContext(ProductContext);

  const [styles, setStyles] = useState(productStyles.results);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [skus, setSkus] = useState(styles[currentStyleIndex].skus);

  return (
    <>
      <StarRating rating={averageRatings(reviewsMeta.ratings)} />
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
      <AddToCart skus={skus} />
    </>
  );
};

export default ProductOverview;
