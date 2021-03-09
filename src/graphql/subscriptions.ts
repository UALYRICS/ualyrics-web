/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist {
    onCreateArtist {
      id
      geniusId
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
          geniusId
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
          geniusId
          title
          artistName
          albumName
          imageUrl
          lyrics
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist {
    onUpdateArtist {
      id
      geniusId
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
          geniusId
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
          geniusId
          title
          artistName
          albumName
          imageUrl
          lyrics
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist {
    onDeleteArtist {
      id
      geniusId
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
          geniusId
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
          geniusId
          title
          artistName
          albumName
          imageUrl
          lyrics
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
      id
      artistId
      geniusId
      title
      thumbnailUrl
      createdAt
      updatedAt
      songs {
        items {
          id
          artistId
          albumId
          geniusId
          title
          artistName
          albumName
          imageUrl
          lyrics
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
      id
      artistId
      geniusId
      title
      thumbnailUrl
      createdAt
      updatedAt
      songs {
        items {
          id
          artistId
          albumId
          geniusId
          title
          artistName
          albumName
          imageUrl
          lyrics
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
      id
      artistId
      geniusId
      title
      thumbnailUrl
      createdAt
      updatedAt
      songs {
        items {
          id
          artistId
          albumId
          geniusId
          title
          artistName
          albumName
          imageUrl
          lyrics
          createdAt
          updatedAt
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
      artistId
      albumId
      geniusId
      title
      artistName
      albumName
      imageUrl
      lyrics
      referents {
        geniusId
        content
        records {
          geniusId
          text
          author
          authorThumbnailUrl
        }
      }
      createdAt
      updatedAt
      artist {
        id
        geniusId
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
        geniusId
        title
        thumbnailUrl
        createdAt
        updatedAt
        songs {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      artistId
      albumId
      geniusId
      title
      artistName
      albumName
      imageUrl
      lyrics
      referents {
        geniusId
        content
        records {
          geniusId
          text
          author
          authorThumbnailUrl
        }
      }
      createdAt
      updatedAt
      artist {
        id
        geniusId
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
        geniusId
        title
        thumbnailUrl
        createdAt
        updatedAt
        songs {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      artistId
      albumId
      geniusId
      title
      artistName
      albumName
      imageUrl
      lyrics
      referents {
        geniusId
        content
        records {
          geniusId
          text
          author
          authorThumbnailUrl
        }
      }
      createdAt
      updatedAt
      artist {
        id
        geniusId
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
        geniusId
        title
        thumbnailUrl
        createdAt
        updatedAt
        songs {
          nextToken
        }
      }
    }
  }
`;
export const onCreateTranslation = /* GraphQL */ `
  subscription OnCreateTranslation($owner: String) {
    onCreateTranslation(owner: $owner) {
      id
      owner
      createdAt
      songId
      rating
      lyrics {
        original
        translation
      }
      updatedAt
      song {
        id
        artistId
        albumId
        geniusId
        title
        artistName
        albumName
        imageUrl
        lyrics
        referents {
          geniusId
          content
        }
        createdAt
        updatedAt
        artist {
          id
          geniusId
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
          geniusId
          title
          thumbnailUrl
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const onUpdateTranslation = /* GraphQL */ `
  subscription OnUpdateTranslation($owner: String) {
    onUpdateTranslation(owner: $owner) {
      id
      owner
      createdAt
      songId
      rating
      lyrics {
        original
        translation
      }
      updatedAt
      song {
        id
        artistId
        albumId
        geniusId
        title
        artistName
        albumName
        imageUrl
        lyrics
        referents {
          geniusId
          content
        }
        createdAt
        updatedAt
        artist {
          id
          geniusId
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
          geniusId
          title
          thumbnailUrl
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const onDeleteTranslation = /* GraphQL */ `
  subscription OnDeleteTranslation($owner: String) {
    onDeleteTranslation(owner: $owner) {
      id
      owner
      createdAt
      songId
      rating
      lyrics {
        original
        translation
      }
      updatedAt
      song {
        id
        artistId
        albumId
        geniusId
        title
        artistName
        albumName
        imageUrl
        lyrics
        referents {
          geniusId
          content
        }
        createdAt
        updatedAt
        artist {
          id
          geniusId
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
          geniusId
          title
          thumbnailUrl
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      translationId
      createdAt
      text
      lineNumber
      updatedAt
      translation {
        id
        owner
        createdAt
        songId
        rating
        lyrics {
          original
          translation
        }
        updatedAt
        song {
          id
          artistId
          albumId
          geniusId
          title
          artistName
          albumName
          imageUrl
          lyrics
          createdAt
          updatedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      translationId
      createdAt
      text
      lineNumber
      updatedAt
      translation {
        id
        owner
        createdAt
        songId
        rating
        lyrics {
          original
          translation
        }
        updatedAt
        song {
          id
          artistId
          albumId
          geniusId
          title
          artistName
          albumName
          imageUrl
          lyrics
          createdAt
          updatedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      translationId
      createdAt
      text
      lineNumber
      updatedAt
      translation {
        id
        owner
        createdAt
        songId
        rating
        lyrics {
          original
          translation
        }
        updatedAt
        song {
          id
          artistId
          albumId
          geniusId
          title
          artistName
          albumName
          imageUrl
          lyrics
          createdAt
          updatedAt
        }
      }
      owner
    }
  }
`;
