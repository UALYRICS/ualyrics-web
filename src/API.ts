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
  title: string,
  thumbnailUrl: string,
};

export type ModelAlbumConditionInput = {
  artistId?: ModelIDInput | null,
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
  lyrics: Array< LineInput | null >,
};

export type LineInput = {
  original: string,
  translation?: string | null,
};

export type ModelSongConditionInput = {
  artistId?: ModelIDInput | null,
  albumId?: ModelIDInput | null,
  externalId?: ModelStringInput | null,
  title?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
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
  lyrics?: Array< LineInput | null > | null,
};

export type DeleteSongInput = {
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

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  artistId?: ModelIDInput | null,
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
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
    lyrics:  Array< {
      __typename: "Line",
      original: string,
      translation: string | null,
    } | null >,
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
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
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
    lyrics:  Array< {
      __typename: "Line",
      original: string,
      translation: string | null,
    } | null >,
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
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
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
    lyrics:  Array< {
      __typename: "Line",
      original: string,
      translation: string | null,
    } | null >,
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
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    lyrics:  Array< {
      __typename: "Line",
      original: string,
      translation: string | null,
    } | null >,
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
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
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
      lyrics:  Array< {
        __typename: "Line",
        original: string,
        translation: string | null,
      } | null >,
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
        title: string,
        thumbnailUrl: string,
        createdAt: string,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
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
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateSongSubscriptionVariables = {
  owner?: string | null,
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
    lyrics:  Array< {
      __typename: "Line",
      original: string,
      translation: string | null,
    } | null >,
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
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateSongSubscriptionVariables = {
  owner?: string | null,
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
    lyrics:  Array< {
      __typename: "Line",
      original: string,
      translation: string | null,
    } | null >,
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
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteSongSubscriptionVariables = {
  owner?: string | null,
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
    lyrics:  Array< {
      __typename: "Line",
      original: string,
      translation: string | null,
    } | null >,
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
      title: string,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};
