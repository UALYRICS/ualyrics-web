import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '../pages/HomePage/HomePage';
import { FirstLetterPage } from '../pages/FirstLetterPage/FirstLetterPage';
import { Page } from '../pages/Page/Page';
import { SearchPage } from '../pages/SearchPage/SearchPage';
import { SongPage } from '../pages/SongPage/SongPage';
import { GeniusSongPage} from '../pages/GeniusSongPage/GeniusSongPage';
import { ArtistPage } from '../pages/ArtistPage/ArtistPage';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage/PrivacyPolicyPage';
import { DeletionInstructionsPage } from '../pages/DeletionInstructionsPage/DeletionInstructionsPage';
import AddTranslationPage from '../pages/AddTranslationPage/AddTranslationPage';

import './App.css';
import { TranslationPage } from '../pages/TranslationPage/TranslationPage';

export const App: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(<Page><Home/></Page>)} />
        <Route path="/find" element={(<Page><SearchPage/></Page>)} />
        <Route path="/privacy-policy" element={(<Page><PrivacyPolicyPage/></Page>)} />
        <Route path="/deletion-instructions" element={(<Page><DeletionInstructionsPage/></Page>)} />
        <Route path="/songs/:songId/translate" element={(<Page><AddTranslationPage/></Page>)} />
        <Route path="/translations/:translationId" element={(<Page><TranslationPage/></Page>)} />
        <Route path="/songs/:songId" element={(<Page><SongPage/></Page>)} />
        <Route path="/genius-songs/:songId" element={(<Page><GeniusSongPage/></Page>)} />
        <Route path="/artists/:artistId" element={(<Page><ArtistPage/></Page>)} />
        <Route path="/:firstLetter(\w)" element={(<Page><FirstLetterPage/></Page>)} />
      </Routes>
    </Router>
  );
}