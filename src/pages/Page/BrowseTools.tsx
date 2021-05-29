import React, { FunctionComponent } from 'react';
import { LeftTitleSection } from '../../componenets/Decor/LeftTitleSection';
import { FirstLetterToolbar } from './FirstLetterToolbar/FirstLetterToolbar';
import { TranslationSelector } from './TranslationSelector';

export const BrowseTools: FunctionComponent<{}> = () => {
  return (
    <>
      <LeftTitleSection title="Каталог перекладів"/>
      <TranslationSelector />
      <FirstLetterToolbar />
    </>
  );
}