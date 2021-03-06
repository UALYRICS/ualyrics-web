import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { SongLyrics } from "../../componenets/Song/SongLyrics";
import { Song } from "../../models";
import { getSongById } from "../../service/song-service"; 
import { SongTranslationsList } from "./SongTranslationsList";
import {Link} from "react-router-dom";
import { LeftTitleSection } from "../../componenets/Decor/LeftTitleSection";

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


  return (
    <>
      <LeftTitleSection title="Пісня"/>
      <SongDetails song={song}/>
      <SongTranslationsList translations={song?.translations || []} />
      <Link to={`/songs/${songId}/translate`}>Додати переклад</Link>
      <SongLyrics song={song} />
    </>
  )
}