import React from 'react';

import Nav from './menu';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

export default () => {
  const products = useSelector(state => state.shoppingCart);
  let numberCart = products.length;

  return (
    <header className="header">
      <Link className="header__logo" to="/" title="link to home" ><img src="./static/logo2.png" alt=""/></Link>
      <Nav />
      <Link className="header__shoping-car" to="/shopping-car">
        <img src="./static/shopping-car.png" alt=""/>
        <p className="header__number-cart">{numberCart}</p>
      </Link>
    </header>
  )
}
