import React, { useState, useEffect } from 'react';
import { Artist } from '../../models';
import { ArtistComponent } from '../../componenets/Artist/ArtistComponent';
import { getArtistById } from "../../service/artists-service";
import { useParams } from "react-router-dom";

export const ArtistPage = () => {
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