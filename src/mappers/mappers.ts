import { GetArtistListResult, GetArtistResult, SongResult } from "./result-types";
import { Artist, LyricsLine, Song } from "../models";
import { Song as GeniusSong } from "genius-lyrics";

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
    lyrics: song!.lyrics!.map(line => {
      return {
        number: song!.lyrics![line!.number]!.number,
        original: song!.lyrics![line!.number]!.original,
        translation: song!.lyrics![line!.number]!.translation || undefined
      }
    })
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

export function mapGeniusSongToSong(geniusSong: GeniusSong, lyrics: LyricsLine[]): Song {
  return {
    id: '', // this is required but unknown
    externalId: geniusSong.id.toString(),
    title: geniusSong.title,
    imageUrl: geniusSong.thumbnail,
    lyrics: lyrics,
    artist: {
      id: '',
      title: geniusSong?.artist.name,
      thumbnailUrl: geniusSong?.artist.thumbnail,
      firstLetter: geniusSong?.artist?.name.charAt(0),
      externalId: geniusSong?.artist.id.toString(),
    },
    album: {
      id: '',
      artistId: '',
      externalId: geniusSong?.raw.album?.id.toString(),
      title: geniusSong?.raw.album?.name,
      thumbnailUrl: geniusSong?.raw.album?.cover_art_url
    }
  }
}