import React, { FunctionComponent } from "react";
import { Translation } from "../../models";
import {Link} from "react-router-dom";
import "./TranslationsBlock.css";

export const TranslationsBlock: FunctionComponent<{songId: string, translations: Array<Translation | null>, currentTranslationId?: string}> = ({songId, translations, currentTranslationId}) => {

  // const [translationRequests, setTranslationRequests] = useState<Array<TranslationRequest>>([]);

  // useEffect(() => {
  //   async function getData() {
  //     const reqests = await getTranslationRequestsList({songId});
  //     setTranslationRequests(reqests);
  //   }
  //   getData();
  // }, [songId]);


  const translationOwners = translations.map(translation => (
    <div key={translation!.id} className="translation-row" >
      <Link to={`/translations/${translation?.id}`}>"{translation?.title}" переклад {translation?.ownerName}</Link>
      </div>
  ));

  const addTranslationButton = (
    <Link data-test="add-translation-button" className="btn btn-outline-dark mt-4 mx-1" to={`/songs/${songId}/translate`}>Додати переклад</Link>
  );

  const translationsBlock = translations.length === 0 ? (
    <>
      <div>В нас немає перекладів цієї пісні. Ви можете додати свій переклад.</div>
      <div className="text-center">
        {addTranslationButton}
        <button data-test="add-translation-button" className="btn btn-outline-dark mt-4 mx-1 d-none">Надіслати запит на переклад</button>
      </div>
    </>
  ) : (
    <>
    <div>{translationOwners}</div>
    <div className="text-center">
      {addTranslationButton}
    </div>
    </>
  );

  return (
    <>
      <div className="subheader">Всі переклади</div>
      {translationsBlock}
    </>
  );
};