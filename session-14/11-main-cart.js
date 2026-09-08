// Q10/Q11 - Use imported cart utilities
import {
  addToCart,
  removeFromCart,
  calculateTotal
} from "./cartUtils.js";

let cart = [];

cart = addToCart(cart, { name: "Shoes", price: 1999 });
cart = addToCart(cart, { name: "Watch", price: 2499 });

console.log("Cart:", cart);
console.log("Total:", calculateTotal(cart));

cart = removeFromCart(cart, "Shoes");

console.log("After removal:", cart);
console.log("New total:", calculateTotal(cart));
