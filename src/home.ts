const handleAClick = (): void => {
  window.history.pushState({}, 'A', '/a');
};

class Home extends HTMLElement {
  private rootAEl: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');

    // A
    this.rootAEl = document.createElement('div');
    this.rootAEl.textContent = 'A';
    this.rootAEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootAEl);

    shadow.appendChild(rootEl);
  }

  public connectedCallback(): void {
    this.rootAEl.addEventListener('click', handleAClick);
  }

  public disconnectedCallback(): void {
    this.rootAEl.removeEventListener('click', handleAClick);
  }
}

window.customElements.define('hello-home', Home);
