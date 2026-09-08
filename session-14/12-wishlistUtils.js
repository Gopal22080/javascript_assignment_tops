// Q12 - Wishlist utility functions
export const addToWishlist = (wishlist, item) => {
  wishlist.push(item);
  return wishlist;
};

export const removeFromWishlist = (wishlist, itemName) => {
  return wishlist.filter((item) => item !== itemName);
};

export const listWishlist = (wishlist) => {
  return wishlist;
};
