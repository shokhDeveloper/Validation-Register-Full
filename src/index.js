import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App  from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { ProviderContext } from './Context/Context';
// import "bootstrap/dist/js/bootstrap.min.js"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProviderContext>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProviderContext>
);


