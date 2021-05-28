import React from "react";
import useAuth from "./UseAuth";
import Auth from "@aws-amplify/auth";
import "./AuthStatus.css";

export const AuthStatus = () => {
  const { currentUser } = useAuth();

  return currentUser ? (
      <>
        <span className="circle ml-sm-2">{currentUser.attributes.name.split(' ').slice(0, 2).map(n => n.toUpperCase().substring(0, 1))}</span>
        <button className="btn btn-link btn-sm auth-button" type="submit" onClick={() => Auth.signOut()}>Вийти</button>
      </>
  ) : (
      <a className="btn btn-link btn-sm auth-button" href="/login">Увійти</a>
  );
}
