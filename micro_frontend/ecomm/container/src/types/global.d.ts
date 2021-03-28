declare module '*.scss' {
  const styles: { readonly [key: string]: string };
  export default styles;
}

declare module 'products/ProductsIndex' {
  const mount: (el: Element) => void;

  export { mount };
}

declare module 'cart/CartShow' {
  const mount: (el: Element) => void;

  export { mount };
}
