import React from 'react';

import Home from './pages/home';
import Products from './pages/products';
import ProductInfo from './pages/product-info';
import ShoppingCart from './pages/shoppingCart';
import NotFound from './pages/error';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initial } from './actions/index';

function App() {
	const dispatch = useDispatch();
	let data = JSON.parse(localStorage.getItem('data'));
	dispatch(initial(data));
	
	return (
		<BrowserRouter>
			<Switch>
				<Route path={"/"} component={Home} exact/>
				<Route path={"/men"} component={Products}/>
				<Route path={"/women"} component={Products}/>
				<Route path={"/kids"} component={Products}/>
				<Route path={"/product-info"} component={ProductInfo}/>
				<Route path={"/shopping-car"} component={ShoppingCart}/>
				<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
