import React, { FunctionComponent } from "react";
import { BrowseTools } from "../Page/BrowseTools";
import { RecentlyAdded } from "./RecentlyAdded/RecentlyAdded";

export const Home: FunctionComponent<{}> = () => {
  return (
    <>
      <BrowseTools />
      <RecentlyAdded/>
    </>
  );
}