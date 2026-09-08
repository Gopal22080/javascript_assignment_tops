// Q15 - map() + reduce() one-liner
const transactions = [
  { description: "Food", amount: 450 },
  { description: "Travel", amount: 800 },
  { description: "Shopping", amount: 1200 }
];

const totalSpent = transactions.map((transaction) => transaction.amount).reduce(
  (sum, amount) => sum + amount,
  0
);

console.log(`Total amount spent: ₹${totalSpent}`);
