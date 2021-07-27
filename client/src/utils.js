export const formatPrice = (priceStr) => {
  return `$${priceStr.split('.')[0]}`;
};
