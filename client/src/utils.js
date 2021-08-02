export const formatPrice = (priceStr) => `$${priceStr.split('.')[0]}`;

export const composeParams = (params) => {
  let result = '?';
  Object.keys(params).forEach((param) => {
    result += `${param}=${typeof params[param] === 'string' ? `"${params[param]}"` : params[param]}&`;
  });
  return result.slice(0, -1);
};

export const averageRatings = (ratings) => {
  let total = 0;
  let length = 0;
  Object.keys(ratings).forEach((key) => {
    if (ratings[key] > -1) {
      total += key * ratings[key];
      length += Number(ratings[key]);
    }
  });
  const average = Number((Math.round((total / length) * 4) / 4).toString().slice(0, 3));
  if (average.toString().length === 1) {
    return `${average}.0`;
  }
  return average;
};

export const makeRows = (array, size) => {
  const result = [];
  let j = 0;
  for (let i = 0; i < Math.ceil(array.length / size); i += 1) {
    result[i] = array.slice(j, j + size);
    j += size;
  }
  return result;
};

export const composeSizeQuantity = (skus) => {
  const keys = Object.keys(skus);
  const result = {};
  for (let i = 0; i < keys.length; i += 1) {
    const { size, quantity } = skus[keys[i]];
    result[size] = quantity;
  }
  return result;
};

export const populateLinearArray = (size) => {
  const arr = [];
  for (let i = 1; i <= size; i += 1) {
    arr.push(i);
  }
  return arr;
};

export const areArraysEqual = (arr1, arr2) => {
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
