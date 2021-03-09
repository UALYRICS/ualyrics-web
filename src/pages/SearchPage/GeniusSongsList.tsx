import React, { FunctionComponent } from 'react';
import { GeniusSongEntry } from '../../models';
import { Link } from 'react-router-dom';

export const GeniusSongsList: FunctionComponent<{geniusSongs: Array<GeniusSongEntry>}> = ({geniusSongs}) => {
  return (
    <div>
      {geniusSongs.map(song => (
        <div key={song.id}>
          <div className="myrow">
              <div>
                <img src={song.song_art_image_thumbnail_url} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4><Link to={`/genius-songs/${song.id}`}>{song.title}</Link></h4>
                <h4>{song.primary_artist?.name}</h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
}