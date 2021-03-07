import React, { FunctionComponent } from 'react';

import logo from './logo.png';
import './Logo.css';

export const Logo: FunctionComponent<{}> = () => (
 <div className="logo"><a href="/"><img src={logo} alt="logo" /></a></div>
);