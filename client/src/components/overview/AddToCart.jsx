import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DropDown from 'components/overview/DropDown';

import { composeSizeQuantity, populateLinearArray } from 'src/utils';

const getSizesFromSkus = (skus) => {
  const keys = Object.keys(skus);
  return keys.map((key) => {
    return skus[key].size;
  });
};

const AddToCart = ({ skus }) => {
  const sizes = getSizesFromSkus(skus);
  const sizeQuantities = composeSizeQuantity(skus);

  const [currentSize, setCurrentSize] = useState('SELECT SIZE');
  const [currentQuantity, setCurrentQuantity] = useState('-'); // * USED FOR CART ENDPOINT

  const [sizeSelectOpen, setSizeSelectOpen] = useState(false);
  const [triedSubmit, setTriedSubmit] = useState(false);

  const quantity = sizeQuantities[currentSize];

  const quantityArray = quantity > 15 ? populateLinearArray(15) : populateLinearArray(quantity);

  return (
    <>
      <div
        onFocus={() => setSizeSelectOpen(false)}
        id="size-error-container"
        className="checkout-container"
        style={{
          display:
            currentSize === 'SELECT SIZE' && triedSubmit ? 'flex' : 'none',
        }}
      >
        <div id="size-error" className="enchilada">
          Please Select a Size
        </div>
        <div id="size-error-placeholder" className="enchilada" />
      </div>
      <div className="checkout-container">
        <span onClick={() => setSizeSelectOpen(true)}>
          <DropDown
            options={
              sizes.length
                ? ['SELECT SIZE'].concat(
                  sizes.filter((size) => sizeQuantities[size] > 0),
                )
                : ['OUT OF STOCK']
            }
            handleChange={(e) => setCurrentSize(e.target.value)}
            value={currentSize}
            label={'Sizes'}
            open={sizeSelectOpen}
            disabled={false}
          />
        </span>
        <div style={{ flexGrow: '2' }}>
          <DropDown
            options={['-'].concat(quantityArray)}
            handleChange={(e) => setCurrentQuantity(e.target.value)}
            label={'Quantities'}
            value={currentQuantity}
            disabled={currentSize === 'SELECT SIZE'}
          />
        </div>
      </div>
      <div className="checkout-container">
        {sizes.length ? (
          <>
            <button
              type="button"
              style={{ flexGrow: '5', textAlign: 'center' }}
              className="enchilada"
              onClick={() => {
                setTriedSubmit(true);
                if (currentSize === 'SELECT SIZE') {
                  setSizeSelectOpen(true);
                }
              }}
            >
              <span id="cart-button-text">Add to Cart +</span>
            </button>
            <button
              type="button"
              className="enchilada"
              style={{ flexGrow: '0', textAlign: 'center' }}
            >
              <i className="fa fa-star" />
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

AddToCart.propTypes = {
  skus: PropTypes.objectOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default AddToCart;
