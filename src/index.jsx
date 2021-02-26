import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import Page from './Page'; //importe fonction page du fichier page.js

const baseName = (window.location.href.search(/github\.io/i) !== -1) ? "/panier-achats" : "";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={baseName}>
      <Page />
    </Router>
  </React.StrictMode>,
  document.getElementById('racine')
);
