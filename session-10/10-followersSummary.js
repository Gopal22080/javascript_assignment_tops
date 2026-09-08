// Q15 - Rest operator + arrow function
const getFollowersSummary = (...followers) => {
  let total = 0;

  for (const count of followers) {
    total += count;
  }

  return `Total followers: ${total}`;
};

console.log(getFollowersSummary(400, 300, 500));
