import React, { FunctionComponent } from 'react';
import { LeftTitleSection } from '../../componenets/Decor/LeftTitleSection';
import { FirstLetterToolbar } from './FirstLetterToolbar/FirstLetterToolbar';
import { TranslationSelector } from './TranslationSelector/TranslationSelector';

export const BrowseTools: FunctionComponent<{}> = () => {
  return (
    <>
      <LeftTitleSection title="Каталог перекладів"/>
      <div className="row">
        <div className="col-lg-6 col-xs-12"><TranslationSelector /></div>
        <div className="col-lg-6 col-xs-12"><FirstLetterToolbar /></div>
      </div>
    </>
  );
}