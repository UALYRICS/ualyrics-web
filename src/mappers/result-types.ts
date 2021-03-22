
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

interface LyricsLine {
  original: string,
  translation: string,
}

interface TranslationResult {
  id: string,
  owner: string,
  createdAt: string,
  rating: number,
  song?: SongResult | null,
}

export interface TranslationResultWithLyrics extends TranslationResult {
  lyrics: Array<LyricsLine | null>,
}

export interface SongResult {
  id: string,
  artistId: string,
  albumId: string,
  geniusId: number,
  title: string,
  artistName: string,
  albumName?: string | null,
  imageUrl: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  lyrics?: string,
  translations?: {
    nextToken?: string | null | undefined,
    items?: Array<TranslationResult | null> | null,
  } | null
}

export interface GetArtistResult extends GetArtistListResult{
  songs?: {
    items?: Array<SongResult | null> | null,
  } | null
}