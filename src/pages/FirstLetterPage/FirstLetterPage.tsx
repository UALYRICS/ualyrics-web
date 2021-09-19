import React, { useState, useEffect, FunctionComponent } from "react";
import { Artist } from "../../models";
import { fetchArtistsByFirstLetter } from "../../service/browse-service";
import { Char } from "../../models/char";
import { useParams } from "react-router-dom";
import { BrowseTools } from "../Page/BrowseTools";

import { ArtistsList } from "./ArtistsList";
import { RightTitleSection } from "../../componenets/Decor/RightTitleSection";
import useDocumentTitle from '../../utils/use-document-title';

export const FirstLetterPage: FunctionComponent<{}> = () => {
  let { firstLetter } = useParams<{firstLetter: string}>();
  const [artists, setArtists] = useState<Array<Artist>>([]);
  const [searching, setSearching] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      document.getElementById('artists-list')?.scrollIntoView();
      setSearching(true);
      const artistsData = await fetchArtistsByFirstLetter(new Char(firstLetter));
      setArtists(artistsData);
    }
    getData().then(() => setSearching(false));
  }, [firstLetter]);

  useDocumentTitle(`${firstLetter || ''} | виконавці за першою літерою | UALYRICS`);

  return (
    <>
      <BrowseTools />
      <RightTitleSection title="Виконавці"/>
      <div id="artists-list"></div>
      <ArtistsList artists={ artists } firstLetter={ firstLetter } searching={ searching }/>
    </>
  );
};