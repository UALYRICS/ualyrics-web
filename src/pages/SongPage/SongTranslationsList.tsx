import React, { FunctionComponent } from "react";
import { Translation } from "../../models";
import {Link} from "react-router-dom";

export const SongTranslationsList: FunctionComponent<{translations: Array<Translation | null>}> = ({translations}) => {

  const translationOwners = translations.map(translation => (
    <div key={translation?.id}><Link to={`/translations/${translation?.id}`}>"{translation?.title}" від {translation?.ownerName}</Link></div>
  ));

  return translationOwners.length === 0 ? (<></>) : (
    <>
      <div>{translationOwners}</div>
    </>
  );
};