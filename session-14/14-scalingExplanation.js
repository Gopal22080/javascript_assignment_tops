// Q13/Q14 - 3-4 sentence explanation
/*
Splitting utility functions into separate files makes a large app easier
to organize because each file can focus on one responsibility. Features
can reuse the same functions instead of copying code into many components.
For example, a Zomato-like app can keep price formatting and discount
calculation inside priceUtils.js and import those functions in the cart,
checkout, restaurant, and order-history features. This makes the code
easier to test, maintain, and scale from 2 to 20 features.
*/
