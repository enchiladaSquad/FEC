import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({ options, label }) => {
  return (
    <>
      <label htmlFor={`${label}`} />
      <select>
        {options.map((option, i) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </>
  );
};

const AddToCart = ({ skus }) => {
  const keys = Object.keys(skus);
  const sizes = keys.map((key) => {
    return skus[key].size;
  });
  const quantities = keys.map((key) => {
    return skus[key].quantity;
  });
};

AddToCart.propTypes = {
  skus: PropTypes.shape({
    [PropTypes.number.isRequired]: PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
