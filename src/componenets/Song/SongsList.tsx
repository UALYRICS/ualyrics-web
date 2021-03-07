import React from 'react';
import { Song } from "../../models";
import {Link} from "react-router-dom";
import './SongsList.css';

export const SongsList = ({songs}: {songs: Array<Song>}) => {

  return (
    <>
      {songs.map((song, idx) => (
        <div key={idx} className="row mt-3 ">
          <div className="col-sm-5 bg-light">
            <div>
              <img src={song.imageUrl} className='icon' alt="Song thumbnail" />
            </div>	
            <div className="left-margin">
              <h6><Link to={`/song/${song.id}`}>{song.title}</Link></h6>
              <h6>by {song.artistName}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}