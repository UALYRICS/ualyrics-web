import React, { FunctionComponent } from 'react';

import { SignInWithFacebook } from './FacebookSignIn';
import { SignInWithGoogle } from './GoogleSignIn';
import { UaLyricsSignIn } from './UaLyricsSignIn';
import './LoginPage.css';

export const LoginPage : FunctionComponent<{}> = () => {

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
            <UaLyricsSignIn/>
          </div>
        </div>
      </div>
    </div>
  );
};