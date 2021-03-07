import React, { FunctionComponent } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from '../pages/HomePage/HomePage';
import { FirstLetterPage } from '../pages/FirstLetterPage/FirstLetterPage';
import { Page } from '../pages/Page/Page';
import { SearchPage } from '../pages/SearchPage/SearchPage';
import { SongPage } from '../pages/SongPage/SongPage';
import { GeniusSongPage} from '../pages/GeniusSongPage/GeniusSongPage';
import { ArtistPage } from '../pages/ArtistPage/ArtistPage';

export const App: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page>
            <Home />
          </Page>
        </Route>
        <Route exact path="/find">
          <Page>
            <SearchPage />
          </Page>
        </Route>
        <Route path="/song/:songId">
          <Page>
            <SongPage />
          </Page>
        </Route>
        <Route path="/genius-song/:songId">
          <Page>
            <GeniusSongPage />
          </Page>
        </Route>
        <Route path="/artist/:artistId">
          <Page>
            <ArtistPage />
          </Page>
        </Route>
        <Route path="/:firstLetter">
          <Page>
            <FirstLetterPage />
          </Page>
        </Route>
      </Switch>
    </Router>
  );
}
