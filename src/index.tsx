import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App/App';
import reportWebVitals from './reportWebVitals';
import Amplify, { Hub } from 'aws-amplify'
import config from './aws-exports'

config.oauth.redirectSignIn = `${window.location.origin}/`;
config.oauth.redirectSignOut = `${window.location.origin}/`;

Amplify.configure(config);

// Workaround for: https://github.com/aws-amplify/amplify-js/issues/7081
Hub.listen('auth', ({ payload: { event } }) => {
  if(event === 'cognitoHostedUI'){
    console.log('Applying redirect from hosted ui patch.');
    localStorage.setItem('amplify-redirected-from-hosted-ui','false');
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
