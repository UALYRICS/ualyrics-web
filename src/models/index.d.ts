import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class SongLyricsResponse {
  readonly body: string;
  constructor(init: ModelInit<SongLyricsResponse>);
}

export declare class Referent {
  readonly externalId: number;
  readonly content: string;
  readonly records?: (Annotation | null)[];
  constructor(init: ModelInit<Referent>);
}

export declare class Annotation {
  readonly externalId: number;
  readonly text: string;
  readonly author: string;
  readonly authorThumbnailUrl: string;
  constructor(init: ModelInit<Annotation>);
}

export declare class Artist {
  readonly id: string;
  readonly externalId: string;
  readonly firstLetter: string;
  readonly title: string;
  readonly description?: string;
  readonly thumbnailUrl: string;
  readonly albums?: (Album | null)[];
  readonly songs?: (Song | null)[];
  constructor(init: ModelInit<Artist>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}

export declare class Album {
  readonly id: string;
  readonly artistId: string;
  readonly externalId: string;
  readonly title: string;
  readonly thumbnailUrl: string;
  readonly songs?: (Song | null)[];
  constructor(init: ModelInit<Album>);
  static copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}

export declare class Song {
  readonly id: string;
  readonly externalId: string;
  readonly artist?: Artist;
  readonly album?: Album;
  readonly title: string;
  readonly imageUrl: string;
  readonly lyrics: string;
  readonly referents?: (Referent | null)[];
  constructor(init: ModelInit<Song>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}

export declare class Translation {
  readonly id: string;
  readonly owner: string;
  readonly createdAt: string;
  readonly songId: string;
  readonly rating: number;
  readonly lyrics: string;
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