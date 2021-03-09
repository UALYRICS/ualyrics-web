import React, { FunctionComponent } from 'react';
import { Artist } from '../../models';
import { Link } from "react-router-dom";

export const ArtistComponent: FunctionComponent<{artist: Artist | undefined}> = ({artist}) => {
  const songs = artist?.songs?.map(song => (
    <li key={song?.id}><Link to={`/songs/${song?.id}`}>{song?.title}</Link></li>
  ));

  if(!artist) {
    return <></>;
  }

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