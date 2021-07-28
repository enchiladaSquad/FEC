import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ProductDetails from 'components/overview/ProductDetails';

// import mockProductData from 'data/exampleProductIdRes';

const ProductOverview = ({ averageRating, product }) => {
  const [productData, setProductData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setProductData(product);
      setLoaded(true);
    } catch (e) {
      setError(e);
    }
  }, []);

  if (error) {
    return <div>An error has occurred</div>;
  }

  return (
    <div>
      {loaded ? (
        <>
          <div>{averageRating}</div>
          <ProductDetails
            productCategory={productData.category || ''}
            productName={productData.name || ''}
            productPrice={productData.default_price || ''}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

ProductOverview.propTypes = {
  averageRating: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
};

export default ProductOverview;
