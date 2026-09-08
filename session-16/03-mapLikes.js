// Q4/Q5 - map() to get like counts
const posts = [
  { caption: "Sunset", likes: 1200 },
  { caption: "Travel", likes: 850 },
  { caption: "Food", likes: 2300 }
];

const likeCounts = posts.map((post) => post.likes);

console.log(likeCounts);
