/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = /* GraphQL */ `
  query GetArtist($firstLetter: ID!, $name: String!) {
    getArtist(firstLetter: $firstLetter, name: $name) {
      firstLetter
      name
      image
      createdAt
      updatedAt
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $firstLetter: ID
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
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
