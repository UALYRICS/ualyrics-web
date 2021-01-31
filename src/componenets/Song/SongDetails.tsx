import React from 'react';

export const SongDetails = ({song}) => {
  return (
    <>
      <img src={song?.imageUrl} alt="Album cover" />
      <div><b>Title:</b></div>
      <div>{song?.title}</div>
      <br/>
      <div><b>By:</b></div>
      <div>{song?.artist?.title}</div>
    </>
  );
}