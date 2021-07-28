import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import mockProductData from 'data/exampleProductIdRes';
import ProductDetails from './ProductDetails'; // TodoQ: why not check for JSX?

import { ProductContext } from '../../context';

const ProductOverview = () => {
  // const [productData, setProductData] = useState(null);
  // const [loaded, setLoaded] = useState(false);
  // const [error, setError] = useState(false);
  const { reviewsMeta, product, productStyles } = useContext(ProductContext);

  // useEffect(() => {
  //   try {
  //     setProductData(mockProductData);
  //     setLoaded(true);
  //   } catch (e) {
  //     setError(e);
  //   }
  // }, []);

  // if (error) {
  //   return <div>An error has occurred</div>;
  // }

  return (
    <div>
      {/* {loaded ? ( */}
      <>
        <div>{JSON.stringify(reviewsMeta.ratings)}</div>
        <ProductDetails
          productCategory={product.category || ''}
          productName={product.name || ''}
          productPrice={product.default_price || ''}
        />
        <div>{JSON.stringify(productStyles)}</div>
      </>
      {/* ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
};

// ProductOverview.propTypes = {
//   averageRating: PropTypes.number.isRequired,
// };

export default ProductOverview;
