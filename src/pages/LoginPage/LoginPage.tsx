import React from 'react';

import { SignInWithFacebook } from './FacebookSignIn';
import { SignInWithGoogle } from './GoogleSignIn';
import { UaLyricsSignIn } from './UaLyricsSignIn';
import './LoginPage.css';
import { AuthPiece } from 'aws-amplify-react';
import { IAuthPieceProps, IAuthPieceState } from 'aws-amplify-react/lib-esm/Auth/AuthPiece';

export class LoginPage extends AuthPiece<IAuthPieceProps, IAuthPieceState> {

  render() {
    if (!['signIn', 'signedOut', 'signedUp'].includes(this.props.authState!)) {
      return <></>;
    }
    return (
      <div className="row">
        <div className="col-12 col-lg-6 my-auto">
          <h3 className="left-block-title">UALYRICS</h3>
          <p className="left-block-text">Найамбітніший проект з перекладу текстів пісень українською!</p>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title float-right">
                <hr className="horizontal-line fat-line" />
                <h5 className="card-title-text">Увійти</h5>
              </div>
              <div className="social-button"><SignInWithGoogle /></div>
              <div className="social-button"><SignInWithFacebook /></div>
              <div className="or-block">
                <span className="alignleft"><hr className="horizontal-line slim-line"/></span>
                <span className="aligncenter"><h6>або</h6></span>
                <span className="alignright"><hr className="horizontal-line slim-line"/></span>
              </div>
              <UaLyricsSignIn onStateChange={this.props.onStateChange!} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};