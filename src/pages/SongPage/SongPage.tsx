import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { SongLyrics } from "../../componenets/Song/SongLyrics";
import { Song } from "../../models";
import { getSongById } from "../../service/song-service"; 
import {Link} from "react-router-dom";
import { LeftTitleSection } from "../../componenets/Decor/LeftTitleSection";
import { RightTitleSection } from "../../componenets/Decor/RightTitleSection";
import useDocumentTitle from '../../utils/use-document-title';
import { TranslationsBlock } from "../../componenets/TranslationsBlock/TranslationsBlock";

export const SongPage: FunctionComponent<{}> = () => {
  let { songId } = useParams<{songId: string}>();
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    async function getData() {
      const songData = await getSongById(songId);
      setSong(songData);
    }
    getData();
  }, [songId]);

  useDocumentTitle(`${song?.artistName || ''} - ${song?.title || ''} | текст пісні | UALYRICS`);

  if(!song) {
    return <></>;
  }

  return (
    <>
      <LeftTitleSection title="Пісня"/>
      <SongDetails song={song}/>      
      <RightTitleSection title="Текст"/>
      <SongLyrics song={song} />
      <TranslationsBlock songId={songId} translations={song?.translations || []} />
      <div className="text-center"> 
        <Link data-test="add-translation-button" className="btn btn-outline-dark mt-4 center" to={`/songs/${songId}/translate`}>Додати переклад</Link>
      </div>
    </>
  )
}