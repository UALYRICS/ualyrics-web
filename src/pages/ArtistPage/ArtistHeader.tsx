import React, { FunctionComponent } from "react";
import { Artist } from '../../models';
import {Link} from "react-router-dom";

import "./ArtistHeader.css";

export const ArtistHeader: FunctionComponent<{artist: Artist}> = ({artist}) => {
  return (
    <>
      <div className="details-block">
        <img className="image" src={artist.thumbnailUrl} alt="Album cover" />
        <div className="details">
          <div className="title"><Link to={`/artists/${artist.id}`}>{artist.title}</Link></div>
        </div>
      </div>
      <div className="clear"></div>
    </>
  );
};