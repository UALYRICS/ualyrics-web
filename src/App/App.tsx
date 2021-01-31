import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/HomePage/HomePage';
import { BrowseArtists } from '../pages/BrowseArtistsPage/BrowseArtistsPage';
import { Page } from '../pages/Page/Page';
import { SearchPage } from '../pages/SearchPage/SearchPage';
import { SongPage } from '../pages/SongPage/SongPage';
import AddSongPage from '../pages/AddSongPage/AddSongPage';

function App() {
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
        <Route path="/song">
          <Page>
            <AddSongPage />
          </Page>
        </Route>
        <Route path="/song/:id">
          <Page>
            <SongPage />
          </Page>
        </Route>
        <Route path="/:firstLetter">
          <Page>
            <BrowseArtists />
          </Page>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
