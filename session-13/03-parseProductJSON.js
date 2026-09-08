// Q4/Q5 - try...catch...finally with JSON.parse
const productJSON = '{"name":"Shoes","price":999}';

try {
  const product = JSON.parse(productJSON);
  console.log("Product:", product);
} catch (error) {
  console.log("Invalid product data");
} finally {
  console.log("Parsing attempt finished");
}
