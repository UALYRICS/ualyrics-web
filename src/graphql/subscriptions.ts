/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist {
    onCreateArtist {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist {
    onUpdateArtist {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist {
    onDeleteArtist {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
