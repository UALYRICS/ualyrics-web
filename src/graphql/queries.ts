/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = /* GraphQL */ `
  query GetArtist($firstLetter: String!, $name: String!) {
    getArtist(firstLetter: $firstLetter, name: $name) {
      firstLetter
      name
      geniusId
      imageUrl
      albums {
        name
        geniusId
        imageUrl
        songs {
          name
          geniusId
        }
      }
      createdAt
      updatedAt
    }
  }
`;
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
        firstLetter
        name
        geniusId
        imageUrl
        albums {
          name
          geniusId
          imageUrl
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
