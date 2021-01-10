import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home';
import BrowseArtists from '../BrowseArtists/BrowseArtists';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:firstLetter" children={<BrowseArtists />} />
      </Switch>
    </Router>
  );
}

export default App;
