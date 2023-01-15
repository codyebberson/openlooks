/* @refresh reload */
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import { App } from './App';

import '../../node_modules/open-color/open-color.css';
import './main.css';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
