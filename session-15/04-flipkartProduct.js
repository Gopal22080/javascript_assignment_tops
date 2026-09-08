// Q7/Q8/Q9/Q13 - FlipkartProduct class
class FlipkartProduct {
  constructor(title, price, rating) {
    this.title = title;
    this.price = price;
    this.rating = rating;
  }

  getDiscountedPrice(discountPercent) {
    return this.price - (this.price * discountPercent) / 100;
  }

  showProductInfo() {
    console.log(`${this.title} - ₹${this.price} - ${this.rating}⭐`);
  }
}

const product = new FlipkartProduct("Redmi Note 12 Pro", 18999, 4.5);

console.log(`Discounted price: ₹${product.getDiscountedPrice(10)}`);
product.showProductInfo();
