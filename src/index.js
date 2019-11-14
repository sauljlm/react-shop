import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './sass/style.scss';

function startRender() {
  ReactDOM.render(<App />,document.getElementById('root'));
}

fetch('./data.json')
    .then(data => data.json())
    .then(data => {
        localStorage.setItem('data', JSON.stringify(data))
    });

window.onload = function() {
  startRender();
};

serviceWorker.unregister();
