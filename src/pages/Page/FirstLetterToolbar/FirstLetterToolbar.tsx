import React, { FunctionComponent } from 'react';
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { LETTERS, NON_LETTER_SYMBOL, NON_LETTER_SYMBOL_ARTISTS_URL } from '../../../utils/constants';

import './FirstLetterToolbar.css';

export const FirstLetterToolbar: FunctionComponent<{}> = () => {
  const lettersAndSymbols = LETTERS + NON_LETTER_SYMBOL;

  let { firstLetter } = useParams<{firstLetter: string}>();

  return (
    <div className="first-letter-toolbar my-2">
      <div className="first-letter-toolbar-header">Оберіть виконавця за першою літерою {firstLetter}</div>
      <div className="first-letter-toolbar-body">
        {[...lettersAndSymbols].map(ch => (
          <Link to={'/' + (ch === NON_LETTER_SYMBOL ? NON_LETTER_SYMBOL_ARTISTS_URL : ch)} key={ch} className="letter-box">
            <span className={'letter' + (firstLetter?.toUpperCase() === ch?.toUpperCase() ? ' selected': '')}>{ch}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
