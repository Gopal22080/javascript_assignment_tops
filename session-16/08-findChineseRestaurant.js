// Q12 - find() first Chinese restaurant
const restaurants = [
  { name: "Pizza House", cuisine: "Italian" },
  { name: "Dragon Wok", cuisine: "Chinese" },
  { name: "Spice Garden", cuisine: "Indian" }
];

const chineseRestaurant = restaurants.find(
  (restaurant) => restaurant.cuisine === "Chinese"
);

console.log(chineseRestaurant);
