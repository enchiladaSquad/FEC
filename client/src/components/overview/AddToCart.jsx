import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DropDown from 'components/overview/DropDown';

import {
  composeSizeQuantity,
  populateLinearArray,
  areArraysEqual,
} from 'src/utils';

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
      <div
        className="checkout-container"
        style={{
          display:
            areArraysEqual(currentSize, ['SELECT SIZE']) && triedSubmit
              ? 'flex'
              : 'none',
          marginBottom: '0',
          paddingBottom: '0',
        }}
      >
        <div
          className="enchilada"
          style={{
            flexGrow: '3',

            backgroundColor: 'red',
            color: 'rgb(97, 26, 21)',
          }}
        >
          Please select size
        </div>
        <div
          className="enchilada"
          style={{ flexGrow: '2', visibility: 'hidden' }}
        >
          Just a spacer
        </div>
      </div>
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
