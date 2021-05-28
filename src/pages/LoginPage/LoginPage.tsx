import React from 'react';
import './LoginPage.css';
import { AuthPiece } from 'aws-amplify-react';
import { IAuthPieceProps, IAuthPieceState } from 'aws-amplify-react/lib-esm/Auth/AuthPiece';
import { UaLyricsAuthenticator } from '../../componenets/Auth/UaLyricsAuthenticator';

export class LoginPage extends AuthPiece<IAuthPieceProps, IAuthPieceState> {

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