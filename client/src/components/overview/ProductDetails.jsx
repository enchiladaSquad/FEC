import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from 'src/utils';

const ProductDetails = ({ product, salePrice }) => (
  <div className="product-details">
    <div
      title="product-category"
      style={{
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        color: 'dimgrey',
      }}
    >
      {product.category.toUpperCase()}
    </div>
    <div
      title="product-name"
      style={{
        fontWeight: 'bold',
        fontSize: '1.8em',
        fontFamily: 'system-ui',
        color: 'dimgrey',
      }}
    >
      {product.name}
    </div>
    {salePrice ? (
      <span
        title="sale-product-price"
        style={{ marginTop: '0.8rem', color: 'red', paddingRight: '0.5em' }}
      >
        {formatPrice(salePrice)}
      </span>
    ) : null}
    <span
      title="default-product-price"
      style={{
        marginTop: '0.8rem',
        color: 'dimgrey',
        textDecoration: salePrice ? 'line-through' : '',
      }}
    >
      {formatPrice(product.default_price)}
    </span>
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
  salePrice: PropTypes.string,
};

ProductDetails.defaultProps = {
  salePrice: null,
};
