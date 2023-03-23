import 'core-js/stable';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = createRoot(document.querySelector('#app') as Element);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
