import React, { useState } from 'react';

import './Checkout.css';

const Checkout = (props) => {
  const [checkout, setCheckout] = useState([]);

  const [qty, setQty] = useState(1);

  const obj = [
    ...new Map(
      props.cartDetails.map((item) => [JSON.stringify(item), item])
    ).values(),
  ];

  const incQty = (id, delta) => {
    setCheckout(
      obj.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
    );
  };

  return (
    <div className='Checkout'>
      <div className='Checkout-item-container'>
        {obj.map((c) => {
          return (
            <div key={c.id} className='Checkout-item'>
              <div className='Checkout-image'>
                <img alt={c.name} src={c.image} />
              </div>
              <h3>{c.name}</h3>
              <span>
                <i className='fas fa-chevron-left'></i>
              </span>
              <span>{c.qty}</span>
              <span onClick={() => incQty(c.id, 1)}>
                <i className='fas fa-chevron-right'></i>
              </span>
              <span className='Checkout-price'>{c.price}</span>
              <span>
                <i className='fas fa-trash'></i>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
