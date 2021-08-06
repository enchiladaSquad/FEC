import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import product from '../../../../server/data/exampleProductIdRes';
import productStyles from '../../../../server/data/exampleProductIdStyleRes';
import { formatPrice } from '../../utils';

import ProductInfo from './ProductInfo';

describe('sample tests', () => {
  it('should pass a simple render test', () => {
    const aDiv = render(<div />);

    expect(aDiv).toBeTruthy();
  });

  test('another simple test', async () => {
    await act(async () => {
      const cmpt = render(<div data-testid="name">Alex</div>);
      const name = cmpt.getByTestId('name').textContent;
      expect(name).toBe('Alex');
    });
  });

  test('a third simple test', async () => {
    await act(async () => {
      const cmpt = render(<div title="name">Alex</div>);
      const name = cmpt.getByTitle('name').textContent;
      expect(name).toBe('Alex');
    });
  });
});

describe('ProductInfo', () => {
  let cmpt;
  beforeEach(async () => {
    await act(async () => {
      cmpt = render(
        <ProductInfo
          styleName={productStyles.results[0].name}
          product={product}
          salePrice={'10000'}
        />,
      );
    });
  });

  it('should display the category of the product accurately', async () => {
    const category = cmpt.getByTitle('product-category').innerHTML;
    expect(category).toBe(product.category.toUpperCase());
  });

  it('should display the name of the product accurately', () => {
    const name = cmpt.getByTitle('product-name').innerHTML;
    expect(name).toBe(product.name);
  });

  it('should display the default price of the product accurately', () => {
    const price = cmpt.getByTitle('default-product-price').innerHTML;
    expect(price).toBe(formatPrice(product.default_price));
  });

  it('should display the sale price of the product accurately', async () => {
    const price = cmpt.getByTitle('sale-product-price').innerHTML;
    expect(price).toBe('$10000');
  });
});
