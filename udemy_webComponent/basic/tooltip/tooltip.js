class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipText = 'Default tooltip text';
    this._tooltipContainer;
    this._tooltipIcon;
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
          border-radius: 3px;
          box-shadow: 1px 1px 6px rgba(0,0,0,0.26);
        }
        :host {
          border: 1px solid #000;
          position: relative;
        }

        ::slotted(.highlighted) {
          background-color: yellow;
        }

        .icon {
          background: black;
          color: white;
          padding: 0.15rem 0.5rem;
          text-align: center;
          border-radius: 50%;
          position: relative;
        }

      </style>
      <slot>Some default</slot>
      <span class="icon">?</span>
    `;
  }

  // call all the dom staff here
  connectedCallback() {
    if (this.getAttribute('text')) {
      this._tooltipText = this.getAttribute('text'); // you can define your component attribute and get it like this
    }
    this._tooltipIcon = this.shadowRoot.querySelector('span');
    this._tooltipIcon.addEventListener('mouseenter', () => this._showTooltip());

    this._tooltipIcon.addEventListener('mouseleave', () => this._hideTooltip());
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    this._tooltipIcon.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this._tooltipIcon.removeChild(this._tooltipContainer);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    if (name === 'text') {
      this._tooltipText = newValue;
    }
  }

  static get observedAttributes() {
    return ['text', 'class'];
  }

  disconnectedCallback() {
    this._tooltipIcon.removeEventListener('mouseenter');
    this._tooltipIcon.removeEventListener('mouseleave');
  }
}

customElements.define('lz-tooltip', Tooltip); // define name must have a dash. And do not use under_score or any other synmbol to define your name
