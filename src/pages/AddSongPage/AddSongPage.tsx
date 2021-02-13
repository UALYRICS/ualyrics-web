import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { getGeniusSong } from '../../service/song-service';
import { Song } from '../../models';
import { withAuthenticator } from "@aws-amplify/ui-react";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const AddSongPage = () => {
  const geniusId = parseInt(useQuery().get("geniusId") || '');

  const [song, setSong] = useState<Song>();

  useEffect(() => {
    async function getData() {
      try {
        const songData = await getGeniusSong(geniusId);
        setSong(songData);
      } catch (error) {
        console.error("Error fetching lyrics or song", error);
      }
    }
    getData();
  }, [geniusId]);

  if(song){
    return <Redirect to={`/song/${song.id}`}/>;
  }
  return (
    <h2>Шукаємо текст пісні...</h2>
  );
}

export default withAuthenticator(AddSongPage);