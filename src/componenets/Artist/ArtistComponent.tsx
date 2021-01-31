import React from 'react';
import { Artist } from '../../models';
import {Link} from "react-router-dom";

export const ArtistComponent = ({artist}: {artist: Artist | undefined}) => {
  const songs = artist?.songs?.map(song => (
    <li key={song?.id}><Link to={`/song/${song?.id}`}>{song?.title}</Link></li>
  ));
  return (
    <>
      <div>Name: {artist?.title}</div>
      <div>
        <ul>
          {songs}
        </ul>
      </div>
    </>
  )
};