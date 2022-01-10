import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./routes/routes"
import { BrowserRouter } from 'react-router-dom'

import './index.scss';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);