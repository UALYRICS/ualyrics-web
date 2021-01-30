// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Artist, Album, Song, SongLyricsResponse, LyricsLine } = initSchema(schema);

export {
  Artist,
  Album,
  Song,
  SongLyricsResponse,
  LyricsLine
};