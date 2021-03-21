// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Artist, Album, Song, Translation, Comment, SongLyricsResponse, GeniusSong, GeniusAlbum, GeniusArtist, GeniusMedia, GeniusSongEntry, LyricsLine, Referent, Annotation } = initSchema(schema);

export {
  Artist,
  Album,
  Song,
  Translation,
  Comment,
  SongLyricsResponse,
  GeniusSong,
  GeniusAlbum,
  GeniusArtist,
  GeniusMedia,
  GeniusSongEntry,
  LyricsLine,
  Referent,
  Annotation
};