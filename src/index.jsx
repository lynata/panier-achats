import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Page from './Page'; //importe fonction page du fichier page.js

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('racine')
);
