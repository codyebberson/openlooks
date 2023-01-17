/* @refresh reload */
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import { NotificationProvider } from '../components/NotificationProvider/NotificationProvider';
import { App } from './App';

import './main.css';

render(
  () => (
    <NotificationProvider>
      <Router>
        <App />
      </Router>
    </NotificationProvider>
  ),
  document.getElementById('root') as HTMLElement
);
