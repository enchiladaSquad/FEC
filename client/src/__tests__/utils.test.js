import { formatPrice } from 'src/utils.js';

describe('formatPrice', function () {
  it('should format price correctly', function () {
    const input = '140.00';
    const result = formatPrice(input);
    const expected = '$140';
    expect(result).toBe(expected);
  });
});
