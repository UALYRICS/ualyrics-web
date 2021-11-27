import { Song } from "../models";
import { API } from "aws-amplify";
import { createSong as createSongMutation } from "../graphql/mutations";
import { getSong } from "../graphql/queries";
import { CreateSongInput, CreateSongMutation, GetSongQuery, GetSongsByArtistIdQuery, GetSongByGeniuslIdQuery } from "../API";
import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { mapSongResultToSong, mapGeniusSongToSong } from "../mappers/mappers";
import { scrapLyrics } from "./lyrics-service";
import { createArtistIfNotExists } from './artists-service';
import { createAlbumIfNotExists } from './albums-service';
import { getGeniusSongById } from './genius-service';

export async function saveSongToDb(song: Song): Promise<string> {
  const artistId = await createArtistIfNotExists(song.artist!);
  const albumId = song.album ? await createAlbumIfNotExists(artistId, song?.album!) : undefined;
  return await createSongIfNotExists(artistId, song, albumId);
}

async function createSongIfNotExists(artistId: string, song: Song, albumId?: string): Promise<string> {
  const existing = await getSongIdByArtistIdAndTitle(artistId, song.title);
  if(existing){
    return existing;
  }
  return createSong(artistId, song, albumId);
}

async function getSongIdByArtistIdAndTitle(artistId: string, title: string): Promise<string | null>{

  const getSongsByArtistId = /* GraphQL */ `
  query GetSongsByArtistId(
    $artistId: ID
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSongsByArtistId(
      artistId: $artistId
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
      }
      nextToken
    }
  }
`;

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

  return result.data?.getSongsByArtistId?.items?.map(item => item?.id).find(id => id !== undefined) || null;
}

export const getGeniusSong = async (geniusId: number): Promise<string> => {
  const found = await getSongByGeniusId(geniusId);
  if(found !== null) {
    return found.id;
  }
  const geniusSong = await getGeniusSongById(geniusId);
  const lyricsData = await scrapLyrics(geniusSong.url);
  const song =  mapGeniusSongToSong(geniusSong, lyricsData!.getLyrics!.body);
  return await saveSongToDb(song);
}

export const createSong = async (artistId: string, song: Song, albumId?: string): Promise<string> => {
  const result = await API.graphql({
    query: createSongMutation,
    variables: { 
      input: {
        id: song.id,
        artistId,
        albumId,
        title: song?.title,
        geniusId: song?.geniusId,
        imageUrl: song?.imageUrl,
        lyrics: song.lyrics,
        artistName: song.artistName,
        albumName: song.albumName,
        youtubeLink: song.youtubeLink,
        spotifyLink: song.spotifyLink,
        soundcloudLink: song.soundcloudLink,
      } as CreateSongInput
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<CreateSongMutation>;
  
  return result.data?.createSong?.id!;
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

  const getSongByGeniuslId = /* GraphQL */ `
  query GetSongByGeniuslId(
    $geniusId: Int
    $sortDirection: ModelSortDirection
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSongByGeniuslId(
      geniusId: $geniusId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        artistId
        albumId
        geniusId
        title
        artistName
        albumName
        imageUrl
        lyrics
        youtubeLink
        spotifyLink
        soundcloudLink
        createdAt
        updatedAt
        artist {
          id
          title
        }
      }
      nextToken
    }
  }
`;

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
