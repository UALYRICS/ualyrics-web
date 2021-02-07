import React from 'react';
import { Song } from "../../models";
import "./SongLyrics.css";

export const SongLyrics = ({song}: {song?: Song}) => {
  if(!song){
    return <></>;
  }

  return (
    <p className="lyrics">
      {song.lyrics}
    </p>
  );
}