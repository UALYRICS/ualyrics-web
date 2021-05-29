import React, { useState, useEffect, FunctionComponent } from "react";
import { searchGeniusSong } from '../../service/genius-service';
import { useLocation } from "react-router-dom";
import { GeniusSongEntry } from "../../models";
import { BrowseTools } from "../Page/BrowseTools";
import { GeniusSongsList } from "./GeniusSongsList";

import './SearchPage.css';
import { RightTitleSection } from "../../componenets/Decor/RightTitleSection";

export const SearchPage: FunctionComponent<{}> = () => {
  let query = useQuery();
  let searchTerm = query.get("searchTerm") || "";
  const [searchResults, setSearchResults] = useState<Array<GeniusSongEntry>>([]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    function getData() {
      searchGeniusSong(searchTerm).then(results => setSearchResults(results));
    }
    getData();
  }, [searchTerm]);

  return (
    <>
      <BrowseTools />
      <RightTitleSection title="Пісні"/>
      <GeniusSongsList geniusSongs={ searchResults } />
    </>
  );
};