import { Router } from '@vaadin/router';

const handleAClick = (): void => {
  Router.go('/a');
};

const handleBClick = (): void => {
  Router.go('/b');
};

const handleFruitClick = (): void => {
  Router.go('/fruit');
};

class Home extends HTMLElement {
  private rootAEl: HTMLDivElement;

  private rootBEl: HTMLDivElement;

  private rootFruitEl: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');

    // A
    this.rootAEl = document.createElement('div');
    this.rootAEl.textContent = 'A';
    this.rootAEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootAEl);

    // B
    this.rootBEl = document.createElement('div');
    this.rootBEl.textContent = 'B';
    this.rootBEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootBEl);

    // FRUIT
    this.rootFruitEl = document.createElement('div');
    this.rootFruitEl.textContent = 'Fruit';
    this.rootFruitEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootFruitEl);

    shadow.appendChild(rootEl);
  }

  public connectedCallback(): void {
    this.rootAEl.addEventListener('click', handleAClick);
    this.rootBEl.addEventListener('click', handleBClick);
    this.rootFruitEl.addEventListener('click', handleFruitClick);
  }

  public disconnectedCallback(): void {
    this.rootAEl.removeEventListener('click', handleAClick);
    this.rootBEl.removeEventListener('click', handleBClick);
    this.rootFruitEl.removeEventListener('click', handleFruitClick);
  }
}

window.customElements.define('hello-home', Home);
