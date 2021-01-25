/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLyrics = /* GraphQL */ `
  query GetLyrics($url: String) {
    getLyrics(url: $url) {
      body
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        externalId
        firstLetter
        title
        description
        thumbnailUrl
        createdAt
        updatedAt
        albums {
          nextToken
        }
        songs {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      externalId
      firstLetter
      title
      description
      thumbnailUrl
      createdAt
      updatedAt
      albums {
        items {
          id
          artistId
          title
          thumbnailUrl
          createdAt
          updatedAt
        }
        nextToken
      }
      songs {
        items {
          id
          artistId
          albumId
          externalId
          title
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
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        artistId
        title
        thumbnailUrl
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
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      artistId
      title
      thumbnailUrl
      createdAt
      updatedAt
      songs {
        items {
          id
          artistId
          albumId
          externalId
          title
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
      artistId
      albumId
      externalId
      title
      imageUrl
      lyrics {
        numuber
        original
        translation
      }
      createdAt
      updatedAt
      artist {
        id
        externalId
        firstLetter
        title
        description
        thumbnailUrl
        createdAt
        updatedAt
        albums {
          nextToken
        }
        songs {
          nextToken
        }
      }
      album {
        id
        artistId
        title
        thumbnailUrl
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
        artistId
        albumId
        externalId
        title
        imageUrl
        lyrics {
          numuber
          original
          translation
        }
        createdAt
        updatedAt
        artist {
          id
          externalId
          firstLetter
          title
          description
          thumbnailUrl
          createdAt
          updatedAt
        }
        album {
          id
          artistId
          title
          thumbnailUrl
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
