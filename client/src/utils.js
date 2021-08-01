export const formatPrice = (priceStr) => `$${priceStr.split('.')[0]}`;

export const composeParams = (params) => {
  let result = '?';
  Object.keys(params).forEach((param) => {
    result += `${param}=${
      typeof params[param] === 'string' ? `"${params[param]}"` : params[param]
    }&`;
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
  return Number((Math.round((total / length) * 4) / 4).toString().slice(0, 3));
};
