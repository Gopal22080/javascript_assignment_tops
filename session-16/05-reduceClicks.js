// Q7/Q8 - reduce() total clicks
const orders = [
  { item: "Pizza", clicks: 120 },
  { item: "Burger", clicks: 80 },
  { item: "Biryani", clicks: 150 }
];

const totalClicks = orders.reduce(
  (total, order) => total + order.clicks,
  0
);

console.log(`Total clicks: ${totalClicks}`);
