import React, { useState } from 'react';
import './CategoryPage.css';

const CategoryPage = (props) => {
  const [cart, setCart] = useState([]);

  let shopItems;
  for (let i = 0; i < props.shop_data.length; i++) {
    if (props.shop_data[i].routeName === props.match.params.name) {
      shopItems = [...props.shop_data[i].items];
    }
  }

  const addToCart = (name, image, price, id) => {
    const item = {
      name: name,
      image: image,
      price: price,
      id: id,
      qty: 1,
    };
    setCart([...cart, item]);
    props.handleCart(item);
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
                onClick={() =>
                  // clickCount(i.id, i.name);
                  addToCart(i.name, i.imageUrl, i.price, i.id)
                }
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

export default CategoryPage;
