import React, { useState } from 'react';

import './Checkout.css';

const Checkout = (props) => {
  // let arr = [];
  // for (let i = 0; i < props.cartDetails.length; i++) {
  //   arr.push(props.cartDetails[i].name);
  // }

  // console.log(arr);

  // const [decQty, setDecQty] = useState(1);

  const obj = [
    ...new Map(
      props.cartDetails.map((item) => [JSON.stringify(item), item])
    ).values(),
  ];

  const incQty = () => {
    console.log('hi');
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
              <span onClick={incQty}>
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
