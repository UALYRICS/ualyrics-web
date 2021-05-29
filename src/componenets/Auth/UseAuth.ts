import Auth from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import { useEffect, useState } from "react";

export interface CognitoUser {
  attributes: {
    name: string,
  },
  username: string,
}

export interface UseAuthHookResponse {
  currentUser: CognitoUser | null;
  signIn: () => void;
  signOut: () => void;
}

const getCurrentUser = async (): Promise<CognitoUser | null> => {
  try {
    return await Auth.currentAuthenticatedUser();
  } catch {
    // currentAuthenticatedUser throws an Error if not signed in
    return null;
  }
};

const useAuth = (): UseAuthHookResponse => {
  const [currentUser, setCurrentUser] = useState<CognitoUser | null>(null);

  useEffect(() => {
    const updateUser = async () => {
      setCurrentUser(await getCurrentUser());
    };
    Hub.listen("auth", updateUser); // listen for login/signup events
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove("auth", updateUser);
  }, []);

  const signIn = () => Auth.federatedSignIn();

  const signOut = () => Auth.signOut();

  return { currentUser, signIn, signOut };
};

export default useAuth;

export { getCurrentUser };