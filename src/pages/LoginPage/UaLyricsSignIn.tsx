import React, { FunctionComponent, useState } from 'react';
import { Auth } from "aws-amplify";

export const UaLyricsSignIn: FunctionComponent<{}> = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(event) {
    event.preventDefault();
    Auth.signIn({ username, password })
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };

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
        <div className="text-center"><small style={{color: 'black'}}>Я забув пароль</small></div>
      </div>
      <button type="submit" onClick={handleSignIn} className="btn btn-light form-control">Увійти</button>
    </form>
  );
};