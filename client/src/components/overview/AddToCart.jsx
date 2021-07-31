import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DropDown = ({
  options, label, onChange, disabled = false,
}) => {
  return (
    <>
      <label htmlFor={`${label}`} />
      <select disabled={disabled}>
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

  const [currentSize, setCurrentSize] = useState('');

  return (
    <div>
      <DropDown onChange={setCurrentSize} options={sizes} label="Sizes" />
      <DropDown
        options={Array(quantities[currentSize])}
        label="Sizes"
        disabled={currentSize !== ''}
      />
      <div />
    </div>
  );
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

export default AddToCart;
