import React from 'react';
import { Song } from "../../models";

export const SongLyrics = ({song}: {song: Song}) => {
  return (
    <div>
      {song?.lyrics}
    </div>
  );
}