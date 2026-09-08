// Q6 - map() to format products
const products = [
  { name: "Shoes", price: 1999 },
  { name: "Watch", price: 2499 },
  { name: "Backpack", price: 1499 }
];

const formattedProducts = products.map(
  (product) => `Product: ${product.name}, Price: ₹${product.price}`
);

console.log(formattedProducts);
