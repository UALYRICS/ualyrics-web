import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { LeftTitleSection } from "../../componenets/Decor/LeftTitleSection";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { LyricsLine, Translation } from "../../models";
import { getTranslationById } from "../../service/translations-service";
import { TranslatedLyrics } from "./TranslatedLyrics";
import useDocumentTitle from '../../utils/use-document-title';
import { TranslationToolbar } from "./TranslationToolbar";
import { Link } from 'react-router-dom';

export const TranslationPage: FunctionComponent<{}> = () => {
  let { translationId } = useParams<{translationId: string}>();
  const [translation, setTranslation] = useState<Translation>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function getData() {
      try {
      const translationData = await getTranslationById(translationId);
      setTranslation(translationData);
      } catch (error){
        setError(error.message);
      }
    }
    getData();
  }, [translationId]);

  useDocumentTitle(`${translation?.song?.artistName || ''} - ${translation?.song?.title || ''} | переклад пісні | UALYRICS`);

  if(error){
    return (
      <div className="alert alert-danger" role="alert">
        Перекдад не знайдено. Перейти на <Link to="/">головну</Link>.
      </div>);
  }

  if(!translation){
    return <></>;
  }

  return (
    <>
      <LeftTitleSection title="Переклад"/>
      <TranslationToolbar translation={translation} />
      <SongDetails song={translation?.song!}/>
      <TranslatedLyrics lyrics={translation?.lyrics as Array<LyricsLine>} />
    </>
  )
}