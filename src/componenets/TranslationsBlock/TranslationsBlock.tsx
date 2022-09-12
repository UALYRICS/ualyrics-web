import React, { FunctionComponent } from "react";
import { Translation } from "../../models";
import {Link} from "react-router-dom";
import "./TranslationsBlock.css";

export const TranslationsBlock: FunctionComponent<{songId: string, translations: Array<Translation | null>, currentTranslationId?: string}> = ({songId, translations, currentTranslationId}) => {

  const translationOwners = translations.map(translation => (
    <div key={translation!.id} className="translation-row" >
      <Link to={`/translations/${translation?.id}`}>"{translation?.title}" переклад {translation?.ownerName}</Link>
      </div>
  ));

  return translationOwners.length === 0 ? (<>В нас немає перекладів цієї пісні. Ви можете <Link to={`/songs/${songId}/translate`}>додати</Link> свій переклад.</>) : (
    <div className="row">

      <div className="col-lg-6 col-xs-12">
        <div className="subheader">Всі переклади</div>
        <div>{translationOwners}</div>
      </div>
      <div className="col-lg-6 col-xs-12 d-none">
        <div className="subheader">Зробити запит на переклад</div>
        <div>На даний момент запит на переклад цієї пісні наіслало: {0} користувачів.</div>
        <form>
          <button>Надіслати запит</button>
        </form>
      </div>
    </div>
  );
};