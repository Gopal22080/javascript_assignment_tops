// Q9 - reduce() total likes
const posts = [
  { caption: "Post 1", likes: 500 },
  { caption: "Post 2", likes: 1200 },
  { caption: "Post 3", likes: 800 }
];

const totalLikes = posts.reduce(
  (total, post) => total + post.likes,
  0
);

console.log(`Total likes: ${totalLikes}`);
