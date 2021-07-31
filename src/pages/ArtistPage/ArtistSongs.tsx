import React, { useState, useEffect, FunctionComponent } from "react";
import { Artist, GeniusSongEntry, Song } from '../../models';
import { getGeniusSongsForArtist } from "../../service/genius-service";
import { SongCard, SongCardsList } from "../../componenets/Song/SongCardsList";
import { RightTitleSection } from "../../componenets/Decor/RightTitleSection";
import { LeftTitleSection } from "../../componenets/Decor/LeftTitleSection";

export const ArtistSongs: FunctionComponent<{artist: Artist}> = ({artist}) => {

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

  const translatedSongs = songsWithTranslations!.map(mapSongToCart);

  const notTranslatedSongs = songsWithoutTranslations?.map(mapGeniusSongToCart);

  const translatedSongsBlock = translatedSongs.length === 0 ?
  <></> :
  (
    <>
      <RightTitleSection title="Перекладені пісні"/>
      <SongCardsList songs={translatedSongs} />
    </>
  )

  const notTranslatedSongsBlock = notTranslatedSongs.length === 0 ?
  <></> :
  (
    <>
      <LeftTitleSection title="Неперекладені пісні"/>
      <SongCardsList songs={notTranslatedSongs} />
    </>
  )

  return (
    <>
      {translatedSongsBlock}
      {notTranslatedSongsBlock}
    </>
  )
};

const mapSongToCart = (song: Song | null) => {
  return {
    title: song?.title,
    icon: song?.imageUrl,
    pageUrl: `/songs/${song?.id}`,
    artistTitle: song?.artistName,
    artistPageUrl: `/artists/${song?.artist?.id}`,
  } as SongCard
};

const mapGeniusSongToCart = (song: GeniusSongEntry) => {
  return {
    title: song?.title,
    icon: song.header_image_thumbnail_url,
    pageUrl: `/genius-songs/${song.id}`,
    artistTitle: song.primary_artist.name,
  } as SongCard
};