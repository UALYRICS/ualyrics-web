import React from 'react';
import './LoginPage.css';
import { UaLyricsAuthenticator } from '../../componenets/Auth/UaLyricsAuthenticator';

export class LoginPage extends React.Component {

  render() {
    return (
      <div className="row">
      <div className="col-12 col-lg-6 my-auto">
        <h3 className="left-block-title">UALYRICS</h3>
        <p className="left-block-text">Найамбітніший проект з перекладу текстів пісень українською!</p>
      </div>
      <div className="col-12 col-lg-6">
        <UaLyricsAuthenticator/>
      </div>
    </div>
    );
  }
};