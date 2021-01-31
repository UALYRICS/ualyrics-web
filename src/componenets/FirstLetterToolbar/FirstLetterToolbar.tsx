import React from 'react';
import './FirstLetterToolbar.css';
import {Link} from "react-router-dom";

function FirstLetterToolbar() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="first-letter-toolbar">
      {[...letters].map(ch => (
          <Link to={'/' + ch} key={ch}>{ch}</Link>
      ))}
    </div>
  );
}

export default FirstLetterToolbar;