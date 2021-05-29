import React, { useState, useEffect, FunctionComponent } from "react";
import { Artist } from "../../models";
import { fetchArtistsByFirstLetter } from "../../service/artists-service";
import { Char } from "../../models/char";
import { useParams } from "react-router-dom";
import { BrowseTools } from "../Page/BrowseTools";

import { ArtistsList } from "./ArtistsList";
import { RightTitleSection } from "../../componenets/Decor/RightTitleSection";

export const FirstLetterPage: FunctionComponent<{}> = () => {
  let { firstLetter } = useParams<{firstLetter: string}>();
  const [artists, setArtists] = useState<Array<Artist>>([]);

  useEffect(() => {
    async function getData() {
      try {
        const artistsData = await fetchArtistsByFirstLetter(new Char(firstLetter));
        setArtists(artistsData);
      } catch (error) {
        console.error("Error fetching artists", error);
      }
    }
    getData();
  }, [firstLetter]);

  return (
    <>
      <BrowseTools />
      <RightTitleSection title="Виконавці"/>
      <ArtistsList artists={ artists } />
    </>
  );
};