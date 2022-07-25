
import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css";

export const Footer: FunctionComponent<{}> = () => {
  return (
    <div className="footer navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
      <div className="container full-width">
        <div className="mr-auto"></div>
        <div className="float-right">
          <div>
            <a className="btn btn-light" href="https://web.facebook.com/ualyrics" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a className="btn btn-light" href="https://www.instagram.com/ualyrics" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="btn btn-light" href="https://www.youtube.com/channel/UC4ZJ9_PPMl7zDfq4C3QQVWQ" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <div>@2022 UALYRICS</div>
        </div>
      </div>
    </div>
  );
}
