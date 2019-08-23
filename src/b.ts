class B extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');
    rootEl.textContent = 'Hello B';
    shadow.appendChild(rootEl);
  }
}

window.customElements.define('hello-b', B);
