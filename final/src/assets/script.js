

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [];

const cherry = { 
    'name' : 'cherry',
    'price' : 3.99,
    'quantity' : 0,
    'productId' : 1,
    'image' : '/images/cherry.jpg',
 }

 const orange = { 
  'name' : 'orange',
  'price' : 0.99,
  'quantity' : 0,
  'productId' : 2,
  'image' : '/images/orange.jpg',
}

const strawberry = { 
  'name' : 'strawberry',
  'price' : 2.99,
  'quantity' : 0,
  'productId' : 3,
  'image' : '/images/strawberry.jpg',
}

products.push(cherry);
products.push(orange);
products.push(strawberry);

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
const addProductToCart = (productId) => {
  for (product of products){
    if (product.productId === productId){
      if (cart.indexOf(product) > 0){
        product.quantity += 1;
      } else {
        cart.push(product)
      }
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
const increaseQuantity = (productId) => {
  const product = products.productId;

  product.quantity += 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

const decreaseQuantity = (productId) => {
  for (const product of products){
    if (product.productId === productId){
      if (product.quantity > 0){
        product.quantity -= 1;
      } else {
        cart.pop(product);
      }
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
const removeProductFromCart = (productId) => {
  for (const product of cart){
    if (product.productId === productId){
      product.quantity = 0;
      cart.pop(product);
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
const cartTotal = () => {
  let total = 0;

  for (const product of cart){
    total += product.price * product.quantity;
  }
  
  return Number(total.toFixed(2));
}

/* Create a function called emptyCart that empties the products from the cart */
const emptyCart = () => {
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
const pay = (amount) => {
  const balance = amount - cartTotal();
  return Number(balance.toFixed(2));
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
