import React, { FunctionComponent } from 'react';
import { Logo } from './Logo/Logo';
import { SearchBar } from './SearchBar';

export const TopToolbar: FunctionComponent<{}> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Logo />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <SearchBar />
    </div>
  </nav>
  );
}