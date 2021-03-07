import React, { FunctionComponent } from 'react';
import { FirstLetterToolbar } from './FirstLetterToolbar/FirstLetterToolbar';
import { TranslationSelector } from './TranslationSelector';

export const BrowseTools: FunctionComponent<{}> = () => {
  return (
    <>
      <TranslationSelector />
      <FirstLetterToolbar />
    </>
  );
}