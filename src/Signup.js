import React, { useState } from 'react';

import { auth, createUserProfile } from './firebase/firebase.utils';
import './styles/Signup.css';
import { withRouter } from 'react-router';

const Signup = ({ history }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords donot match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, displayName);

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='Signup'>
      <h2>I donot have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>NAME</label>
          <input
            type='text'
            value={displayName}
            onChange={(evt) => setDisplayName(evt.target.value)}
          />
        </div>
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
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>CONFIRM PASSWORD</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(evt) => setConfirmPassword(evt.target.value)}
          />
        </div>
        <div className='buttons'>
          <button type='submit'>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Signup);
