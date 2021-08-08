import React, { FunctionComponent } from 'react';
import { Song } from '../../models';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faSoundcloud } from "@fortawesome/free-brands-svg-icons"

import "./SongDetails.css";

export const SongDetails: FunctionComponent<{song: Song }> = ({song}) => {
  if(!song){
    return null;
  }
  let youtubeButton;
  if(song.youtubeLink) {
    youtubeButton = (
      <a className="btn btn-outline-light mr-1" href={song.youtubeLink} target="_blank" rel="noreferrer">  
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    );
  }

  let spotifyButton;
  if(song.spotifyLink) {
    spotifyButton = (
      <a className="btn btn-outline-light mr-1" href={song.spotifyLink} target="_blank" rel="noreferrer">  
        <FontAwesomeIcon icon={faSpotify} />
      </a>
    );
  }

  let soundcloudButton;
  if(song.soundcloudLink) {
    soundcloudButton = (
      <a className="btn btn-outline-light mr-1" href={song.soundcloudLink} target="_blank" rel="noreferrer">  
        <FontAwesomeIcon icon={faSoundcloud} />
      </a>
    );
  }

  return (
    <>
      <div className="song-details-block">
        <img className="song-image" src={song.imageUrl} alt="Album cover" />
        <div className="song-details">
          <div className="song-title"><Link to={`/songs/${song.id}`}>{song.title}</Link></div>
          <div className="artist-title"><Link to={`/artists/${song.artist?.id}`}>{song.artistName}</Link></div>
          <div className="mt-2">
            {youtubeButton}{spotifyButton}{soundcloudButton}
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </>
  );
}