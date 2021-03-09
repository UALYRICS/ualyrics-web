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
export const getGeniusSong = /* GraphQL */ `
  query GetGeniusSong($id: Int) {
    getGeniusSong(id: $id) {
      id
      title
      url
      header_image_thumbnail_url
      header_image_url
      song_art_image_thumbnail_url
      song_art_image_url
      album {
        id
        name
        cover_art_url
      }
      primary_artist {
        id
        name
        header_image_url
        image_url
      }
      media {
        provider
        url
      }
    }
  }
`;
export const searchGeniusSong = /* GraphQL */ `
  query SearchGeniusSong($term: String) {
    searchGeniusSong(term: $term) {
      id
      title
      url
      header_image_thumbnail_url
      header_image_url
      song_art_image_thumbnail_url
      song_art_image_url
      primary_artist {
        id
        name
        header_image_url
        image_url
      }
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
      nextToken
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
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
export const getArtistsByFirstLetter = /* GraphQL */ `
  query GetArtistsByFirstLetter(
    $firstLetter: String
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getArtistsByFirstLetter(
      firstLetter: $firstLetter
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
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
        geniusId
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
export const getAlbumsByArtistId = /* GraphQL */ `
  query GetAlbumsByArtistId(
    $artistId: ID
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAlbumsByArtistId(
      artistId: $artistId
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
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
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
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
export const getSongsByArtistId = /* GraphQL */ `
  query GetSongsByArtistId(
    $artistId: ID
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSongsByArtistId(
      artistId: $artistId
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getSongsByAlbumId = /* GraphQL */ `
  query GetSongsByAlbumId(
    $albumId: ID
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSongsByAlbumId(
      albumId: $albumId
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const getSongByGeniuslId = /* GraphQL */ `
  query GetSongByGeniuslId(
    $geniusId: Int
    $sortDirection: ModelSortDirection
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSongByGeniuslId(
      geniusId: $geniusId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const listTranslations = /* GraphQL */ `
  query ListTranslations(
    $filter: ModelTranslationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTranslations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTranslation = /* GraphQL */ `
  query GetTranslation($id: ID!) {
    getTranslation(id: $id) {
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
export const getTranslationsBySongId = /* GraphQL */ `
  query GetTranslationsBySongId(
    $songId: ID
    $rating: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTranslationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTranslationsBySongId(
      songId: $songId
      rating: $rating
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTranslationsByOwner = /* GraphQL */ `
  query GetTranslationsByOwner(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTranslationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTranslationsByOwner(
      owner: $owner
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const getCommentsByTranslationId = /* GraphQL */ `
  query GetCommentsByTranslationId(
    $translationId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByTranslationId(
      translationId: $translationId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
