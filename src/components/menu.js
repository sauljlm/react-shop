import React from 'react';

import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shoping-car">shoping-car</NavLink>
    </nav>
  )
}