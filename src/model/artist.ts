import { Album } from "./album";
import { Song } from "./song";

export interface Artist {
    readonly name: string;
    readonly geniusId: string;
    readonly imageUrl: string;
    readonly albums: ReadonlyArray<Album>;
    readonly songs: ReadonlyArray<Song>;
}
