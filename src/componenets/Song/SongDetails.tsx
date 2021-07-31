import React, { FunctionComponent } from 'react';
import { Song } from '../../models';
import {Link} from "react-router-dom";
import "./SongDetails.css";

export const SongDetails: FunctionComponent<{song: Song }> = ({song}) => {
  if(!song){
    return null;
  }
  return (
    <>
      <div className="song-details-block">
        <img className="song-image" src={song.imageUrl} alt="Album cover" />
        <div className="song-details">
          <div className="song-title"><Link to={`/songs/${song.id}`}>{song.title}</Link></div>
          <div className="artist-title"><Link to={`/artists/${song.artist?.id}`}>{song.artistName}</Link></div>
        </div>
      </div>
      <div className="clear"></div>
    </>
  );
}