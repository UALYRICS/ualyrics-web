import React, { useState, useEffect, FunctionComponent } from "react";
import { searchGeniusSong } from '../../service/genius-service';
import { useLocation } from "react-router-dom";

import { LeftTitleSection } from "../../componenets/Decor/LeftTitleSection";
import { SongCard, SongCardsList } from "../../componenets/Song/SongCardsList";

export const SearchPage: FunctionComponent<{}> = () => {
  let query = useQuery();
  let searchTerm = query.get("searchTerm") || "";
  const [searchResults, setSearchResults] = useState<Array<SongCard>>([]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    function getData() {
      searchGeniusSong(searchTerm)
      .then(results => results.map(result => {
          return {
            title: result.title,
            icon: result.song_art_image_thumbnail_url,
            pageUrl: `/genius-songs/${result.id}`,
            artistTitle: result.primary_artist.name,
          } as SongCard
      } ))
      .then(results => setSearchResults(results));
    }
    getData();
  }, [searchTerm]);

  return (
    <>
      <LeftTitleSection title="Пісні"/>
      <SongCardsList songs={ searchResults } />
    </>
  );
};