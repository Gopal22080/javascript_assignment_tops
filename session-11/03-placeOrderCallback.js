// Q4/Q5 - Callback with setTimeout
const placeOrder = (item, callback) => {
  setTimeout(() => {
    callback(`Your ${item} is being prepared`);
  }, 1000);
};

placeOrder("Pizza", (message) => {
  console.log(message);
});
