export const formatPrice = (priceStr) => `$${priceStr.split('.')[0]}`;

export const composeParams = (params) => {
  let result = '?';
  for (const param in params) {
    result += `${param}=${
      typeof params[param] === 'string' ? `"${params[param]}"` : params[param]
    }&`;
  }
  return result.slice(0, -1);
};

export const composeArray = (inputArray, start, end) => {
  const ret = [];
  let current = start;
  while (current !== end) {
    if (current > inputArray.length - 1) {
      current = 0;
    }
    ret.push(inputArray[current]);

    current += 1;
  }
  return ret;
};
