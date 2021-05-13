import React, { FunctionComponent, useState } from 'react';
import { Auth } from "aws-amplify";

export const UaLyricsSignIn: FunctionComponent<{onStateChange: (state: string, data?: any) => void;}> = ({onStateChange}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(event) {
    event.preventDefault();

    Auth.signIn({ username, password })
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

  function handleSignUp(event){
    event.preventDefault();

    onStateChange('signUp');
  }

  return (
    <form className="authentication__form">
      <div className="form-group">
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Імя користувача"
          onChange={(event) => setUsername(event.target.value)}
          className="form-control"
        />
      </div>
      
      <div className="form-group">
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          onChange={(event) => setPassword(event.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" onClick={handleSignIn} className="btn btn-light form-control">Увійти</button>
      <button type="submit" onClick={handleSignUp} className="btn btn-light form-control">Зареєструватися</button>
    </form>
  );
};