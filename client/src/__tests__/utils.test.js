import { formatPrice } from '../utils';

describe('formatPrice', () => {
  it('should format price correctly', () => {
    const input = '140.00';
    const result = formatPrice(input);
    const expected = '$140';
    expect(result).toBe(expected);
  });
});
