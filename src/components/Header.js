import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
    <div>
      <h1>COVID 19</h1>
      <NavLink to = "/" >Tracker</NavLink>
      <NavLink to = "/prevention">Prevention</NavLink>
    </div>
);

export default Header;


