import productsReducer from './products';
import shopingCarReducer from './shopingCar';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  products: productsReducer,
  shopingCar: shopingCarReducer
});

export default allReducers;
