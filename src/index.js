import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <HashRouter hashType="hashbang" >
      <App />
    </HashRouter>
  </React.StrictMode>, rootElement
);


