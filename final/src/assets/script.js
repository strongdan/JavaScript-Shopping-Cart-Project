let totalPaid = 0;
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

let cart = [];

const addProductToCart = (productId) => {
  for (product of products){
    if (product.productId === productId){
      if (cart.includes(product)){
        product.quantity += 1;
      } else {
        product.quantity = 1;
        cart.push(product)
      }
    }
  }
}

const increaseQuantity = (productId) => {
  for (product of products){
    if (product.productId === productId){
      product.quantity += 1;
    }
  }
}

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

const removeProductFromCart = (productId) => {
  for (const product of cart){
    if (product.productId === productId){
      product.quantity = 0;
      cart.splice(cart.indexOf(product), 1);
    }
  }
}

const cartTotal = () => {
  let total = 0;

  for (const product of cart){
    total += product.price * product.quantity;
  }
  
  return total;
}

const emptyCart = () => {
  cart = [];
}

const pay = (amount) => {
  const balance = amount - cartTotal();
  totalPaid += balance;
  return Number(balance.toFixed(2));
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
