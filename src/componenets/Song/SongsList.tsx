import React from 'react';
import { Song } from "../../models";
import {Link} from "react-router-dom";
import './SongsList.css';

export const SongsList = ({songs}: {songs: Array<Song>}) => {

  const rows = songs.reduce(function (rows, key, index) { 
    return (index % 2 === 0 ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows;
  }, [] as any);

  return (
    <>
      {rows.map((result, idx) => (
        <div key={idx} className="row mt-3 ">
          <div className="col-sm-5 bg-light">
            <div>
              <img src={result[0].imageUrl} className='icon' alt="Song thumbnail" />
            </div>	
            <div className="left-margin">
              <h6><Link to={`/song/${result[0].id}`}>{result[0].title}</Link></h6>
              <h4>{result[0].artist?.title}</h4>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2 bg-light">
            <div>
              <img src={result[1].imageUrl} className='icon' alt="Song thumbnail" />
            </div>	
            <div className="left-margin">
              <h6><Link to={`/song/${result[1].id}`}>{result[1].title}</Link></h6>
              <h6>{result[1].artist?.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}