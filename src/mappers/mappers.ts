import { GetArtistListResult, GetArtistResult, SongResult } from "./result-types";
import { Artist, GeniusSong, Song } from "../models";

export function mapSingleArtistResultToArtist(item: GetArtistResult): Artist {
  return {
    id: item?.id,
    firstLetter: item.title.toUpperCase().charAt(0),
    title: item?.title,
    geniusId: item?.geniusId,
    thumbnailUrl: item?.thumbnailUrl,
    description: item?.description,
    songs: item?.songs?.items?.map(mapSongResultToSong)
  } as Artist;
}

export function mapSongResultToSong(song: SongResult | null): Song {
  return {
    id: song?.id!,
    geniusId: song?.geniusId!,
    title: song?.title!,
    imageUrl: song?.imageUrl!,
    lyrics: song?.lyrics!,
    artistName: song?.artistName!,
    albumName: song?.albumName || undefined,
    translations: song?.translations?.items,
    artist: {
      id: song?.artistId,
      title: song?.artistName,
    }
  } as Song;
}

export function mapResultDataToArtist(item: GetArtistListResult | null): Artist {
  return {
    id: item?.id,
    title: item?.title,
    geniusId: item?.geniusId,
    thumbnailUrl: item?.thumbnailUrl,
    description: item?.description,
  } as Artist;
}

export function mapGeniusSongToSong(geniusSong: GeniusSong, lyrics: string): Song {
  return {
    id: '', // this is required but unknown
    geniusId: geniusSong.id,
    title: geniusSong.title,
    imageUrl: geniusSong.song_art_image_thumbnail_url,
    lyrics: lyrics,
    artistName: geniusSong.primary_artist.name,
    albumName: geniusSong.album?.name,
    artist: {
      id: '',
      title: geniusSong?.primary_artist.name,
      thumbnailUrl: geniusSong?.primary_artist.image_url,
      firstLetter: geniusSong?.primary_artist?.name.charAt(0),
      geniusId: geniusSong?.primary_artist.id,
    },
    album: geniusSong.album ? {
      id: '',
      artistId: '',
      geniusId: geniusSong?.album?.id,
      title: geniusSong?.album?.name,
      thumbnailUrl: geniusSong?.album?.cover_art_url
    }: undefined
  }
}