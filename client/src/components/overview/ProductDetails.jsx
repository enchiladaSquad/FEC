import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from 'src/utils';

const ProductDetails = ({ productCategory, productName, productPrice }) => (
  <div>
    <div
      style={{
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        color: 'dimgrey',
      }}
    >
      {productCategory.toUpperCase()}
    </div>
    <div
      style={{
        fontWeight: 'bold',
        fontSize: '1.8em',
        fontFamily: 'system-ui',
        color: 'dimgrey',
      }}
    >
      {productName}
    </div>
    <div style={{ marginTop: '0.8rem', color: 'dimgrey' }}>
      {formatPrice(productPrice)}
    </div>
  </div>
);

export default ProductDetails;

ProductDetails.propTypes = {
  productCategory: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};
