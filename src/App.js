import React, { useState } from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import CategoryContainer from './CategoryContainer';
import CategoryPage from './CategoryPage';
import Checkout from './Checkout';
import SHOP_DATA from './shop.data';

const App = () => {
  const [uniCart, setUniCart] = useState([]);

  const addItem = (cart) => {
    setUniCart([...uniCart, cart]);
  };

  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <CategoryContainer />}></Route>
        <Route
          exact
          path='/shop/checkout'
          render={() => <Checkout cartDetails={uniCart} />}
        ></Route>
        <Route
          exact
          path='/shop/:name'
          render={(routerProps) => (
            <CategoryPage
              {...routerProps}
              shop_data={SHOP_DATA}
              handleCart={addItem}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
