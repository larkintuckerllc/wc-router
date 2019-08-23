class Home extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');
    rootEl.textContent = 'Hello Home';
    shadow.appendChild(rootEl);
  }
}

window.customElements.define('hello-home', Home);
