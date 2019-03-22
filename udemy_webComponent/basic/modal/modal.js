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
                top: 10vh;
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

            :host([opened]) #modal {
              top: 15vh;
              transition: all 0.3s ease-out;
            }

            header {
                padding: 1rem;
                border-bottom: 1px solid #ccc;
            }

            ::slotted(h1) {
                font-size: 1.25rem;
                margin: 0;
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
                <button id="cancel-btn">Cancel</button>
                <button id="confirm-btn">Okay</button>
            </section>
        </div>
    `;

    const cancelBtn = this.shadowRoot.querySelector('#cancel-btn');
    const confirmBtn = this.shadowRoot.querySelector('#confirm-btn');
    const backdrop = this.shadowRoot.querySelector('#backdrop');
    backdrop.addEventListener('click', e => this._cancel(e));
    cancelBtn.addEventListener('click', e => this._cancel(e));
    confirmBtn.addEventListener('click', () => this._confirm());
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

  _close() {
    this.removeAttribute('opened');
  }

  _cancel(e) {
    this._close();
    const cancelEvent = new Event('cancel', { composed: true });
    e.currentTarget.dispatchEvent(cancelEvent);
  }

  _confirm() {
    this._close();
    const confirmEvent = new Event('confirm');
    this.dispatchEvent(confirmEvent);
  }
}

customElements.define('lz-modal', Modal);
