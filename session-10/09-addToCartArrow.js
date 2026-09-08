// Q13/Q14 - Arrow function + rest parameters
const addToCartArrow = (...prices) => {
  let total = 0;

  for (const price of prices) {
    total += price;
  }

  return total;
};

console.log(addToCartArrow(100, 200, 300));
