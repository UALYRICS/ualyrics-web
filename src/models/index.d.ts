import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class SongLyricsResponse {
  readonly body: string;
  constructor(init: ModelInit<SongLyricsResponse>);
}

export declare class GeniusSong {
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly header_image_thumbnail_url: string;
  readonly header_image_url: string;
  readonly song_art_image_thumbnail_url: string;
  readonly song_art_image_url: string;
  readonly album?: GeniusAlbum;
  readonly primary_artist: GeniusArtist;
  readonly media: (GeniusMedia | null)[];
  readonly path: string;
  constructor(init: ModelInit<GeniusSong>);
}

export declare class GeniusAlbum {
  readonly id: number;
  readonly name: string;
  readonly cover_art_url: string;
  constructor(init: ModelInit<GeniusAlbum>);
}

export declare class GeniusArtist {
  readonly id: number;
  readonly name: string;
  readonly header_image_url: string;
  readonly image_url: string;
  constructor(init: ModelInit<GeniusArtist>);
}

export declare class GeniusMedia {
  readonly provider: string;
  readonly url: string;
  constructor(init: ModelInit<GeniusMedia>);
}

export declare class GeniusSongEntry {
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly header_image_thumbnail_url: string;
  readonly header_image_url: string;
  readonly song_art_image_thumbnail_url: string;
  readonly song_art_image_url: string;
  readonly primary_artist: GeniusArtist;
  constructor(init: ModelInit<GeniusSongEntry>);
}

export declare class LyricsLine {
  readonly original: string;
  readonly translation: string;
  constructor(init: ModelInit<LyricsLine>);
}

export declare class Referent {
  readonly geniusId: number;
  readonly content: string;
  readonly records?: (Annotation | null)[];
  constructor(init: ModelInit<Referent>);
}

export declare class Annotation {
  readonly geniusId: number;
  readonly text: string;
  readonly author: string;
  readonly authorThumbnailUrl: string;
  constructor(init: ModelInit<Annotation>);
}

export declare class Artist {
  readonly id: string;
  readonly geniusId: number;
  readonly firstLetter: string;
  readonly title: string;
  readonly description?: string;
  readonly thumbnailUrl: string;
  readonly albums?: (Album | null)[];
  readonly songs?: (Song | null)[];
  readonly hasTranslations?: boolean;
  constructor(init: ModelInit<Artist>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}

export declare class Album {
  readonly id: string;
  readonly artistId: string;
  readonly geniusId: number;
  readonly title: string;
  readonly thumbnailUrl: string;
  readonly songs?: (Song | null)[];
  constructor(init: ModelInit<Album>);
  static copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}

export declare class Song {
  readonly id: string;
  readonly geniusId: number;
  readonly artist?: Artist;
  readonly album?: Album;
  readonly translations?: (Translation | null)[];
  readonly title: string;
  readonly artistName: string;
  readonly albumName?: string;
  readonly imageUrl: string;
  readonly lyrics: string;
  readonly referents?: (Referent | null)[];
  readonly youtubeLink?: string;
  readonly spotifyLink?: string;
  readonly soundcloudLink?: string;
  constructor(init: ModelInit<Song>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}

export declare class Translation {
  readonly id: string;
  readonly owner: string;
  readonly ownerName: string;
  readonly createdAt: string;
  readonly rating: number;
  readonly lyrics: (LyricsLine | null)[];
  readonly title: string;
  readonly song?: Song;
  constructor(init: ModelInit<Translation>);
  static copyOf(source: Translation, mutator: (draft: MutableModel<Translation>) => MutableModel<Translation> | void): Translation;
}

export declare class Comment {
  readonly id: string;
  readonly translationId: string;
  readonly createdAt: string;
  readonly text: string;
  readonly lineNumber?: number;
  readonly translation?: Translation;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}