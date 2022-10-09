import React, { FunctionComponent } from "react";
import { BrowseTools } from "../Page/BrowseTools";
import { RecentlyAdded } from "./RecentlyAdded/RecentlyAdded";
import useDocumentTitle from '../../utils/use-document-title';
import { AuthWrapper } from "../../componenets/Auth/AuthWrapper";
import { useQuery } from "../../utils/query-params";
import { useCookies } from 'react-cookie';

export const Home: FunctionComponent<{}> = () => {
  useDocumentTitle('UALYRICS: переклади текстів пісень українською');

  const query = useQuery();
  const [cookies, setCookie] = useCookies(['login_redirect_url']);
  const redirectUrl = cookies.login_redirect_url;

  if(redirectUrl) {
    // We set TTL on cookie instead of calling removeCookie,
    // because it re-renders component and results in a wrong redirect.
    setCookie('login_redirect_url', redirectUrl, { path: '/', maxAge: 10 });

    if(!query.has('login') && redirectUrl !== '/'){
      window.location.href = redirectUrl;
    }
  }
  
  const homeBody = (
    <>
      <BrowseTools />
      <RecentlyAdded/>
    </>
  );

  if(query.has('login')){
    return (
      <AuthWrapper>
        {homeBody}
      </AuthWrapper>
    )
  }

  return homeBody;
}