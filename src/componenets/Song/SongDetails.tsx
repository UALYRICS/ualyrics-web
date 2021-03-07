import React, { FunctionComponent } from 'react';
import { Song } from '../../models';

export const SongDetails: FunctionComponent<{song: Song | undefined}> = ({song}) => {
  if(!song){
    return null;
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