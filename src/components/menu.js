import React from 'react';

import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink className="shopping-car" to="/shoping-car">car</NavLink>
    </nav>

  )
}
