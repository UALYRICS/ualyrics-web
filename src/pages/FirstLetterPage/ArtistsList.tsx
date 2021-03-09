import React, { FunctionComponent } from 'react';
import { Artist } from "../../models";
import { Link } from "react-router-dom";

export const ArtistsList: FunctionComponent<{artists: Array<Artist>}> = ({artists}) => {
  return (
    <>
      {artists.map((artist) => (
        <div key={artist.id}>
          <div className="row">
              <div>
                <img src={artist.thumbnailUrl} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4><Link to={`/artists/${artist.id}`}>{artist.title}</Link></h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </>
  );
}