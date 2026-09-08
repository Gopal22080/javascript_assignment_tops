// Q9 - Refactored utils.js
// getDiscountedPrice is now the default export.
// formatPrice remains a named export.

export const formatPrice = (price) => {
  return `₹${price.toFixed(2)}`;
};

const getDiscountedPrice = (price, discount) => {
  return price - (price * discount) / 100;
};

export default getDiscountedPrice;
