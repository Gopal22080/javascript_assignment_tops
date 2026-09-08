// Q12 - Import wishlist utilities using named imports
import {
  addToWishlist,
  removeFromWishlist,
  listWishlist
} from "./wishlistUtils.js";

let wishlist = [];

wishlist = addToWishlist(wishlist, "iPhone");
wishlist = addToWishlist(wishlist, "Headphones");
wishlist = addToWishlist(wishlist, "Smart Watch");

console.log("Wishlist:", listWishlist(wishlist));

wishlist = removeFromWishlist(wishlist, "Headphones");

console.log("Updated Wishlist:", listWishlist(wishlist));
