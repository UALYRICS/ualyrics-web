import React, { FunctionComponent } from 'react';
import { Artist } from "../../models";
import { Link } from "react-router-dom";
import "./ArtistsList.css";

export const ArtistsList: FunctionComponent<{artists: Array<Artist>, firstLetter: string}> = ({artists, firstLetter}) => {
  console.log("artists:", artists);
  if(artists.length === 0){
    return <div id="artists-list"><h6>Виконавців з перекладеними піснями на букву "{firstLetter}" не знайдено.</h6></div>;
  }
  return (
    <div id="artists-list">
      {artists.map((artist) => (
        <div key={artist.id}>
          <div className="artists-row">
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
    </div>
  );
}