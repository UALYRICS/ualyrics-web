import React from 'react';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import useAuth from './UseAuth';

export const AuthWrapper = ({children}) => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <>{children}</>
  ) : (
    <LoginPage/>
  );
};