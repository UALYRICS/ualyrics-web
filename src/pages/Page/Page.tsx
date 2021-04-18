import React, { FunctionComponent } from 'react';
import { TopToolbar } from './TopToolbar';
import { SocialToolbar } from './SocialToolbar';

export const Page: FunctionComponent<{}> = ({ children }) => (
  <div className="container full-width">
    <TopToolbar />
    <SocialToolbar />
    {children}
  </div>
);