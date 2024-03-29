import React, { FunctionComponent } from 'react';
import { Artist } from "../../models";
import { Link } from "react-router-dom";
import "./ArtistsList.css";

export const ArtistsList: FunctionComponent<{artists: Array<Artist>, firstLetter: string, searching: boolean}> = ({artists, firstLetter, searching}) => {
  if(artists.length === 0){
    if(searching) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Searching...</span>
          </div>
        </div>
      );
    } else {
      return <div className="text-center"><h6>Виконавців на букву "{firstLetter}" з перекладеними піснями не знайдено.</h6></div>;
    }
  }
  return (
    <>
      {artists.map((artist) => (
        <div key={artist.id}>
          <div className="artists-row">
              <div>
                <img src={artist.thumbnailUrl} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4 data-test="artist-name"><Link to={`/artists/${artist.id}`}>{artist.title}</Link></h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </>
  );
}