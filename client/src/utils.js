export const formatPrice = (priceStr) => `$${priceStr.split('.')[0]}`;

export const composeParams = (params) => {
  let result = '?';
  Object.keys(params).forEach((param) => {
    result += `${param}=${params[param]}&`;
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
