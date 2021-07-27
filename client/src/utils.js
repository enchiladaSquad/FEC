export const formatPrice = (priceStr) => `$${priceStr.split('.')[0]}`;
export const composeParams = (params) => {
  let result = '?';
  for (let param in params) {
    result += `${param}=${typeof params[param] === 'string' ? '"' + params[param] + '"' : params[param]}&`
  }  
  return result.slice(0, -1);
};