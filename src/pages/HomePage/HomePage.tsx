import React, { FunctionComponent } from "react";
import { BrowseTools } from "../Page/BrowseTools";
import { RecentlyAdded } from "./RecentlyAdded/RecentlyAdded";
import useDocumentTitle from '../../utils/use-document-title';
import { AuthWrapper } from "../../componenets/Auth/AuthWrapper";
import { useQuery } from "../../utils/query-params";

export const Home: FunctionComponent<{}> = () => {
  useDocumentTitle('UALYRICS: переклади текстів пісень українською');

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