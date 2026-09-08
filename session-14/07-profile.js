// Q7/Q8 - Import default export
import formatFollowers from "./instaHelpers.js";

const users = [
  { name: "Amit", followers: 1200 },
  { name: "Rahul", followers: 2500000 },
  { name: "Priya", followers: 850 }
];

users.forEach((user) => {
  console.log(`${user.name}: ${formatFollowers(user.followers)} followers`);
});
