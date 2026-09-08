// Q12 - Refactor callback code to a Promise
const processPayment = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment successful!");
      resolve();
    }, 1000);
  });
};

processPayment();
