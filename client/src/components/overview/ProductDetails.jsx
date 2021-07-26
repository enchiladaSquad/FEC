import React from 'react';

const ProductDetails = ({ productCategory, productName, productPrice }) => {
  return (
    <div>
      <div>{productCategory}</div>
      <div>{productName}</div>
      <div>{productPrice}</div>
    </div>
  );
};

export default ProductDetails;
