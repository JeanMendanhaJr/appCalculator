// Development by Jean Mendanha 
// www.jeanmendanha.com

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <h1>Calculator</h1>
    <React.StrictMode><Calculator /></React.StrictMode>
  </div>
  ,document.getElementById('root'));

serviceWorker.unregister();

