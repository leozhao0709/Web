import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('container');

const productsEl = document.querySelector('#my-products');
productsEl && productsMount(productsEl);
const cartEl = document.querySelector('#my-cart');
cartEl && cartMount(cartEl);
