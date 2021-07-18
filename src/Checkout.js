import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles/Checkout.css';

import { selectCurrentUser } from './redux/users/user.selectors';
import { selectCartItems } from './redux/cart/cart.selectors';
import {
  increaseQuantity,
  decreaseQuantity,
  clearItemFromCart,
} from './redux/cart/cart.actions';

const Checkout = ({
  currentUser,
  cartItems,
  clearItemFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  // calculating total price

  let arr = [];
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    arr.push(cartItems[i].price);
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (arr.length !== 0) {
    totalPrice = arr.reduce(reducer);
  }

  if (currentUser !== null) {
    return (
      <div className='Checkout'>
        <div className='Checkout-item-container'>
          {cartItems.map((c, idx) => {
            if (c.qty !== 0) {
              return (
                <div key={idx} className='Checkout-item'>
                  <div className='Checkout-image'>
                    <img alt={c.name} src={c.image} />
                  </div>
                  <h3>{c.name}</h3>
                  <span onClick={() => decreaseQuantity(c.id)}>
                    <i className='fas fa-chevron-left'></i>
                  </span>
                  <span>{c.qty}</span>
                  <span onClick={() => increaseQuantity(c.id)}>
                    <i className='fas fa-chevron-right'></i>
                  </span>
                  <span className='Checkout-price'>{c.price}</span>
                  <span onClick={() => clearItemFromCart(c.id)}>
                    <i className='fas fa-trash'></i>
                  </span>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        {totalPrice !== 0 ? (
          <h1 className='Checkout-total-price'>Total price: {totalPrice}</h1>
        ) : (
          <h1 className='Checkout-total-price'>Cart Empty :(</h1>
        )}
      </div>
    );
  } else {
    return (
      <h1 className='Checkout-total-price'>You Need To Sign-In First :(</h1>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  increaseQuantity: (item) => dispatch(increaseQuantity(item)),
  decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
