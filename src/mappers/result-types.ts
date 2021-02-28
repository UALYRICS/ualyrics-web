
export interface GetArtistListResult {
  id: string,
  geniusId: number,
  firstLetter: string,
  title: string,
  description?: string | null | undefined,
  thumbnailUrl: string,
  createdAt: string,
  updatedAt: string,
}

export interface SongResult {
  id: string,
  artistId: string,
  albumId: string,
  geniusId: number,
  title: string,
  artistName: string,
  albumName?: string | null | undefined,
  imageUrl: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  lyrics?: string
}

export interface GetArtistResult extends GetArtistListResult{
  songs?: {
    items?: Array<SongResult | null> | null
  } | null
}