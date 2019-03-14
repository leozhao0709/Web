class Tooltip extends HTMLElement {
  constructor() {
    super();
    // eslint-disable-next-line no-console
    console.log('This is my tool tip');
  }
}

customElements.define('lz-tooltip', Tooltip); // define name must have a dash. And do not use under_score or any other synmbol to define your name
