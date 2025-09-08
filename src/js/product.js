import ProductData from './ProductData.mjs';
import { getParam } from './utils.mjs';
import ProductDetails from './productDetails.mjs';

const productId = getParam('product');
const dataSource = new ProductData('tents');

//solo para prueba
//dataSource.findProductById(productId).then(product => {
//console.log(product);
//});

const product = new ProductDetails(productId, dataSource);
product.init();

// function addProductToCart(product) {
//   let cartItems = getLocalStorage('so-cart');
//
//   // Asegúrate de que sea un array
//   if (!Array.isArray(cartItems)) {
//     cartItems = [];
//   }
//
//   cartItems.push(product);
//   setLocalStorage('so-cart', cartItems);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }
//
// // add listener to Add to Cart button
// document
//   .getElementById('addToCart')
//   .addEventListener('click', addToCartHandler);
