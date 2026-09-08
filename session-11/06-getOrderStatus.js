// Q9 - Promise resolve/reject based on order ID
const getOrderStatus = (orderId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId % 2 === 0) {
        resolve("Order delivered");
      } else {
        reject("Order not found");
      }
    }, 1500);
  });
};

getOrderStatus(2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

getOrderStatus(3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
