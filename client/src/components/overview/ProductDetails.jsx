import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ description, features }) => {
  return (
    <div className="details-container">
      <span className="description-container">{description}</span>
      <span className="features-container">
        {features.map((feature, index) => {
          return (
            <span
              className="feature-container"
              key={`${feature.feature}-${index}`}
            >
              <i className="fa fa-check" />
              {feature.value}
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      feature: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
