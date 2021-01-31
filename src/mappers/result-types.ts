
export interface GetArtistListResult {
  id: string,
  externalId: string,
  firstLetter: string,
  title: string,
  description: string | null,
  thumbnailUrl: string,
  createdAt: string,
  updatedAt: string,
}

export interface SongResult {
  id: string,
  artistId: string,
  albumId: string,
  externalId: string,
  title: string,
  imageUrl: string,
  createdAt: string,
  updatedAt: string,
  owner: string | null,
  lyrics?: Array<{
    number: number,
    original: string,
    translation?: string | null,
  } | null> | null
}

export interface GetArtistResult extends GetArtistListResult{
  songs?: {
    items?: Array<SongResult | null> | null
  } | null
}