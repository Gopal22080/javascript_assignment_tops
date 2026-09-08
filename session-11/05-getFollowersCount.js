// Q7/Q8 - Promise with random follower count
const getFollowersCount = new Promise((resolve) => {
  setTimeout(() => {
    const followers = Math.floor(Math.random() * 4001) + 1000;
    resolve(followers);
  }, 1000);
});

getFollowersCount.then((count) => {
  console.log(`You have ${count} new followers`);
});
