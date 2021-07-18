import React from 'react';
import SHOP_DATA from './data/shop.data';

import { Link } from 'react-router-dom';

import './styles/Shop.css';

const Shop = () => {
  return (
    <div className='Shop'>
      <h1 className='Shop-heading'>COLLECTIONS</h1>
      {SHOP_DATA.map((s) => {
        return (
          <div key={s.id} className='Shop-container'>
            <h3>{s.title}</h3>
            <div className='Shop-item-container'>
              {s.items
                .filter((i, idx) => idx < 4)
                .map((i, idx) => {
                  return (
                    <div
                      style={{
                        backgroundImage: `url(${i.imageUrl})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                      className='Shop-items'
                      key={idx}
                    >
                      <div className='Shop-items-details'>
                        <h4>{i.name}</h4>
                      </div>
                      <Link to={`/shop/${s.title.toLowerCase()}`}>
                        <button>PREVIEW</button>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
