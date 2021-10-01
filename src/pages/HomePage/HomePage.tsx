import React, { FunctionComponent } from "react";
import { BrowseTools } from "../Page/BrowseTools";
import { RecentlyAdded } from "./RecentlyAdded/RecentlyAdded";
import useDocumentTitle from '../../utils/use-document-title';
import { useLocation } from "react-router-dom";
import { AuthWrapper } from "../../componenets/Auth/AuthWrapper";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Home: FunctionComponent<{}> = () => {
  useDocumentTitle('UALyrics: переклади текстів пісень українською');

  const query = useQuery();
  
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