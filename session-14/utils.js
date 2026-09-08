// Q3 - Named exports
export const formatPrice = (price) => {
  return `₹${price.toFixed(2)}`;
};

export const getDiscountedPrice = (price, discount) => {
  return price - (price * discount) / 100;
};
