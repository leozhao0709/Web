import faker from 'faker';

const mount = (el: Element) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const cart = document.querySelector('#dev-cart');
  cart && mount(cart);
}

export { mount };
