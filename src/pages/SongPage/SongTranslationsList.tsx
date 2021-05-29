import React, { FunctionComponent } from "react";
import { Translation } from "../../models";
import {Link} from "react-router-dom";

export const SongTranslationsList: FunctionComponent<{translations: Array<Translation | null>}> = ({translations}) => {

  const translationOwners = translations.map(translation => (
    <li key={translation?.id}><Link to={`/translations/${translation?.id}`}>{translation?.ownerName}</Link></li>
  ));

  return translationOwners.length === 0 ? (<></>) : (
    <>
      <div>Перекладено:</div>
      <ul>{translationOwners}</ul>
    </>
  );
};