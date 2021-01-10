/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArtistInput = {
  geniusId: string,
  firstLetter: string,
  name: string,
  imageUrl: string,
  albums?: Array< AlbumInput | null > | null,
};

export type AlbumInput = {
  name: string,
  imageUrl: string,
};

export type ModelArtistConditionInput = {
  geniusId?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
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
  geniusId?: string | null,
  firstLetter: string,
  name: string,
  imageUrl?: string | null,
  albums?: Array< AlbumInput | null > | null,
};

export type DeleteArtistInput = {
  firstLetter: string,
  name: string,
};

export type CreateSongInput = {
  id?: string | null,
  geniusId: string,
  artistGeniusId: string,
  name: string,
  imageUrl: string,
};

export type ModelSongConditionInput = {
  geniusId?: ModelStringInput | null,
  artistGeniusId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  geniusId?: string | null,
  artistGeniusId?: string | null,
  name?: string | null,
  imageUrl?: string | null,
};

export type DeleteSongInput = {
  id?: string | null,
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

export type ModelArtistFilterInput = {
  geniusId?: ModelStringInput | null,
  firstLetter?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSongFilterInput = {
  geniusId?: ModelStringInput | null,
  artistGeniusId?: ModelStringInput | null,
  name?: ModelStringInput | null,
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
    geniusId: string,
    firstLetter: string,
    name: string,
    imageUrl: string,
    albums:  Array< {
      __typename: "Album",
      name: string,
      imageUrl: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        geniusId: string,
        artistGeniusId: string,
        name: string,
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
    geniusId: string,
    firstLetter: string,
    name: string,
    imageUrl: string,
    albums:  Array< {
      __typename: "Album",
      name: string,
      imageUrl: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        geniusId: string,
        artistGeniusId: string,
        name: string,
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
    geniusId: string,
    firstLetter: string,
    name: string,
    imageUrl: string,
    albums:  Array< {
      __typename: "Album",
      name: string,
      imageUrl: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        geniusId: string,
        artistGeniusId: string,
        name: string,
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
    geniusId: string,
    artistGeniusId: string,
    name: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      geniusId: string,
      firstLetter: string,
      name: string,
      imageUrl: string,
      albums:  Array< {
        __typename: "Album",
        name: string,
        imageUrl: string,
      } | null > | null,
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
    geniusId: string,
    artistGeniusId: string,
    name: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      geniusId: string,
      firstLetter: string,
      name: string,
      imageUrl: string,
      albums:  Array< {
        __typename: "Album",
        name: string,
        imageUrl: string,
      } | null > | null,
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
    geniusId: string,
    artistGeniusId: string,
    name: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      geniusId: string,
      firstLetter: string,
      name: string,
      imageUrl: string,
      albums:  Array< {
        __typename: "Album",
        name: string,
        imageUrl: string,
      } | null > | null,
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
  firstLetter?: string | null,
  name?: ModelStringKeyConditionInput | null,
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListArtistsQuery = {
  listArtists:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      geniusId: string,
      firstLetter: string,
      name: string,
      imageUrl: string,
      albums:  Array< {
        __typename: "Album",
        name: string,
        imageUrl: string,
      } | null > | null,
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

export type GetArtistQueryVariables = {
  firstLetter: string,
  name: string,
};

export type GetArtistQuery = {
  getArtist:  {
    __typename: "Artist",
    geniusId: string,
    firstLetter: string,
    name: string,
    imageUrl: string,
    albums:  Array< {
      __typename: "Album",
      name: string,
      imageUrl: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        geniusId: string,
        artistGeniusId: string,
        name: string,
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
    geniusId: string,
    artistGeniusId: string,
    name: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      geniusId: string,
      firstLetter: string,
      name: string,
      imageUrl: string,
      albums:  Array< {
        __typename: "Album",
        name: string,
        imageUrl: string,
      } | null > | null,
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
      geniusId: string,
      artistGeniusId: string,
      name: string,
      imageUrl: string,
      createdAt: string,
      updatedAt: string,
      artist:  {
        __typename: "Artist",
        geniusId: string,
        firstLetter: string,
        name: string,
        imageUrl: string,
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
    geniusId: string,
    firstLetter: string,
    name: string,
    imageUrl: string,
    albums:  Array< {
      __typename: "Album",
      name: string,
      imageUrl: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        geniusId: string,
        artistGeniusId: string,
        name: string,
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
    geniusId: string,
    firstLetter: string,
    name: string,
    imageUrl: string,
    albums:  Array< {
      __typename: "Album",
      name: string,
      imageUrl: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        geniusId: string,
        artistGeniusId: string,
        name: string,
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
    geniusId: string,
    firstLetter: string,
    name: string,
    imageUrl: string,
    albums:  Array< {
      __typename: "Album",
      name: string,
      imageUrl: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        geniusId: string,
        artistGeniusId: string,
        name: string,
        imageUrl: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong:  {
    __typename: "Song",
    id: string,
    geniusId: string,
    artistGeniusId: string,
    name: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      geniusId: string,
      firstLetter: string,
      name: string,
      imageUrl: string,
      albums:  Array< {
        __typename: "Album",
        name: string,
        imageUrl: string,
      } | null > | null,
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

export type OnUpdateSongSubscription = {
  onUpdateSong:  {
    __typename: "Song",
    id: string,
    geniusId: string,
    artistGeniusId: string,
    name: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      geniusId: string,
      firstLetter: string,
      name: string,
      imageUrl: string,
      albums:  Array< {
        __typename: "Album",
        name: string,
        imageUrl: string,
      } | null > | null,
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

export type OnDeleteSongSubscription = {
  onDeleteSong:  {
    __typename: "Song",
    id: string,
    geniusId: string,
    artistGeniusId: string,
    name: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    artist:  {
      __typename: "Artist",
      geniusId: string,
      firstLetter: string,
      name: string,
      imageUrl: string,
      albums:  Array< {
        __typename: "Album",
        name: string,
        imageUrl: string,
      } | null > | null,
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
