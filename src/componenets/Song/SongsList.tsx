import React from 'react';
import { Song } from "../../models";
import {Link} from "react-router-dom";
import './SongsList.css';

export const SongsList = ({songs}: {songs: Array<Song>}) => {
  return (
    <div>
      {songs.map(song => (
        <div key={song.id}>
          <div className="row">
              <div>
                <img src={song.imageUrl} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4><Link to={`/song/${song.id}`}>{song.title}</Link></h4>
                <h4>{song.artist?.title}</h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
}