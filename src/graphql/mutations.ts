/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
