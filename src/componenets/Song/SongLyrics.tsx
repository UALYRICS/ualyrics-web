import React from 'react';
import { Song } from "../../models";

export const SongLyrics = ({song}: {song: Song}) => {
  const lines = song?.lyrics.map(line => (
    <div key={line?.number}>
      <div><b>{line?.original.length === 0 ? <br/> : line?.original}</b></div>
      <div>{line?.translation}</div>
    </div>
  ));
  return (
    <div>
      {lines}
    </div>
  );
}