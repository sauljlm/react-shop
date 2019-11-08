import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './sass/style.scss';

function startRender() {
  ReactDOM.render(<App />,document.getElementById('root'));
}

window.onload = function() {
  startRender();
};

serviceWorker.unregister();
