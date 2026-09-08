// Q10/Q11 - Flipkart-style cart utilities
export const addToCart = (cart, product) => {
  cart.push(product);
  return cart;
};

export const removeFromCart = (cart, productName) => {
  return cart.filter((product) => product.name !== productName);
};

export const calculateTotal = (cart) => {
  return cart.reduce((total, product) => total + product.price, 0);
};
