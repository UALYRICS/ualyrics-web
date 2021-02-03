import { Song } from "../models";
import { createArtistIfNotExists } from './artists-service';
import { createAlbumIfNotExists } from './albums-service';
import { createSong } from './song-service';

export async function saveSongTranslation(song: Song): Promise<Song> {
  const artistId = await createArtistIfNotExists(song.artist!);
  const albumId = await createAlbumIfNotExists(artistId, song?.album!);
  return await createSong(artistId, albumId, song);
}
