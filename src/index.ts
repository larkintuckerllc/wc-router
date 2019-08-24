import { Router } from '@vaadin/router';
import './A';
import './B';
import './Home';
import './NotFound';

const outletEl = document.getElementById('root');
const router = new Router(outletEl);
router.setRoutes([
  { path: '/', component: 'hello-home' },
  { path: '/a', component: 'hello-a' },
  { path: '/b', component: 'hello-b' },
  { path: '(.*)', component: 'hello-not-found' },
]);
