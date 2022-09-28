import React from 'react';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import useAuth from './UseAuth';
import { useCookies } from 'react-cookie';
import { useQuery } from "../../utils/query-params";
import { useLocation } from 'react-router-dom';

export const AuthWrapper = ({children}) => {
  const { currentUser } = useAuth();
  const path = useLocation().pathname;
  const nonRootPath = path === '/' ? null : path;
  const [ cookies, setCookie ] = useCookies(['login_redirect_url']);
  const redirectUrl =  useQuery().get('redirectUrl') || nonRootPath || '/';

  let result: any;
  if(currentUser) {
    result = (<>{children}</>);
  } else {
    setCookie('login_redirect_url', redirectUrl, { path: '/', maxAge: 3600 });
    result = <LoginPage />;
  }

  return result;
};