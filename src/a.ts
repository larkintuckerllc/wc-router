class A extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');
    rootEl.textContent = 'Hello A';
    shadow.appendChild(rootEl);
  }
}

window.customElements.define('hello-a', A);
