/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArtistInput = {
  id?: string | null,
  externalId: string,
  firstLetter: string,
  title: string,
  description?: string | null,
  thumbnailUrl: string,
};

export type ModelArtistConditionInput = {
  externalId?: ModelStringInput | null,
  firstLetter?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateArtistInput = {
  id: string,
  externalId?: string | null,
  firstLetter?: string | null,
  title?: string | null,
  description?: string | null,
  thumbnailUrl?: string | null,
};

export type DeleteArtistInput = {
  id?: string | null,
};

export type CreateAlbumInput = {
  id?: string | null,
  artistId: string,
  externalId: string,
  title: string,
  thumbnailUrl: string,
};

export type ModelAlbumConditionInput = {
  artistId?: ModelIDInput | null,
  externalId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAlbumInput = {
  id: string,
  artistId?: string | null,
  externalId?: string | null,
  title?: string | null,
  thumbnailUrl?: string | null,
};

export type DeleteAlbumInput = {
  id?: string | null,
};

export type CreateSongInput = {
  id?: string | null,
  artistId: string,
  albumId: string,
  externalId: string,
  title: string,
  imageUrl: string,
  lyrics: string,
  referents?: Array< ReferentInput | null > | null,
};

export type ReferentInput = {
  externalId: number,
  content: string,
  records?: Array< AnnotationInput | null > | null,
};

export type AnnotationInput = {
  externalId: number,
  text: string,
  author: string,
  authorThumbnailUrl: string,
};

export type ModelSongConditionInput = {
  artistId?: ModelIDInput | null,
  albumId?: ModelIDInput | null,
  externalId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  artistId?: string | null,
  albumId?: string | null,
  externalId?: string | null,
  title?: string | null,
  imageUrl?: string | null,
  lyrics?: string | null,
  referents?: Array< ReferentInput | null > | null,
};

export type DeleteSongInput = {
  id?: string | null,
};

export type CreateTranslationInput = {
  id?: string | null,
  owner: string,
  createdAt?: string | null,
  songId: string,
  rating: number,
  lyrics: string,
};

export type ModelTranslationConditionInput = {
  createdAt?: ModelStringInput | null,
  songId?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  lyrics?: ModelStringInput | null,
  and?: Array< ModelTranslationConditionInput | null > | null,
  or?: Array< ModelTranslationConditionInput | null > | null,
  not?: ModelTranslationConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTranslationInput = {
  id: string,
  owner?: string | null,
  createdAt?: string | null,
  songId?: string | null,
  rating?: number | null,
  lyrics?: string | null,
};

export type DeleteTranslationInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  translationId: string,
  createdAt?: string | null,
  text: string,
  lineNumber?: number | null,
};

export type ModelCommentConditionInput = {
  translationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  text?: ModelStringInput | null,
  lineNumber?: ModelIntInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  translationId?: string | null,
  createdAt?: string | null,
  text?: string | null,
  lineNumber?: number | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null,
  externalId?: ModelStringInput | null,
  firstLetter?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  artistId?: ModelIDInput | null,
  externalId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  artistId?: ModelIDInput | null,
  albumId?: ModelIDInput | null,
  externalId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type ModelTranslationFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  songId?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  lyrics?: ModelStringInput | null,
  and?: Array< ModelTranslationFilterInput | null > | null,
  or?: Array< ModelTranslationFilterInput | null > | null,
  not?: ModelTranslationFilterInput | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  translationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  text?: ModelStringInput | null,
  lineNumber?: ModelIntInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateArtistMutationVariables = {
  input: CreateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type CreateArtistMutation = {
  createArtist:  {
    __typename: "Artist",
    id: string,
    externalId: string,
    firstLetter: string,
    title: string,
    description: string | null,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    albums:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateArtistMutationVariables = {
  input: UpdateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type UpdateArtistMutation = {
  updateArtist:  {
    __typename: "Artist",
    id: string,
    externalId: string,
    firstLetter: string,
    title: string,
    description: string | null,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    albums:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteArtistMutationVariables = {
  input: DeleteArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type DeleteArtistMutation = {
  deleteArtist:  {
    __typename: "Artist",
    id: string,
    externalId: string,
    firstLetter: string,
    title: string,
    description: string | null,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    albums:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum:  {
    __typename: "Album",
    id: string,
    artistId: string,
    externalId: string,
    title: string,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum:  {
    __typename: "Album",
    id: string,
    artistId: string,
    externalId: string,
    title: string,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum:  {
    __typename: "Album",
    id: string,
    artistId: string,
    externalId: string,
    title: string,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong:  {
    __typename: "Song",
    id: string,
    artistId: string,
    albumId: string,
    externalId: string,
    title: string,
    imageUrl: string,
    lyrics: string,
    referents:  Array< {
      __typename: "Referent",
      externalId: number,
      content: string,
      records:  Array< {
        __typename: "Annotation",
        externalId: number,
        text: string,
        author: string,
        authorThumbnailUrl: string,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      id: string,
      externalId: string,
      firstLetter: string,
      title: string,
      description: string | null,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      albums:  {
        __typename: "ModelAlbumConnection",
        nextToken: string | null,
      } | null,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    album:  {
      __typename: "Album",
      id: string,
      artistId: string,
      externalId: string,
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong:  {
    __typename: "Song",
    id: string,
    artistId: string,
    albumId: string,
    externalId: string,
    title: string,
    imageUrl: string,
    lyrics: string,
    referents:  Array< {
      __typename: "Referent",
      externalId: number,
      content: string,
      records:  Array< {
        __typename: "Annotation",
        externalId: number,
        text: string,
        author: string,
        authorThumbnailUrl: string,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      id: string,
      externalId: string,
      firstLetter: string,
      title: string,
      description: string | null,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      albums:  {
        __typename: "ModelAlbumConnection",
        nextToken: string | null,
      } | null,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    album:  {
      __typename: "Album",
      id: string,
      artistId: string,
      externalId: string,
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong:  {
    __typename: "Song",
    id: string,
    artistId: string,
    albumId: string,
    externalId: string,
    title: string,
    imageUrl: string,
    lyrics: string,
    referents:  Array< {
      __typename: "Referent",
      externalId: number,
      content: string,
      records:  Array< {
        __typename: "Annotation",
        externalId: number,
        text: string,
        author: string,
        authorThumbnailUrl: string,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      id: string,
      externalId: string,
      firstLetter: string,
      title: string,
      description: string | null,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      albums:  {
        __typename: "ModelAlbumConnection",
        nextToken: string | null,
      } | null,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    album:  {
      __typename: "Album",
      id: string,
      artistId: string,
      externalId: string,
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateTranslationMutationVariables = {
  input: CreateTranslationInput,
  condition?: ModelTranslationConditionInput | null,
};

export type CreateTranslationMutation = {
  createTranslation:  {
    __typename: "Translation",
    id: string,
    owner: string,
    createdAt: string,
    songId: string,
    rating: number,
    lyrics: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type UpdateTranslationMutationVariables = {
  input: UpdateTranslationInput,
  condition?: ModelTranslationConditionInput | null,
};

export type UpdateTranslationMutation = {
  updateTranslation:  {
    __typename: "Translation",
    id: string,
    owner: string,
    createdAt: string,
    songId: string,
    rating: number,
    lyrics: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type DeleteTranslationMutationVariables = {
  input: DeleteTranslationInput,
  condition?: ModelTranslationConditionInput | null,
};

export type DeleteTranslationMutation = {
  deleteTranslation:  {
    __typename: "Translation",
    id: string,
    owner: string,
    createdAt: string,
    songId: string,
    rating: number,
    lyrics: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    translationId: string,
    createdAt: string,
    text: string,
    lineNumber: number | null,
    updatedAt: string,
    translation:  {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    translationId: string,
    createdAt: string,
    text: string,
    lineNumber: number | null,
    updatedAt: string,
    translation:  {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    translationId: string,
    createdAt: string,
    text: string,
    lineNumber: number | null,
    updatedAt: string,
    translation:  {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type GetLyricsQueryVariables = {
  url?: string | null,
};

export type GetLyricsQuery = {
  getLyrics:  {
    __typename: "SongLyricsResponse",
    body: string,
  } | null,
};

export type GetGeniusSongQueryVariables = {
  id?: number | null,
};

export type GetGeniusSongQuery = {
  getGeniusSong:  {
    __typename: "GeniusSong",
    id: number,
    title: string,
    url: string,
    header_image_thumbnail_url: string,
    header_image_url: string,
    song_art_image_thumbnail_url: string,
    song_art_image_url: string,
    album:  {
      __typename: "GeniusAlbum",
      id: number,
      name: string,
      cover_art_url: string,
    },
    primary_artist:  {
      __typename: "GeniusArtist",
      id: number,
      name: string,
      header_image_url: string,
      image_url: string,
    },
    media:  Array< {
      __typename: "GeniusMedia",
      provider: string,
      url: string,
    } | null >,
  } | null,
};

export type SearchGeniusSongQueryVariables = {
  term?: string | null,
};

export type SearchGeniusSongQuery = {
  searchGeniusSong:  Array< {
    __typename: "GeniusSong",
    id: number,
    title: string,
    url: string,
    header_image_thumbnail_url: string,
    header_image_url: string,
    song_art_image_thumbnail_url: string,
    song_art_image_url: string,
    album:  {
      __typename: "GeniusAlbum",
      id: number,
      name: string,
      cover_art_url: string,
    },
    primary_artist:  {
      __typename: "GeniusArtist",
      id: number,
      name: string,
      header_image_url: string,
      image_url: string,
    },
    media:  Array< {
      __typename: "GeniusMedia",
      provider: string,
      url: string,
    } | null >,
  } | null > | null,
};

export type ListArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtistsQuery = {
  listArtists:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      id: string,
      externalId: string,
      firstLetter: string,
      title: string,
      description: string | null,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      albums:  {
        __typename: "ModelAlbumConnection",
        nextToken: string | null,
      } | null,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetArtistQueryVariables = {
  id: string,
};

export type GetArtistQuery = {
  getArtist:  {
    __typename: "Artist",
    id: string,
    externalId: string,
    firstLetter: string,
    title: string,
    description: string | null,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    albums:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetArtistsByFirstLetterQueryVariables = {
  firstLetter?: string | null,
  title?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetArtistsByFirstLetterQuery = {
  getArtistsByFirstLetter:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      id: string,
      externalId: string,
      firstLetter: string,
      title: string,
      description: string | null,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      albums:  {
        __typename: "ModelAlbumConnection",
        nextToken: string | null,
      } | null,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      artistId: string,
      externalId: string,
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum:  {
    __typename: "Album",
    id: string,
    artistId: string,
    externalId: string,
    title: string,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetAlbumsByArtistIdQueryVariables = {
  artistId?: string | null,
  title?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetAlbumsByArtistIdQuery = {
  getAlbumsByArtistId:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      artistId: string,
      externalId: string,
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong:  {
    __typename: "Song",
    id: string,
    artistId: string,
    albumId: string,
    externalId: string,
    title: string,
    imageUrl: string,
    lyrics: string,
    referents:  Array< {
      __typename: "Referent",
      externalId: number,
      content: string,
      records:  Array< {
        __typename: "Annotation",
        externalId: number,
        text: string,
        author: string,
        authorThumbnailUrl: string,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      id: string,
      externalId: string,
      firstLetter: string,
      title: string,
      description: string | null,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      albums:  {
        __typename: "ModelAlbumConnection",
        nextToken: string | null,
      } | null,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    album:  {
      __typename: "Album",
      id: string,
      artistId: string,
      externalId: string,
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetSongsByArtistIdQueryVariables = {
  artistId?: string | null,
  title?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetSongsByArtistIdQuery = {
  getSongsByArtistId:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSongsByAlbumIdQueryVariables = {
  albumId?: string | null,
  title?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetSongsByAlbumIdQuery = {
  getSongsByAlbumId:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListTranslationsQueryVariables = {
  filter?: ModelTranslationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTranslationsQuery = {
  listTranslations:  {
    __typename: "ModelTranslationConnection",
    items:  Array< {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTranslationQueryVariables = {
  id: string,
};

export type GetTranslationQuery = {
  getTranslation:  {
    __typename: "Translation",
    id: string,
    owner: string,
    createdAt: string,
    songId: string,
    rating: number,
    lyrics: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type GetTranslationsBySongIdQueryVariables = {
  songId?: string | null,
  rating?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTranslationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetTranslationsBySongIdQuery = {
  getTranslationsBySongId:  {
    __typename: "ModelTranslationConnection",
    items:  Array< {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTranslationsByOwnerQueryVariables = {
  owner?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTranslationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetTranslationsByOwnerQuery = {
  getTranslationsByOwner:  {
    __typename: "ModelTranslationConnection",
    items:  Array< {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    translationId: string,
    createdAt: string,
    text: string,
    lineNumber: number | null,
    updatedAt: string,
    translation:  {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      translationId: string,
      createdAt: string,
      text: string,
      lineNumber: number | null,
      updatedAt: string,
      translation:  {
        __typename: "Translation",
        id: string,
        owner: string,
        createdAt: string,
        songId: string,
        rating: number,
        lyrics: string,
        updatedAt: string,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentsByTranslationIdQueryVariables = {
  translationId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCommentsByTranslationIdQuery = {
  getCommentsByTranslationId:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      translationId: string,
      createdAt: string,
      text: string,
      lineNumber: number | null,
      updatedAt: string,
      translation:  {
        __typename: "Translation",
        id: string,
        owner: string,
        createdAt: string,
        songId: string,
        rating: number,
        lyrics: string,
        updatedAt: string,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateArtistSubscription = {
  onCreateArtist:  {
    __typename: "Artist",
    id: string,
    externalId: string,
    firstLetter: string,
    title: string,
    description: string | null,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    albums:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateArtistSubscription = {
  onUpdateArtist:  {
    __typename: "Artist",
    id: string,
    externalId: string,
    firstLetter: string,
    title: string,
    description: string | null,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    albums:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteArtistSubscription = {
  onDeleteArtist:  {
    __typename: "Artist",
    id: string,
    externalId: string,
    firstLetter: string,
    title: string,
    description: string | null,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    albums:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum:  {
    __typename: "Album",
    id: string,
    artistId: string,
    externalId: string,
    title: string,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum:  {
    __typename: "Album",
    id: string,
    artistId: string,
    externalId: string,
    title: string,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum:  {
    __typename: "Album",
    id: string,
    artistId: string,
    externalId: string,
    title: string,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong:  {
    __typename: "Song",
    id: string,
    artistId: string,
    albumId: string,
    externalId: string,
    title: string,
    imageUrl: string,
    lyrics: string,
    referents:  Array< {
      __typename: "Referent",
      externalId: number,
      content: string,
      records:  Array< {
        __typename: "Annotation",
        externalId: number,
        text: string,
        author: string,
        authorThumbnailUrl: string,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      id: string,
      externalId: string,
      firstLetter: string,
      title: string,
      description: string | null,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      albums:  {
        __typename: "ModelAlbumConnection",
        nextToken: string | null,
      } | null,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    album:  {
      __typename: "Album",
      id: string,
      artistId: string,
      externalId: string,
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong:  {
    __typename: "Song",
    id: string,
    artistId: string,
    albumId: string,
    externalId: string,
    title: string,
    imageUrl: string,
    lyrics: string,
    referents:  Array< {
      __typename: "Referent",
      externalId: number,
      content: string,
      records:  Array< {
        __typename: "Annotation",
        externalId: number,
        text: string,
        author: string,
        authorThumbnailUrl: string,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      id: string,
      externalId: string,
      firstLetter: string,
      title: string,
      description: string | null,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      albums:  {
        __typename: "ModelAlbumConnection",
        nextToken: string | null,
      } | null,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    album:  {
      __typename: "Album",
      id: string,
      artistId: string,
      externalId: string,
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong:  {
    __typename: "Song",
    id: string,
    artistId: string,
    albumId: string,
    externalId: string,
    title: string,
    imageUrl: string,
    lyrics: string,
    referents:  Array< {
      __typename: "Referent",
      externalId: number,
      content: string,
      records:  Array< {
        __typename: "Annotation",
        externalId: number,
        text: string,
        author: string,
        authorThumbnailUrl: string,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      id: string,
      externalId: string,
      firstLetter: string,
      title: string,
      description: string | null,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      albums:  {
        __typename: "ModelAlbumConnection",
        nextToken: string | null,
      } | null,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    album:  {
      __typename: "Album",
      id: string,
      artistId: string,
      externalId: string,
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateTranslationSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTranslationSubscription = {
  onCreateTranslation:  {
    __typename: "Translation",
    id: string,
    owner: string,
    createdAt: string,
    songId: string,
    rating: number,
    lyrics: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTranslationSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTranslationSubscription = {
  onUpdateTranslation:  {
    __typename: "Translation",
    id: string,
    owner: string,
    createdAt: string,
    songId: string,
    rating: number,
    lyrics: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTranslationSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTranslationSubscription = {
  onDeleteTranslation:  {
    __typename: "Translation",
    id: string,
    owner: string,
    createdAt: string,
    songId: string,
    rating: number,
    lyrics: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      artistId: string,
      albumId: string,
      externalId: string,
      title: string,
      imageUrl: string,
      lyrics: string,
      referents:  Array< {
        __typename: "Referent",
        externalId: number,
        content: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        id: string,
        externalId: string,
        firstLetter: string,
        title: string,
        description: string | null,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      album:  {
        __typename: "Album",
        id: string,
        artistId: string,
        externalId: string,
        title: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    translationId: string,
    createdAt: string,
    text: string,
    lineNumber: number | null,
    updatedAt: string,
    translation:  {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    translationId: string,
    createdAt: string,
    text: string,
    lineNumber: number | null,
    updatedAt: string,
    translation:  {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    translationId: string,
    createdAt: string,
    text: string,
    lineNumber: number | null,
    updatedAt: string,
    translation:  {
      __typename: "Translation",
      id: string,
      owner: string,
      createdAt: string,
      songId: string,
      rating: number,
      lyrics: string,
      updatedAt: string,
      song:  {
        __typename: "Song",
        id: string,
        artistId: string,
        albumId: string,
        externalId: string,
        title: string,
        imageUrl: string,
        lyrics: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};
