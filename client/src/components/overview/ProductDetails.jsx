import React from 'react';

import { formatPrice } from 'src/utils';

const ProductDetails = ({ productCategory, productName, productPrice }) => {
  return (
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
};

export default ProductDetails;
