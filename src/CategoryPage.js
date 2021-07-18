import React from 'react';

import { connect } from 'react-redux';
import { addItem } from './redux/cart/cart.actions';

import './styles/CategoryPage.css';

const CategoryPage = (props) => {
  // mapping cart for the page
  let shopItems;
  for (let i = 0; i < props.shop_data.length; i++) {
    if (props.shop_data[i].routeName === props.match.params.name) {
      shopItems = [...props.shop_data[i].items];
    }
  }

  //sending item to global cart
  const handleItem = (name, image, price, id) => {
    const item = {
      name: name,
      image: image,
      price: price,
      id: id,
    };
    props.addItem(item);
    alert('Item Added');
  };

  return (
    <div className='Individual-category'>
      <h1 className='Category-heading'>{props.match.params.name}</h1>
      <div className='Individual-category-container'>
        {shopItems.map((i) => {
          return (
            <div
              key={i.id}
              style={{
                backgroundImage: `url(${i.imageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className='Category-item'
            >
              <div className='Category-details'>
                <h4>{i.name}</h4>
                <span>
                  <strong>{i.price}</strong>
                </span>
              </div>
              <button
                onClick={() => handleItem(i.name, i.imageUrl, i.price, i.id)}
              >
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const matchDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, matchDispatchToProps)(CategoryPage);
