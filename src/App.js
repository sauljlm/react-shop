import React from 'react';

import Home from './pages/home';
import ShoppingCar from './pages/shoppingCar';
import NotFound from './pages/error';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path={"/"} component={Home} exact/>
					<Route path={"/shopping-car"} component={ShoppingCar}/>
					<Route component={NotFound}/>
				</Switch>
			</BrowserRouter>
		);
}

export default App;
