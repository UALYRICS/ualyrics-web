import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { SongLyrics } from "../../componenets/Song/SongLyrics";
import { Song } from "../../models";
import { getSongById } from "../../service/song-service"; 
import { SongTranslationsList } from "./SongTranslationsList";
import {Link} from "react-router-dom";
import { LeftTitleSection } from "../../componenets/Decor/LeftTitleSection";
import { RightTitleSection } from "../../componenets/Decor/RightTitleSection";

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

  if(!song) {
    return <></>;
  }

  const translationsBlock = song?.translations?.length === 0 ? <></> : (
    <>
      <LeftTitleSection title="Переклади"/>
      <SongTranslationsList translations={song?.translations || []} />
    </>
  );


  return (
    <>
      <LeftTitleSection title="Пісня"/>
      <SongDetails song={song}/>      
      <RightTitleSection title="Текст"/>
      <SongLyrics song={song} />
      {translationsBlock}
      <div className="text-center"> 
        <Link className="btn btn-outline-dark mt-4 center" to={`/songs/${songId}/translate`}>Додати переклад</Link>
      </div>
    </>
  )
}