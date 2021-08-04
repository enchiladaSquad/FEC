import React from 'react';

const ProductInfo = ({ description, features }) => {
  return (
    <div>
      <div>{description}</div>
      <div>
        {features.map((feature) => {
          return (
            <div>
              {'checkmark'}
              {feature}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductInfo;
