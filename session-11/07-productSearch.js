// Q10/Q11 - Callback and Promise versions of product search
const products = [
  { name: "iPhone 15", price: 70000 },
  { name: "Samsung Galaxy S24", price: 65000 },
  { name: "Redmi Note 14", price: 18000 },
  { name: "iPhone 15 Pro", price: 120000 }
];

// Callback version
const searchProductsCallback = (products, searchTerm, callback) => {
  setTimeout(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    callback(results);
  }, 1000);
};

// Promise version
const searchProductsPromise = (products, searchTerm) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      resolve(results);
    }, 1000);
  });
};

searchProductsCallback(products, "iphone", (results) => {
  console.log("Callback results:", results);
});

searchProductsPromise(products, "samsung")
  .then((results) => {
    console.log("Promise results:", results);
  });
