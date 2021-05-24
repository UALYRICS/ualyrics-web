import React, { useState, useEffect, FunctionComponent } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getGeniusSong } from '../../service/song-service';
import { Song } from '../../models';

export const GeniusSongPage: FunctionComponent<{}> = () => {
  let { songId } = useParams<{songId: string}>();
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    async function getData() {
      const songData = await getGeniusSong(parseInt(songId));
      setSong(songData);
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