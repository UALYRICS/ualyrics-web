import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class SongLyricsResponse {
  readonly body: string;
  constructor(init: ModelInit<SongLyricsResponse>);
}

export declare class LyricsLine {
  readonly number: number;
  readonly original: string;
  readonly translation?: string;
  constructor(init: ModelInit<LyricsLine>);
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
  readonly lyrics: (LyricsLine | null)[];
  constructor(init: ModelInit<Song>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}