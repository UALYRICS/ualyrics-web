import React, { FunctionComponent } from 'react';
import { TopToolbar } from './TopToolbar';
import { SocialToolbar } from './SocialToolbar';
import { Footer } from './Footer';

export const Page: FunctionComponent<{}> = ({ children }) => (
  <>
    <div className="container full-width" style={{marginBottom: "6rem"}} >
      <TopToolbar />
      <SocialToolbar />
      {children}
    </div>
    <Footer />
  </>
);