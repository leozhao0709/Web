class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
            }
            #modal {
                position: fixed;
                z-index: 100;
                left: 25%;
                top: 15vh;
                width: 50%;
                height: 30rem;
                background-color: white;
                border-radius: 3px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            }
        </style>
        <div id='backdrop'></div>
        <div id='modal'></div>
    `;
  }
}

customElements.define('lz-modal', Modal);
