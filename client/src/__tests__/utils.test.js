import { composeParams, formatPrice } from '../utils';

describe('formatPrice', () => {
  it('should format price correctly', () => {
    const input = '140.00';
    const result = formatPrice(input);
    const expected = '$140';
    expect(result).toBe(expected);
  });
});

describe('composeParams', () => {
  it('should compose multiple', () => {
    const input = { page: 1, count: 100, sort: 'relevant', product_id: 1813 };
    const result = composeParams(input);
    const expected = '?page=1&count=100&sort="relevant"&product_id=1813';
    expect(result).toBe(expected);
  });
  it('should compose a single param', () => {
    const input = { product_id: 1813 };
    const result = composeParams(input);
    const expected = '?product_id=1813';
    expect(result).toBe(expected);
  });
});