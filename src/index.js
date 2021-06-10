import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// clases de bootstrap -> estilos
import 'bootstrap/dist/css/bootstrap.min.css';
// archivos js y jquery de bootstrap -> comportamiento
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
