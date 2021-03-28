import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { LyricsLine, Translation } from "../../models";
import { getTranslationById } from "../../service/translations-service";
import { TranslatedLyrics } from "./TranslatedLyrics";

export const TranslationPage: FunctionComponent<{}> = () => {
  let { translationId } = useParams();
  const [translation, setTranslation] = useState<Translation>();

  useEffect(() => {
    async function getData() {
      const translationData = await getTranslationById(translationId);
      setTranslation(translationData);
    }
    getData();
  }, [translationId]);

  if(!translation){
    return <></>;
  }

  console.log(translation.lyrics);

  return (
    <>
      <SongDetails song={translation?.song}/>
      <TranslatedLyrics lyrics={translation?.lyrics as Array<LyricsLine>} />
    </>
  )
}