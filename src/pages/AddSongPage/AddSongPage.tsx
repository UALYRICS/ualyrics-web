import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getGeniusSong } from '../../service/song-service';
import { Song } from '../../models';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { SongDetails } from "../../componenets/Song/SongDetails";
import "../SongPage/SongPage.css";

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

  return (
    <>
      <SongDetails song={song} />
      <br/>
      <div><b>Lyrics:</b></div>
      <p>{song?.lyrics}</p>
    </>
  );
}

export default withAuthenticator(AddSongPage);