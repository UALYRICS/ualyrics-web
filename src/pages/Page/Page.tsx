import React, { FunctionComponent } from 'react';
import FirstLetterToolbar from '../../componenets/FirstLetterToolbar/FirstLetterToolbar';
import { Logo } from '../../componenets/Logo/Logo';
import { SearchBar } from '../../componenets/SearchBar/SearchBar';

export const Page: FunctionComponent<{}> = ({ children }) => (
  <>
    <div className="container full-width">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Logo />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <SearchBar />
        </div>
      </nav>
      <FirstLetterToolbar />
      {children}
    </div>
  </>
);