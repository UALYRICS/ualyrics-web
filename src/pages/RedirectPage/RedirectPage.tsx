import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router';
import { useCookies } from 'react-cookie';

export const RedirectPage: FunctionComponent<{}> = () => {
  const [cookies, setCookie] = useCookies(['login_redirect_url']);
  const redirectUrl = cookies.login_redirect_url || '/';

  // We set TTL on cookie instead of calling removeCookie,
  // because it re-renders component and results in a wrong redirect.
  setCookie('login_redirect_url', redirectUrl, { path: '/', maxAge: 10 });

  return (<Redirect to={redirectUrl} />);
}