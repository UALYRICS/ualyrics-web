import React, { FunctionComponent } from 'react';
import {Link} from "react-router-dom";

import './FirstLetterToolbar.css';

export const FirstLetterToolbar: FunctionComponent<{}> = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="first-letter-toolbar">
      {[...letters].map(ch => (
          <Link to={'/' + ch} key={ch}>{ch}</Link>
      ))}
    </div>
  );
}
