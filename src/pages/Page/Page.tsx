import React, { FunctionComponent } from 'react';
import { TopToolbar } from './TopToolbar';

export const Page: FunctionComponent<{}> = ({ children }) => (
  <div className="container full-width">
    <TopToolbar />
    {children}
  </div>
);