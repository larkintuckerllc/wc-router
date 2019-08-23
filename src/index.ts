import { Router } from '@vaadin/router';
import './a';
import './b';
import './home';

document.addEventListener('DOMContentLoaded', () => {
  // HOME
  const navHomeEl = document.createElement('div');
  const navHomeAEl = document.createElement('a');
  navHomeAEl.textContent = 'Home';
  navHomeAEl.setAttribute('href', '/');
  navHomeEl.appendChild(navHomeAEl);
  document.body.appendChild(navHomeEl);
  // A
  const navAEl = document.createElement('div');
  const navAAEl = document.createElement('a');
  navAAEl.textContent = 'A';
  navAAEl.setAttribute('href', '/a');
  navAEl.appendChild(navAAEl);
  document.body.appendChild(navAEl);
  // B
  const navBEl = document.createElement('div');
  const navBAEl = document.createElement('a');
  navBAEl.textContent = 'B';
  navBAEl.setAttribute('href', '/b');
  navBEl.appendChild(navBAEl);
  document.body.appendChild(navBEl);
  // ROUTER
  const outletEl = document.createElement('div');
  document.body.appendChild(outletEl);
  const router = new Router(outletEl);
  router.setRoutes([
    { path: '/', component: 'hello-home' },
    { path: '/a', component: 'hello-a' },
    { path: '/b', component: 'hello-b' },
  ]);
});
