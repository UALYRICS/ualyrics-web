/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
export const createTranslation = /* GraphQL */ `
  mutation CreateTranslation(
    $input: CreateTranslationInput!
    $condition: ModelTranslationConditionInput
  ) {
    createTranslation(input: $input, condition: $condition) {
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
export const updateTranslation = /* GraphQL */ `
  mutation UpdateTranslation(
    $input: UpdateTranslationInput!
    $condition: ModelTranslationConditionInput
  ) {
    updateTranslation(input: $input, condition: $condition) {
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
export const deleteTranslation = /* GraphQL */ `
  mutation DeleteTranslation(
    $input: DeleteTranslationInput!
    $condition: ModelTranslationConditionInput
  ) {
    deleteTranslation(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createTranslationRequest = /* GraphQL */ `
  mutation CreateTranslationRequest(
    $input: CreateTranslationRequestInput!
    $condition: ModelTranslationRequestConditionInput
  ) {
    createTranslationRequest(input: $input, condition: $condition) {
      id
      songId
      owner
      ownerName
      createdAt
      isComplete
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
export const updateTranslationRequest = /* GraphQL */ `
  mutation UpdateTranslationRequest(
    $input: UpdateTranslationRequestInput!
    $condition: ModelTranslationRequestConditionInput
  ) {
    updateTranslationRequest(input: $input, condition: $condition) {
      id
      songId
      owner
      ownerName
      createdAt
      isComplete
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
export const deleteTranslationRequest = /* GraphQL */ `
  mutation DeleteTranslationRequest(
    $input: DeleteTranslationRequestInput!
    $condition: ModelTranslationRequestConditionInput
  ) {
    deleteTranslationRequest(input: $input, condition: $condition) {
      id
      songId
      owner
      ownerName
      createdAt
      isComplete
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
