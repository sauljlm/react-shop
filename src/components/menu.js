import React from 'react';

import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <nav className="menu header__menu">
      <NavLink className="menu__item" exact activeClassName="menu__item--active" to="/">Home</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item--active" to="/men">Men</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item--active"to="/women">Women</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item--active" to="/kids">Kids</NavLink>
    </nav>
  )
}
