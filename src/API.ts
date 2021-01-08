/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArtistInput = {
  firstLetter: string,
  name: string,
  geniusId: number,
  imageUrl?: string | null,
  albums?: Array< AlbumInput | null > | null,
};

export type AlbumInput = {
  name: string,
  geniusId: number,
  imageUrl: string,
  songs?: Array< SongInput | null > | null,
};

export type SongInput = {
  name: string,
  geniusId: number,
};

export type ModelArtistConditionInput = {
  geniusId?: ModelIntInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
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
  firstLetter: string,
  name: string,
  geniusId?: number | null,
  imageUrl?: string | null,
  albums?: Array< AlbumInput | null > | null,
};

export type DeleteArtistInput = {
  firstLetter: string,
  name: string,
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
  firstLetter?: ModelStringInput | null,
  name?: ModelStringInput | null,
  geniusId?: ModelIntInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateArtistMutationVariables = {
  input: CreateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type CreateArtistMutation = {
  createArtist:  {
    __typename: "Artist",
    firstLetter: string,
    name: string,
    geniusId: number,
    imageUrl: string | null,
    albums:  Array< {
      __typename: "Album",
      name: string,
      geniusId: number,
      imageUrl: string,
      songs:  Array< {
        __typename: "Song",
        name: string,
        geniusId: number,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArtistMutationVariables = {
  input: UpdateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type UpdateArtistMutation = {
  updateArtist:  {
    __typename: "Artist",
    firstLetter: string,
    name: string,
    geniusId: number,
    imageUrl: string | null,
    albums:  Array< {
      __typename: "Album",
      name: string,
      geniusId: number,
      imageUrl: string,
      songs:  Array< {
        __typename: "Song",
        name: string,
        geniusId: number,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArtistMutationVariables = {
  input: DeleteArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type DeleteArtistMutation = {
  deleteArtist:  {
    __typename: "Artist",
    firstLetter: string,
    name: string,
    geniusId: number,
    imageUrl: string | null,
    albums:  Array< {
      __typename: "Album",
      name: string,
      geniusId: number,
      imageUrl: string,
      songs:  Array< {
        __typename: "Song",
        name: string,
        geniusId: number,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetArtistQueryVariables = {
  firstLetter: string,
  name: string,
};

export type GetArtistQuery = {
  getArtist:  {
    __typename: "Artist",
    firstLetter: string,
    name: string,
    geniusId: number,
    imageUrl: string | null,
    albums:  Array< {
      __typename: "Album",
      name: string,
      geniusId: number,
      imageUrl: string,
      songs:  Array< {
        __typename: "Song",
        name: string,
        geniusId: number,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
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
      firstLetter: string,
      name: string,
      geniusId: number,
      imageUrl: string | null,
      albums:  Array< {
        __typename: "Album",
        name: string,
        geniusId: number,
        imageUrl: string,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateArtistSubscription = {
  onCreateArtist:  {
    __typename: "Artist",
    firstLetter: string,
    name: string,
    geniusId: number,
    imageUrl: string | null,
    albums:  Array< {
      __typename: "Album",
      name: string,
      geniusId: number,
      imageUrl: string,
      songs:  Array< {
        __typename: "Song",
        name: string,
        geniusId: number,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArtistSubscription = {
  onUpdateArtist:  {
    __typename: "Artist",
    firstLetter: string,
    name: string,
    geniusId: number,
    imageUrl: string | null,
    albums:  Array< {
      __typename: "Album",
      name: string,
      geniusId: number,
      imageUrl: string,
      songs:  Array< {
        __typename: "Song",
        name: string,
        geniusId: number,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArtistSubscription = {
  onDeleteArtist:  {
    __typename: "Artist",
    firstLetter: string,
    name: string,
    geniusId: number,
    imageUrl: string | null,
    albums:  Array< {
      __typename: "Album",
      name: string,
      geniusId: number,
      imageUrl: string,
      songs:  Array< {
        __typename: "Song",
        name: string,
        geniusId: number,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
