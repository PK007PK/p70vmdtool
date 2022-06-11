import { HelmetComp } from 'components/atoms/Helmet/Helmet';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';

ReactDOM.render(
  <React.StrictMode>
    <HelmetComp />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
