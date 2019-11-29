import productsReducer from './products';
import shoppingCartReducer from './shoppingCart';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer
});

export default allReducers;
