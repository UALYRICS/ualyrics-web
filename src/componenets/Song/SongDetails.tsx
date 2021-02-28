import React from 'react';
import { Song } from '../../models';

export const SongDetails = ({song}: {song?: Song}) => {
  if(!song){
    return <>Підтягуємо текст пісні...</>;
  }
  return (
    <>
      <img src={song.imageUrl} alt="Album cover" />
      <div><b>Title:</b> {song.title}</div>
      <div><b>Album:</b> {song.albumName}</div>
      <div><b>By:</b> {song.artistName}</div>
      <br/>
    </>
  );
}