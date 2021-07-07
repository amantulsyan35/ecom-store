import React, { useState } from 'react';

import './Checkout.css';

const Checkout = ({ cartDetails }) => {
  const [cart, setCheckoutCart] = useState(cartDetails);

  const incQty = (id, delta, price) => {
    const filter = cart.map((i) =>
      i.id === id
        ? { ...i, qty: i.qty + delta, price: i.price + price / i.qty }
        : i
    );
    setCheckoutCart(filter);
  };

  const decQty = (id, delta, price) => {
    const filter = cart.map((i) =>
      i.id === id
        ? { ...i, qty: i.qty + delta, price: i.price - price / i.qty }
        : i
    );
    setCheckoutCart(filter);
  };

  const delItem = (id) => {
    const filter = cart.filter((item) => item.id !== id);
    setCheckoutCart(filter);
  };

  let arr = [];
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    arr.push(cart[i].price);
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (arr.length !== 0) {
    totalPrice = arr.reduce(reducer);
  }
  return (
    <div className='Checkout'>
      <div className='Checkout-item-container'>
        {cart.map((c, idx) => {
          return (
            <div key={idx} className='Checkout-item'>
              <div className='Checkout-image'>
                <img alt={c.name} src={c.image} />
              </div>
              <h3>{c.name}</h3>
              <span onClick={() => decQty(c.id, -1, c.price)}>
                <i className='fas fa-chevron-left'></i>
              </span>
              <span>{c.qty}</span>
              <span onClick={() => incQty(c.id, 1, c.price)}>
                <i className='fas fa-chevron-right'></i>
              </span>
              <span className='Checkout-price'>{c.price}</span>
              <span onClick={() => delItem(c.id)}>
                <i className='fas fa-trash'></i>
              </span>
            </div>
          );
        })}
      </div>
      {totalPrice !== 0 ? (
        <h1 className='Checkout-total-price'>Total price: {totalPrice}</h1>
      ) : (
        <h1 className='Checkout-total-price'>Cart Empty :(</h1>
      )}
    </div>
  );
};

export default Checkout;
