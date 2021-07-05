import React from 'react';

import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-logo'>
        <NavLink exact activeClassName='active-link' to='/'>
          <i className='fas fa-store-alt'></i>
        </NavLink>
      </div>
      <NavLink exact activeClassName='active-link' to='#'>
        SHOP
      </NavLink>
      <NavLink exact activeClassName='active-link' to='/shop/checkout'>
        <i className='fas fa-shopping-cart'></i>
      </NavLink>
    </div>
  );
};

export default Navbar;
