import React from 'react';
import {
    useParams
  } from "react-router-dom";

function BrowseArtists() {
  let { firstLetter } = useParams();

  return (
    <div>
      <h3>First Letter: {firstLetter}</h3>
    </div>
  );
}

export default BrowseArtists;