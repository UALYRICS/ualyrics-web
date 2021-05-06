import React, { FunctionComponent, useState } from 'react';
import { Auth } from "aws-amplify";
import { SignInWithFacebook } from './FacebookSignIn';
import { SignInWithGoogle } from './GoogleSignIn';

export const LoginPage : FunctionComponent<{}> = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(event) {
    event.preventDefault();
    Auth.signIn({ username, password })
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

  return (
    <>
      
      <form className="authentication__form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Імя користувача</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Пароль</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" onClick={handleSignIn} className="btn btn-primary">Увійти</button>
      </form>
      <div>
        <SignInWithFacebook />
      </div>
      <div>
        <SignInWithGoogle />
      </div>
    </>
  );
};