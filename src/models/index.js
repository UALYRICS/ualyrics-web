// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Artist, Album, Song, Translation, Comment, SongLyricsResponse, Referent, Annotation } = initSchema(schema);

export {
  Artist,
  Album,
  Song,
  Translation,
  Comment,
  SongLyricsResponse,
  Referent,
  Annotation
};