import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="">
      <img src="/images/virus.png" height="45" width="45"  class="d-inline-block align-top"/>
      <span className = "brand_custom">COVID 19</span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <li class="nav-item active">
          <NavLink to = "/" className= {"nav-link"}>Tracker</NavLink>  
        </li>
        <li class="nav-item">
          <NavLink to = "/prevention" className = {"nav-link"}>Prevention</NavLink>
        </li>
      </div>
    </div>
  </nav>
);

export default Header;


