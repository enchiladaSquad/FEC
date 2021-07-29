import {
  averageRatings, composeParams, formatPrice, makeRows,
} from '../utils';

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
    const input = {
      page: 1,
      count: 100,
      sort: 'relevant',
      product_id: 1813,
    };
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

describe('averageRatings', () => {
  it('should average an object of review counts', () => {
    const input = {
      1: '1',
      2: '1',
      3: '1',
      4: '3',
      5: '8',
    };
    const result = averageRatings(input);
    const expected = 4.2;
    expect(result).toBe(expected);
  });
  it('should ignore negative values', () => {
    const input = {
      1: '-1',
      2: '1',
      3: '1',
      4: '3',
      5: '8',
    };
    const result = averageRatings(input);
    const expected = 4.5;
    expect(result).toBe(expected);
  });
});

describe('make rows', () => {
  it('should work for evenly-distributed rows', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = makeRows(input, 4);
    const expected = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];
    expect(result).toEqual(expected);
  });

  it('should work for unevenly-distributed rows', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = makeRows(input, 4);
    const expected = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10],
    ];
    expect(result).toEqual(expected);
  });
});
