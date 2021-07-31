import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import "./SongCardsList.css";

export interface SongCard {
  title: string,
  icon: string,
  pageUrl: string,
  artistTitle: string,
  artistPageUrl?: string
}

export const SongCardsList: FunctionComponent<{songs: Array<SongCard>}> = ({songs}) => {
  return (
    <div>
      {songs.map((song, idx) => {
        const artistTitle = song.artistPageUrl ? <Link to={song.artistPageUrl}>{song.artistTitle}</Link> : song.artistTitle;
        return (
            <div key={idx} className="song my-2 mr-2">
              <div>
                <img src={song.icon} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h6><Link to={song.pageUrl}>{song.title}</Link></h6>
                <h6>{artistTitle}</h6>
              </div>
            </div>
          )
        }
      )}
    </div>
  );
}