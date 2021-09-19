import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { LeftTitleSection } from "../../componenets/Decor/LeftTitleSection";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { LyricsLine, Translation } from "../../models";
import { getTranslationById } from "../../service/translations-service";
import { TranslatedLyrics } from "./TranslatedLyrics";
import useDocumentTitle from '../../utils/use-document-title';

export const TranslationPage: FunctionComponent<{}> = () => {
  let { translationId } = useParams<{translationId: string}>();
  const [translation, setTranslation] = useState<Translation>();

  useEffect(() => {
    async function getData() {
      const translationData = await getTranslationById(translationId);
      setTranslation(translationData);
    }
    getData();
  }, [translationId]);

  useDocumentTitle(`${translation?.song?.artistName || ''} - ${translation?.song?.title || ''} | переклад пісні | UALYRICS`);

  if(!translation){
    return <></>;
  }

  return (
    <>
      <LeftTitleSection title="Переклад"/>
      <SongDetails song={translation?.song!}/>
      <TranslatedLyrics lyrics={translation?.lyrics as Array<LyricsLine>} />
    </>
  )
}