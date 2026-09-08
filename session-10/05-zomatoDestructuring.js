// Q7/Q8 - Object destructuring
const order = {
  item: "Pizza",
  price: 350,
  user: "Amit"
};

const { item, price, user } = order;

console.log(`${user} ordered ${item} for ₹${price}`);
