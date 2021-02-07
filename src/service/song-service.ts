import { Song } from "../models";
import { API, Storage } from "aws-amplify";
import { createSong as createSongMutation } from "../graphql/mutations";
import { getSong } from "../graphql/queries";
import { CreateSongInput, CreateSongMutation, GetSongQuery } from "../API";
import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { mapSongResultToSong, mapGeniusSongToSong } from "../mappers/mappers";
import { scrapLyrics } from "./lyrics-service";
import { createArtistIfNotExists } from './artists-service';
import { createAlbumIfNotExists } from './albums-service';
import { getGeniusSongById } from './genius-service';

export async function saveSongToDb(song: Song): Promise<Song> {
  const artistId = await createArtistIfNotExists(song.artist!);
  const albumId = await createAlbumIfNotExists(artistId, song?.album!);
  return await createSong(artistId, albumId, song);
}

export const getGeniusSong = async (geniusId: number): Promise<Song> => {
  const geniusSong = await getGeniusSongById(geniusId);
  const lyricsData = await scrapLyrics(geniusSong.url);
  const song =  mapGeniusSongToSong(geniusSong, lyricsData!.getLyrics!.body);
  
  // saving song asynchronously
  return await saveSongToDb(song);
}

export const createSong = async (artistId: string, albumId: string, song: Song): Promise<Song> => {
  const result = await API.graphql({
    query: createSongMutation,
    variables: { 
      input: {
        artistId,
        albumId,
        title: song?.title,
        externalId: song?.externalId.toString(),
        imageUrl: song?.imageUrl,
        lyrics: song.lyrics
      } as CreateSongInput
    },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<CreateSongMutation>;

  const createdSong = mapSongResultToSong(result.data?.createSong!)

  updateLatestFile(createdSong);

  return createdSong;
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

const updateLatestFile = async (song: Song) => {
  const data = await Storage.get(`recentlyadded.json`, { download: true }) as {Body: {text(): Promise<string>}};
  data.Body.text().then(recentAddadData => { 
    const songs = JSON.parse(recentAddadData) as Array<Song>;
    songs.unshift(song);
    Storage.put(`recentlyadded.json`, JSON.stringify(songs));
  })
};