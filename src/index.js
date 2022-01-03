import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './pages/Home/home';
import Repos from './pages/Repos/repos';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);