import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
// To federated sign in from Facebook

declare global {
    interface Window {
        FB:any;
        fbAsyncInit:any;
    }
}

export const SignInWithFacebook = () => {

    useEffect(() => {
        if (!window.FB) createScript();
    }, [])

    const signIn = () => {
        const fb = window.FB;
        fb.getLoginStatus(response => {
            if (response.status === 'connected') {
                getAWSCredentials(response.authResponse);
            } else {
                fb.login(
                    response => {
                        if (!response || !response.authResponse) {
                            return;
                        }
                        getAWSCredentials(response.authResponse);
                    },
                    {
                        // the authorized scopes
                        scope: 'public_profile,email'
                    }
                );
            }
        });
    }

    const getAWSCredentials = (response) => {
            const { accessToken, expiresIn } = response;
            const date = new Date();
            const expires_at = expiresIn * 1000 + date.getTime();
            if (!accessToken) {
                return;
            }

            const fb = window.FB;
            fb.api('/me', { fields: 'name,email' }, response => {
                const user = {
                    name: response.name,
                    email: response.email
                };

                Auth.federatedSignIn('facebook', { token: accessToken, expires_at }, user);
            });
        }

    const createScript = () => {
        // load the sdk
        window.fbAsyncInit = fbAsyncInit;
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        script.async = true;
        script.onload = initFB;
        document.body.appendChild(script);
    }

    const initFB = () => {
        const fb = window.FB;
        console.log('FB SDK initialized');
    }

    const fbAsyncInit = () => {
        // init the fb sdk client
        const fb = window.FB;
        fb.init({
            appId   : process.env.REACT_APP_FACEBOOK_CLIENT_ID,
            cookie  : true,
            xfbml   : true,
            version : 'v2.11'
        });
    }

    return (
        <button onClick={signIn} className="btn btn-light form-control"><FontAwesomeIcon icon={faFacebook} style={{marginRight: '5px'}}/>Продовжити з Facebook</button>
    );
}