import React, { FunctionComponent } from "react";
import { BrowseTools } from "../Page/BrowseTools";
import { RecentlyAdded } from "./RecentlyAdded/RecentlyAdded";
import useDocumentTitle from '../../utils/use-document-title';

export const Home: FunctionComponent<{}> = () => {
  useDocumentTitle('UALyrics: переклади текстів пісень');

  return (
    <>
      <BrowseTools />
      <RecentlyAdded/>
    </>
  );
}