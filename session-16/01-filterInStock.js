// Q1/Q2 - filter() products that are in stock
const products = [
  { name: "iPhone 15", price: 70000, isInStock: true },
  { name: "Samsung Galaxy S24", price: 65000, isInStock: false },
  { name: "Redmi Note 14", price: 18000, isInStock: true }
];

const inStockProducts = products.filter((product) => product.isInStock);

console.log(inStockProducts);
