import React, { useState, useEffect, FunctionComponent } from 'react';
import { Artist } from '../../models';
import { ArtistComponent } from './ArtistComponent';
import { getArtistById } from "../../service/artists-service";
import { useParams } from "react-router-dom";

export const ArtistPage : FunctionComponent<{}> = () => {
  let { artistId } = useParams();
  const [artist, setArtist] = useState<Artist>();

  useEffect(() => {
    async function getData() {
      try {
        const artistsData = await getArtistById(artistId);
        setArtist(artistsData);
      } catch (error) {
        console.error("Error fetching artists", error);
      }
    }
    getData();
  }, [artistId]);
  return (
    <ArtistComponent artist={artist}/>
  )
};