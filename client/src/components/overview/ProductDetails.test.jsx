import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
// import { render, act } from '@testing-library/react';
// import reactDom from 'react-dom';

import ProductDetails from './ProductDetails';

describe('ProductDetails', () => {
  test.only('the simplest test', () => {
    const aDiv = render(<div />);

    expect(aDiv).toBeTruthy();
  });

  test('displays the name of the product', async () => {
    let cmpt;
    const product = 'data/exampleProductIdRes.js';

    await act(async () => {
      cmpt = render(<ProductDetails product={product} />);
      const name = cmpt.getByTitle('product-name');
      expect(name).toBe(product.name);
    });
  });

  test('displays the price of the product', async () => {
    let cmpt;
    const product = 'data/exampleProductIdRes.js';

    await act(async () => {
      cmpt = render(<ProductDetails product={product} />);
      const price = cmpt.getByTitle('default-product-price');
      expect(price).toBe(product.default_price);
    });
  });

  test('displays the category of the product', async () => {
    let cmpt;
    const product = 'data/exampleProductIdRes.js';

    await act(async () => {
      cmpt = render(<ProductDetails product={product} />);
      const category = cmpt.getByTitle('product-category');
      expect(category).toBe(product.category);
    });
  });
});
