import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './styles/App.css';

import Navbar from './Navbar';
import CategoryContainer from './CategoryContainer';
import CategoryPage from './CategoryPage';
import Checkout from './Checkout';
import SHOP_DATA from './data/shop.data';
import Shop from './Shop';
import Authentication from './Authentication';

import { auth, createUserProfile } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/users/user.actions';

const App = ({ setCurrentUser }) => {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((s) => {
          setCurrentUser({ id: s.id, ...s.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <CategoryContainer />}></Route>
        <Route exact path='/signin' render={() => <Authentication />}></Route>
        <Route exact path='/shop' render={() => <Shop />}></Route>
        <Route exact path='/shop/checkout' render={() => <Checkout />}></Route>
        <Route
          exact
          path='/shop/:name'
          render={(routerProps) => (
            <CategoryPage {...routerProps} shop_data={SHOP_DATA} />
          )}
        ></Route>
      </Switch>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToprops)(App);
