// Q7/Q8 - Custom Error for invalid payment amount
const checkPaymentAmount = (amount) => {
  if (amount <= 0) {
    throw new Error("Amount must be positive");
  }

  return "Payment accepted";
};

try {
  console.log(checkPaymentAmount(500));
  console.log(checkPaymentAmount(-100));
} catch (error) {
  console.log(error.message);
}
