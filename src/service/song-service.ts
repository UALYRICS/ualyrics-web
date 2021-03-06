import { Song } from "../models";
import { API } from "aws-amplify";
import { createSong as createSongMutation } from "../graphql/mutations";
import { getSong, getSongsByArtistId, getSongByGeniuslId } from "../graphql/queries";
import { CreateSongInput, CreateSongMutation, GetSongQuery, GetSongsByArtistIdQuery, GetSongByGeniuslIdQuery } from "../API";
import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { mapSongResultToSong, mapGeniusSongToSong } from "../mappers/mappers";
import { scrapLyrics } from "./lyrics-service";
import { createArtistIfNotExists } from './artists-service';
import { createAlbumIfNotExists } from './albums-service';
import { getGeniusSongById } from './genius-service';

export async function saveSongToDb(song: Song): Promise<Song> {
  const artistId = await createArtistIfNotExists(song.artist!);
  const albumId = song.album ? await createAlbumIfNotExists(artistId, song?.album!) : undefined;
  return await createSongIfNotExists(artistId, song, albumId);
}

async function createSongIfNotExists(artistId: string, song: Song, albumId?: string): Promise<Song> {
  const existing = await getSongByArtistIdAndTitle(artistId, song.title);
  if(existing){
    return existing;
  }
  return createSong(artistId, song, albumId);
}

async function getSongByArtistIdAndTitle(artistId: string, title: string): Promise<Song | null>{
  const result = await API.graphql({
    query: getSongsByArtistId,
    variables: {
      artistId,
      title: {
        eq: title
      }
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetSongsByArtistIdQuery>;

  return result.data?.getSongsByArtistId?.items?.map(mapSongResultToSong)[0] || null;
}

export const getGeniusSong = async (geniusId: number): Promise<Song> => {
  const found = await getSongByGeniusId(geniusId);
  if(found !== null) {
    return found;
  }
  const geniusSong = await getGeniusSongById(geniusId);
  const lyricsData = await scrapLyrics(geniusSong.url);
  const song =  mapGeniusSongToSong(geniusSong, lyricsData!.getLyrics!.body);
  return await saveSongToDb(song);
}

export const createSong = async (artistId: string, song: Song, albumId?: string): Promise<Song> => {
  const result = await API.graphql({
    query: createSongMutation,
    variables: { 
      input: {
        artistId,
        albumId,
        title: song?.title,
        geniusId: song?.geniusId,
        imageUrl: song?.imageUrl,
        lyrics: song.lyrics,
        artistName: song.artistName,
        albumName: song.albumName,
      } as CreateSongInput
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<CreateSongMutation>;
  
  return mapSongResultToSong(result.data?.createSong!);
};

export const getSongById = async (id: string): Promise<Song> => {
  const result = await API.graphql({
    query: getSong,
    variables: {
      id: id,
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetSongQuery>;

  return mapSongResultToSong(result.data!.getSong!);
}

const getSongByGeniusId = async (geniusId: number): Promise<Song | null> => {
  const result = await API.graphql({
    query: getSongByGeniuslId,
    variables: {
      geniusId,
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetSongByGeniuslIdQuery>;

  if(result.data!.getSongByGeniuslId!.items![0]){
    return mapSongResultToSong(result.data!.getSongByGeniuslId!.items![0]);
  }
  return null;
}
