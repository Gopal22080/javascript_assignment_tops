// Q4/Q5 - Default parameters
const getDeliveryDetails = (address = "Ahmedabad", paymentMethod = "UPI") => {
  console.log(`Address: ${address}, Payment Method: ${paymentMethod}`);
};

getDeliveryDetails();
getDeliveryDetails("Surat", "Cash on Delivery");
