import React, { useState, useEffect, FunctionComponent } from "react";
import { useLocation, Redirect, useParams } from "react-router-dom";
import { getGeniusSong } from '../../service/song-service';
import { Song } from '../../models';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export const GeniusSongPage: FunctionComponent<{}> = () => {
  let { songId } = useParams();
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    async function getData() {
      try {
        const songData = await getGeniusSong(songId);
        setSong(songData);
      } catch (error) {
        console.error("Error fetching lyrics or song", error);
      }
    }
    getData();
  }, [songId]);

  if(song){
    return <Redirect to={`/songs/${song.id}`}/>;
  }
  return (
    <h4>Шукаємо текст пісні...</h4>
  );
}