// Q12 - Throw and catch an Error object
const formatFollowers = (count) => {
  try {
    if (count < 0) {
      throw new Error("Negative count");
    }

    return `${count} followers`;
  } catch (error) {
    return error.message;
  }
};

console.log(formatFollowers(1200));
console.log(formatFollowers(-5));
