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
      hasTranslations
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
          youtubeLink
          spotifyLink
          soundcloudLink
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
      hasTranslations
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
          youtubeLink
          spotifyLink
          soundcloudLink
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
      hasTranslations
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
          youtubeLink
          spotifyLink
          soundcloudLink
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
          youtubeLink
          spotifyLink
          soundcloudLink
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
          youtubeLink
          spotifyLink
          soundcloudLink
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
          youtubeLink
          spotifyLink
          soundcloudLink
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
      youtubeLink
      spotifyLink
      soundcloudLink
      createdAt
      updatedAt
      artist {
        id
        geniusId
        firstLetter
        title
        description
        thumbnailUrl
        hasTranslations
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
      translations {
        items {
          id
          owner
          ownerName
          createdAt
          songId
          rating
          title
          updatedAt
        }
        nextToken
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
      youtubeLink
      spotifyLink
      soundcloudLink
      createdAt
      updatedAt
      artist {
        id
        geniusId
        firstLetter
        title
        description
        thumbnailUrl
        hasTranslations
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
      translations {
        items {
          id
          owner
          ownerName
          createdAt
          songId
          rating
          title
          updatedAt
        }
        nextToken
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
      youtubeLink
      spotifyLink
      soundcloudLink
      createdAt
      updatedAt
      artist {
        id
        geniusId
        firstLetter
        title
        description
        thumbnailUrl
        hasTranslations
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
      translations {
        items {
          id
          owner
          ownerName
          createdAt
          songId
          rating
          title
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateTranslation = /* GraphQL */ `
  subscription OnCreateTranslation($owner: String) {
    onCreateTranslation(owner: $owner) {
      id
      owner
      ownerName
      createdAt
      songId
      rating
      lyrics {
        original
        translation
      }
      title
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
        youtubeLink
        spotifyLink
        soundcloudLink
        createdAt
        updatedAt
        artist {
          id
          geniusId
          firstLetter
          title
          description
          thumbnailUrl
          hasTranslations
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
        translations {
          nextToken
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
      ownerName
      createdAt
      songId
      rating
      lyrics {
        original
        translation
      }
      title
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
        youtubeLink
        spotifyLink
        soundcloudLink
        createdAt
        updatedAt
        artist {
          id
          geniusId
          firstLetter
          title
          description
          thumbnailUrl
          hasTranslations
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
        translations {
          nextToken
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
      ownerName
      createdAt
      songId
      rating
      lyrics {
        original
        translation
      }
      title
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
        youtubeLink
        spotifyLink
        soundcloudLink
        createdAt
        updatedAt
        artist {
          id
          geniusId
          firstLetter
          title
          description
          thumbnailUrl
          hasTranslations
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
        translations {
          nextToken
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
        ownerName
        createdAt
        songId
        rating
        lyrics {
          original
          translation
        }
        title
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
          youtubeLink
          spotifyLink
          soundcloudLink
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
        ownerName
        createdAt
        songId
        rating
        lyrics {
          original
          translation
        }
        title
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
          youtubeLink
          spotifyLink
          soundcloudLink
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
        ownerName
        createdAt
        songId
        rating
        lyrics {
          original
          translation
        }
        title
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
          youtubeLink
          spotifyLink
          soundcloudLink
          createdAt
          updatedAt
        }
      }
      owner
    }
  }
`;
export const onCreateTranslationRequest = /* GraphQL */ `
  subscription OnCreateTranslationRequest($owner: String) {
    onCreateTranslationRequest(owner: $owner) {
      songId
      owner
      ownerName
      createdAt
      isComplete
      updatedAt
    }
  }
`;
export const onUpdateTranslationRequest = /* GraphQL */ `
  subscription OnUpdateTranslationRequest($owner: String) {
    onUpdateTranslationRequest(owner: $owner) {
      songId
      owner
      ownerName
      createdAt
      isComplete
      updatedAt
    }
  }
`;
export const onDeleteTranslationRequest = /* GraphQL */ `
  subscription OnDeleteTranslationRequest($owner: String) {
    onDeleteTranslationRequest(owner: $owner) {
      songId
      owner
      ownerName
      createdAt
      isComplete
      updatedAt
    }
  }
`;
