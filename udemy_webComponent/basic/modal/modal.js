class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen;
    this.shadowRoot.innerHTML = `
        <style>
            #backdrop {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.25);
                z-index: 10;
                opacity: 0;
                pointer-events: none;
            }
            #modal {
                position: fixed;
                z-index: 100;
                left: 25%;
                top: 15vh;
                width: 50%;
                background-color: white;
                border-radius: 3px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                opacity: 0;
                pointer-events: none;
            }

            :host([opened]) #modal,
            :host([opened]) #backdrop {
                opacity: 1;
                pointer-events: all;
            }

            header {
                padding: 1rem;
            }

            ::slotted(h1) {
                font-size: 1.25rem;
            }

            #main {
                padding: 1rem;
            }

            #actions {
                border-top: 1px solid #ccc;
                padding: 1rem;
                display: flex;
                justify-content: flex-end;
            }

            #actions button {
                margin: 0 0.25rem;
            }
        </style>
        <div id='backdrop'></div>
        <div id='modal'>
            <header>
                <slot name='title'><h1>Please Confirm</h1></slot>
            </header>
            <section id="main">
                <slot></slot>
            </section>
            <section id="actions">
                <button>Cancel</button>
                <button>Okay</button>
            </section>
        </div>
    `;
  }

  connectedCallback() {
    const backdrop = this.shadowRoot.querySelector('#backdrop');
    backdrop.addEventListener('click', () => {
      this.close();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    if (name === 'opened') {
      this.isOpen = !this.isOpen;
    }
  }

  static get observedAttributes() {
    return ['opened'];
  }

  open() {
    this.setAttribute('opened', '');
  }

  close() {
    this.removeAttribute('opened');
  }
}

customElements.define('lz-modal', Modal);
