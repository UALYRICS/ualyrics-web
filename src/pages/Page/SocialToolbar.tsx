import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faPatreon } from "@fortawesome/free-brands-svg-icons";

export const SocialToolbar: FunctionComponent<{}> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded mb-2">
      <div className="mr-auto"></div>
      <div className="mr-auto"><small>Слідкуйте за нами у соціальних мережах!</small></div>
      <div className="float-right">
        <a className="btn btn-light" href="https://facebook.com/ualyrics" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a className="btn btn-light" href="https://www.instagram.com/ualyrics" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="btn btn-light" href="https://www.youtube.com/channel/UC4ZJ9_PPMl7zDfq4C3QQVWQ" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a className="btn btn-light" href="https://www.patreon.com/ualyrics" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faPatreon} />
        </a>
      </div>
    </nav>
  );
}