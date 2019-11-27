import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers/index';

import App from './App';

import * as serviceWorker from './serviceWorker';
import './sass/style.scss';

const store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function startRender() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
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
