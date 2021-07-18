import React from 'react';

import './styles/Authentication.css';
import Signin from './Signin';
import Signup from './Signup';

const Authentication = () => {
  return (
    <div className='Authentication'>
      <div className='Auth-signin'>
        <Signin />
      </div>
      <div className='Auth-register'>
        <Signup />
      </div>
    </div>
  );
};

export default Authentication;
