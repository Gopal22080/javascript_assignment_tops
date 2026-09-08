// Q9 - Validate item prices in a Zomato-style order
const getOrderTotal = (items) => {
  let total = 0;

  for (const item of items) {
    if (item.price < 0) {
      throw new Error("Invalid item price");
    }

    total += item.price;
  }

  return total;
};

const items = [
  { name: "Pizza", price: 350 },
  { name: "Burger", price: 200 },
  { name: "Fries", price: -50 }
];

try {
  console.log(`Order total: ₹${getOrderTotal(items)}`);
} catch (error) {
  console.log(`Sorry, your order could not be processed: ${error.message}`);
}
