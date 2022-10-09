import React, { FunctionComponent } from 'react';
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
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage/PrivacyPolicyPage';
import { DeletionInstructionsPage } from '../pages/DeletionInstructionsPage/DeletionInstructionsPage';
import AddTranslationPage from '../pages/AddTranslationPage/AddTranslationPage';

import './App.css';
import { TranslationPage } from '../pages/TranslationPage/TranslationPage';
import { AuthWrapper } from '../componenets/Auth/AuthWrapper';
import { CookiesProvider } from 'react-cookie';

export const App: FunctionComponent<{}> = () => {
  return (
    <CookiesProvider>
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
          <Route exact path="/privacy-policy">
            <Page>
              <PrivacyPolicyPage />
            </Page>
          </Route>
          <Route exact path="/deletion-instructions">
            <Page>
              <DeletionInstructionsPage />
            </Page>
          </Route>
          <Route path="/songs/:songId/translate">
            <Page>
              <AuthWrapper>
                <AddTranslationPage />
              </AuthWrapper>
            </Page>
          </Route>
          <Route path="/translations/:translationId">
            <Page>
              <TranslationPage />
            </Page>
          </Route>        
          <Route path="/songs/:songId">
            <Page>
              <SongPage />
            </Page>
          </Route>
          <Route path="/genius-songs/:songId">
            <Page>
              <GeniusSongPage />
            </Page>
          </Route>
          <Route path="/artists/:artistId">
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
    </CookiesProvider>
  );
}