import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from './firebase/firebase.utils';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

import { selectCurrentUser } from './redux/users/user.selectors';

const Navbar = ({ currentUser }) => {
  return (
    <div className='Navbar'>
      <div className='Navbar-logo'>
        <NavLink exact activeClassName='active-link' to='/'>
          <i className='fas fa-store-alt'></i>
        </NavLink>
      </div>
      <NavLink exact activeClassName='active-link' to='/shop'>
        SHOP
      </NavLink>
      {currentUser ? (
        <NavLink exact to='#' onClick={() => auth.signOut()}>
          SIGN-OUT
        </NavLink>
      ) : (
        <NavLink exact activeClassName='active-link' to='/signin'>
          SIGN-IN
        </NavLink>
      )}
      <NavLink exact activeClassName='active-link' to='/shop/checkout'>
        <i className='fas fa-shopping-cart'></i>
      </NavLink>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Navbar);
