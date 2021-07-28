import React from 'react';

import PropTypes from 'prop-types';
import { ProductContext } from '../context';

const ProductProvider = ({ contextValues, children }) => (
  <>
    <ProductContext.Provider value={contextValues}>
      {React.Children.map(children, (child) => (
        <>{child}</>
      ))}
    </ProductContext.Provider>
  </>
);

export default ProductProvider;

ProductProvider.propTypes = {
  contextValues: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};
