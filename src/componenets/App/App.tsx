import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../Home/Home';
import BrowseArtists from '../BrowseArtists/BrowseArtists';
import { Page } from '../Page/Page';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page>
            <Home />
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
