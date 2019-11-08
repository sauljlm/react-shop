import React from 'react';

import Home from './pages/home';
import ShopingCar from './pages/shopingCar';
import NotFound from './pages/error';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path={"/"} component={Home} exact/>
					<Route path={"/shoping-car"} component={ShopingCar}/>
					<Route component={NotFound}/>
				</Switch>
			</BrowserRouter>
		);
}

export default App;
