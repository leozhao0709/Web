class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipText = 'Default tooltip text';
    this._tooltipContainer;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: black;
          color: white;
          position: absolute;
          z-index: 10;
          left: 50%;
          transform: translateX(-50%);
        }
        :host {
          border: 1px solid #000;
        }
      </style>
      <slot>Some default</slot>
    `;
  }

  // call all the dom staff here
  connectedCallback() {
    if (this.getAttribute('text')) {
      this._tooltipText = this.getAttribute('text'); // you can define your component attribute and get it like this
    }

    this.style.backgroundColor = 'orange';
    this.style.position = 'relative';
    this.addEventListener('mouseenter', () => {
      this._tooltipContainer = document.createElement('div');
      this._tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(this._tooltipContainer);
    });

    this.addEventListener('mouseleave', () => {
      this.shadowRoot.removeChild(this._tooltipContainer);
    });
  }
}

customElements.define('lz-tooltip', Tooltip); // define name must have a dash. And do not use under_score or any other synmbol to define your name
