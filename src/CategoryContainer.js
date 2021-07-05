import React from 'react';

import './CategoryContainer.css';

import { Link } from 'react-router-dom';

const CategoryContainer = () => {
  return (
    <div className='Category'>
      <div className='Category-container1'>
        <div className='Category-type1'>
          <div className='Category-name'>
            <Link to='/shop/hats'>
              <h3>HATS</h3>
            </Link>
          </div>
        </div>
        <div className='Category-type2'>
          <div className='Category-name'>
            <Link to='/shop/jackets'>
              <h3>JACKETS</h3>
            </Link>
          </div>
        </div>
        <div className='Category-type3'>
          <div className='Category-name'>
            <Link to='/shop/sneakers'>
              <h3>SNEAKERS</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className='Category-container2'>
        <div className='Category-type4'>
          <div className='Category-name'>
            <Link to='/shop/womens'>
              <h3>WOMENS</h3>
            </Link>
          </div>
        </div>
        <div className='Category-type5'>
          <div className='Category-name'>
            <Link to='/shop/mens'>
              <h3>MENS</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
