/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listArtists = /* GraphQL */ `
  query ListArtists(
    $firstLetter: String
    $name: ModelStringKeyConditionInput
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listArtists(
      firstLetter: $firstLetter
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        geniusId
        firstLetter
        name
        imageUrl
        albums {
          name
          imageUrl
        }
        createdAt
        updatedAt
        songs {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($firstLetter: String!, $name: String!) {
    getArtist(firstLetter: $firstLetter, name: $name) {
      geniusId
      firstLetter
      name
      imageUrl
      albums {
        name
        imageUrl
      }
      createdAt
      updatedAt
      songs {
        items {
          id
          geniusId
          artistGeniusId
          name
          imageUrl
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      geniusId
      artistGeniusId
      name
      imageUrl
      createdAt
      updatedAt
      artist {
        geniusId
        firstLetter
        name
        imageUrl
        albums {
          name
          imageUrl
        }
        createdAt
        updatedAt
        songs {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        geniusId
        artistGeniusId
        name
        imageUrl
        createdAt
        updatedAt
        artist {
          geniusId
          firstLetter
          name
          imageUrl
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
