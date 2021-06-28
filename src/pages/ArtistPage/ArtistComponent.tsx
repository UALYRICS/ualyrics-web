import React, { useState, useEffect, FunctionComponent } from "react";
import { Artist, GeniusSongEntry } from '../../models';
import { Link } from "react-router-dom";
import { getGeniusSongsForArtist } from "../../service/genius-service";

export const ArtistComponent: FunctionComponent<{artist: Artist}> = ({artist}) => {

  const [allSongs, setAllSongs] = useState<Array<GeniusSongEntry>>([]);

  useEffect(() => {
    async function getData() {
      const songsData = await getGeniusSongsForArtist(artist.geniusId);
      setAllSongs(songsData);
    }
    getData();
  }, [artist.geniusId]);

  const songsWithTranslations = artist?.songs?.filter(song => song?.translations?.length !== 0);
  const songsWithTranslationIds = songsWithTranslations?.map(song => song?.geniusId);
  const songsWithoutTranslations = allSongs?.filter(song => !songsWithTranslationIds?.includes(song?.id));

  const translatedSongs = songsWithTranslations?.map(song => (
    <li key={song?.id}><Link to={`/songs/${song?.id}`}>{song?.title}</Link></li>
  ));

  const notTranslatedSongs = songsWithoutTranslations?.map(song => (
    <li key={song?.id}><Link to={`/genius-songs/${song.id}`}>{song?.title}</Link></li>
  ));

  const notTranslatedSongsBlock = notTranslatedSongs.length == 0 ?
  <></> :
  (
    <>
      <div>Неперекладені пісні:</div>
      <div>
        <ul>
          {notTranslatedSongs}
        </ul>
      </div>
    </>
  )


  return (
    <>
      <img src={artist.thumbnailUrl} alt="Artist" width="200px"/>
      <div>Ім'я: {artist?.title}</div>
      <div>Перекладені пісні:</div>
      <div>
        <ul>
          {translatedSongs}
        </ul>
      </div>
      {notTranslatedSongsBlock}
    </>
  )
};