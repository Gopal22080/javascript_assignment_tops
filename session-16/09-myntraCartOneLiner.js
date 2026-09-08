// Q13/Q14 - map() + reduce() one-liner
const cartItems = [
  { name: "T-Shirt", price: 799 },
  { name: "Jeans", price: 1499 },
  { name: "Shoes", price: 1999 }
];

const total = cartItems.map((item) => item.price).reduce((sum, price) => sum + price, 0);

console.log(`Total cart price: ₹${total}`);
