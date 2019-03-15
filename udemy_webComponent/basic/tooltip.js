class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipText = 'Default tooltip text';
    this._tooltipContainer;
  }

  // call all the dom staff here
  connectedCallback() {
    if (this.getAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    this.addEventListener('mouseenter', () => {
      this._tooltipContainer = document.createElement('div');
      this._tooltipContainer.textContent = this._tooltipText;
      this.appendChild(this._tooltipContainer);

      this.style.position = 'relative';
      this._tooltipContainer.style.position = 'absolute';
      this._tooltipContainer.style.zIndex = 10;
      this._tooltipContainer.style.backgroundColor = 'yellow';
      this._tooltipContainer.style.left = '50%';
      this.style.backgroundColor = 'orange';
    });

    this.addEventListener('mouseleave', () => {
      this.removeChild(this._tooltipContainer);
    });
  }
}

customElements.define('lz-tooltip', Tooltip); // define name must have a dash. And do not use under_score or any other synmbol to define your name
