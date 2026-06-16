function isEligibleForDiscount(totalAmount) {
  if (totalAmount >= 500) {
    return true;
  } else {
    return false;
  }
}
console.log(isEligibleForDiscount(300)); 
//console.log(isEligibleForDiscount(700));