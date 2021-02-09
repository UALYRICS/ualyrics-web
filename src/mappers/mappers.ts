import { GetArtistListResult, GetArtistResult, SongResult } from "./result-types";
import { Artist, GeniusSong, Song } from "../models";

export function mapSingleArtistResultToArtist(item: GetArtistResult): Artist {
  return {
    id: item?.id,
    title: item?.title,
    externalId: item?.externalId,
    thumbnailUrl: item?.thumbnailUrl,
    description: item?.description,
    songs: item.songs?.items?.map(mapSongResultToSong)
  } as Artist;
}

export function mapSongResultToSong(song: SongResult | null): Song {
  return {
    id: song?.id!,
    externalId: song?.externalId!,
    title: song?.title!,
    imageUrl: song?.imageUrl!,
    lyrics: song!.lyrics!
  };
}

export function mapResultDataToArtist(item: GetArtistListResult | null): Artist {
  return {
    id: item?.id,
    title: item?.title,
    externalId: item?.externalId,
    thumbnailUrl: item?.thumbnailUrl,
    description: item?.description,
  } as Artist;
}

export function mapGeniusSongToSong(geniusSong: GeniusSong, lyrics: string): Song {
  return {
    id: '', // this is required but unknown
    externalId: geniusSong.id.toString(),
    title: geniusSong.title,
    imageUrl: geniusSong.song_art_image_thumbnail_url,
    lyrics: lyrics,
    artist: {
      id: '',
      title: geniusSong?.primary_artist.name,
      thumbnailUrl: geniusSong?.primary_artist.image_url,
      firstLetter: geniusSong?.primary_artist?.name.charAt(0),
      externalId: geniusSong?.primary_artist.id.toString(),
    },
    album: {
      id: '',
      artistId: '',
      externalId: geniusSong?.album?.id.toString(),
      title: geniusSong?.album?.name,
      thumbnailUrl: geniusSong?.album?.cover_art_url
    }
  }
}