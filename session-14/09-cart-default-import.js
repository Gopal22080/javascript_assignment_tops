// Q9 - Import default + named export
import getDiscountedPrice, { formatPrice } from "./utils-default.js";

const price = 2000;
const discount = 15;

const discountedPrice = getDiscountedPrice(price, discount);

console.log(`Original: ${formatPrice(price)}`);
console.log(`Discounted: ${formatPrice(discountedPrice)}`);
