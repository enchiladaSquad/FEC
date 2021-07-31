import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DropDown = ({
  options, onChange, flexGrow, label, disabled = false,
}) => {
  console.log('options:', options);
  return (
    <>
      {/* <label name={`${label}`} htmlFor={`${label}`} /> */}
      <select
        style={{ flexGrow }}
        className="enchilada"
        onChange={(e) => {
          console.log('e.target:', e.target);
          onChange(e.target.value);
        }}
        disabled={disabled}
      >
        {options.map((option, i) => {
          return (
            <option key={label + i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

const composeSizeQuantity = (skus) => {
  const keys = Object.keys(skus);
  const result = {};
  for (let i = 0; i < keys.length; i += 1) {
    const { size, quantity } = skus[keys[i]];
    result[size] = quantity;
  }
  return result;
};

const populateLinearArray = (size) => {
  const arr = [];
  for (let i = 1; i <= size; i += 1) {
    arr.push(i);
  }
  return arr;
};

const areArraysEqual = (arr1, arr2) => {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  if (!arr1 || !arr2) return false;

  for (let i = 0, l = arr1.length; i < l; i += 1) {
    if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
      if (!areArraysEqual(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const AddToCart = ({ skus }) => {
  const keys = Object.keys(skus);
  const sizes = keys.map((key) => {
    return skus[key].size;
  });

  const sizeQuantities = composeSizeQuantity(skus);

  const [currentSize, setCurrentSize] = useState(['SELECT SIZE']);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [triedSubmit, setTriedSubmit] = useState(false);

  const quantity = sizeQuantities[currentSize];

  const quantityArray = quantity > 15 ? populateLinearArray(15) : populateLinearArray(quantity);

  return (
    <>
      {/* <div
        className="checkout-container"
        style={{
          display: hidePrompt ? 'none' : 'flex',
        }}
      >
        <div>Please</div>
        <div>Just a spacer</div>
      </div> */}
      <div className="checkout-container">
        <>
          <DropDown
            options={
              sizes.length
                ? ['SELECT SIZE'].concat(
                  sizes.filter((size) => sizeQuantities[size] > 0),
                )
                : ['OUT OF STOCK']
            }
            onChange={setCurrentSize}
            flexGrow={3}
            label="Sizes"
          />
        </>
        <DropDown
          options={
            areArraysEqual(currentSize, ['SELECT SIZE']) ? ['-'] : quantityArray
          }
          onChange={setCurrentQuantity}
          flexGrow={2}
          label="Sizes"
          disabled={areArraysEqual(currentSize, ['SELECT SIZE'])}
        />
      </div>
      <div className="checkout-container">
        {sizes.length ? (
          <>
            <button
              type="button"
              style={{ flexGrow: '5' }}
              className="enchilada"
              onClick={() => {
                console.log('I am a button');
                setTriedSubmit(true);
              }}
            >
              <div
                style={{
                  paddingLeft: '0.25em',
                  display: 'flex',
                  justifyContent: 'spaceBetween',
                }}
              >
                <span>Add to Cart</span>
                <span>+</span>
              </div>
            </button>
            <button
              type="button"
              className="enchilada"
              style={{ flexGrow: '0' }}
            >
              Star
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

// AddToCart.propTypes = {
//   skus: PropTypes.shape({
//     [PropTypes.number.isRequired]: PropTypes.shape({
//       quantity: PropTypes.number.isRequired,
//       size: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// DropDown.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       option: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default AddToCart;
