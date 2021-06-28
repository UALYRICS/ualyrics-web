import React, { FunctionComponent } from 'react';
import { Song } from '../../models';
import {Link} from "react-router-dom";

export const SongDetails: FunctionComponent<{song: Song | undefined}> = ({song}) => {
  if(!song){
    return null;
  }
  return (
    <>
      <img src={song.imageUrl} alt="Album cover" />
      <div><b>Title: </b><Link to={`/songs/${song.id}`}>{song.title}</Link></div>
      <div><b>Album: </b>{song.albumName}</div>
      <div><b>By: </b><Link to={`/artists/${song.artist?.id}`}>{song.artistName}</Link></div>
      <br/>
    </>
  );
}