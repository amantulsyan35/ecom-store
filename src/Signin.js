import React, { useState } from 'react';

import { signInWithGoogle } from './firebase/firebase.utils';
import { auth } from './firebase/firebase.utils';
import { withRouter } from 'react-router';

import './styles/Signin.css';

const Signin = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('Unable to signin', error);
    }
    history.push('/');
  };

  return (
    <div className='Signin'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>EMAIL</label>
          <input
            type='email'
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>PASSWORD</label>
          <input
            type='password'
            onChange={(evt) => setPassword(evt.target.value)}
            value={password}
          />
        </div>
        <div className='buttons'>
          <button type='submit'>Sign In</button>
          <button type='button' onClick={signInWithGoogle}>
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Signin);
