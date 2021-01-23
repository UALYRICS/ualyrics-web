import { Album } from "./album";
import { Song } from "./song";

export interface Artist {
    readonly id: string;
    readonly title: string;
    readonly externalId: string;
    readonly thumbnailUrl: string;
    readonly albums: ReadonlyArray<Album>;
    readonly songs: ReadonlyArray<Song>;
}
