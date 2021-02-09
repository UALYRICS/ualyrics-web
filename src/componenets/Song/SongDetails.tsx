import React from 'react';
import { Song } from '../../models';

export const SongDetails = ({song}: {song?: Song}) => {
  if(!song){
    return <>Підтягуємо текст пісні...</>;
  }
  return (
    <>
      <img src={song.imageUrl} alt="Album cover" />
      <div><b>Title:</b></div>
      <div>{song.title}</div>
      <br/>
      <div><b>By:</b></div>
      <div>{song.artist?.title}</div>
    </>
  );
}