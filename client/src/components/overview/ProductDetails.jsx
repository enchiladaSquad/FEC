import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from 'src/utils';

const ProductDetails = ({ product }) => (
  <div className="product-details">
    <div
      style={{
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        color: 'dimgrey',
      }}
    >
      {product.category.toUpperCase()}
    </div>
    <div
      style={{
        fontWeight: 'bold',
        fontSize: '1.8em',
        fontFamily: 'system-ui',
        color: 'dimgrey',
      }}
    >
      {product.name}
    </div>
    <div style={{ marginTop: '0.8rem', color: 'dimgrey' }}>
      {formatPrice(product.default_price)}
    </div>
  </div>
);

export default ProductDetails;

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    campus: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    default_price: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        feature: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};
