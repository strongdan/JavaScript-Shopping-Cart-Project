let totalPaid = 0;

let products = [
{   
    'name' : 'cherry',
    'price' : 3.99,
    'quantity' : 0,
    'productId' : 1,
    'image' : '/images/cherry.jpg',
 },
 {  
    'name' : 'orange',
    'price' : 0.99,
    'quantity' : 0,
    'productId' : 2,
    'image' : '/images/orange.jpg',
},
{
  'name' : 'strawberry',
  'price' : 2.99,
  'quantity' : 0,
  'productId' : 3,
  'image' : '/images/strawberry.jpg',
}]

let cart = [];

/**
* @description Adds product to cart using the product ID and updates product quantity if already in cart
* @method addProductToCart
* @param {Number} productId
* @returns null
*/
const addProductToCart = (productId) => {
  const product = products.find((product) => product.productId === productId);
  
  if (cart.includes(product)){
    increaseQuantity(productId);
  } else {
    product.quantity = 1;
    cart.push(product)
  }
}

/**
* @description Increases quantity of product in cart
* @method increaseQuantity
* @param {Number} productId
* @return null
*/
const increaseQuantity = (productId) => {
  for (product of products){
    if (product.productId === productId){
      product.quantity += 1;
    }
  }
}

/**
* @description Reduces quantity of product in cart and removes from cart if zero
* @method decreaseQuantity
* @param {String} productId
* @return null
*/
const decreaseQuantity = (productId) => {
  for (const product of cart){
    if (product.productId === productId){
      if (product.quantity > 0){
        product.quantity -= 1;
      } 
      if (product.quantity === 0){
        removeProductFromCart(product.productId);
      }
    }
  }
}

/**
* @description Removes product from cart array
* @method removeProductFromCart
* @param {Number} productId
* @return null
*/
const removeProductFromCart = (productId) => {
  for (const product of cart){
    if (product.productId === productId){
      product.quantity = 0;
      cart.splice(cart.indexOf(product), 1);
    }
  }
}

/**
* @description Gets the total value of items in cart
* @method cartTotal
* @return integer total
*/
const cartTotal = () => {
  let total = 0;

  for (const product of cart){
    total += product.price * product.quantity;
  }
  
  return total;
}

/**
* @description Removes all products from cart array
* @method emptyCart
* @return null
*/
const emptyCart = () => {
  cart = [];
}

/**
* @description Allows user to pay for items and get change
* @method pay
* @param {Number} amount
* @return {Number} balance
*/
const pay = (amount) => {
  const balance = amount - cartTotal();
  totalPaid += balance;
  return Number.parseFloat(balance).toFixed(2);
}

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
