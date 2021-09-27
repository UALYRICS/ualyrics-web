import { GeniusSong, GeniusSongEntry } from "../models";
import { API } from "aws-amplify";
import { getGeniusSong, getGeniusSongsByArtistId, searchGeniusSong as searchGeniusSongQuery } from "../graphql/queries";
import { GraphQLResult, GRAPHQL_AUTH_MODE  } from "@aws-amplify/api";
import { GetGeniusSongQuery, GetGeniusSongsByArtistIdQuery, SearchGeniusSongQuery } from "../API";

export const getGeniusSongById = async (geniusId: number): Promise<GeniusSong> => {
  const results = await API.graphql({
    query: getGeniusSong,
    variables: {
      id: geniusId,
      geniusApiKey: process.env.REACT_APP_GENIUS_API_KEY,
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetGeniusSongQuery>;

  const geniusSong = results.data?.getGeniusSong;

  return {
    id: geniusSong?.id,
    title: geniusSong?.title,
    song_art_image_thumbnail_url: geniusSong?.song_art_image_thumbnail_url,
    url: geniusSong?.url,
    header_image_url: geniusSong?.header_image_url,
    header_image_thumbnail_url: geniusSong?.header_image_url,
    song_art_image_url: geniusSong?.song_art_image_url,
    media: geniusSong?.media,
    path: geniusSong?.path,
    album: {
      id: geniusSong?.album?.id,
      artistId: geniusSong?.primary_artist.id,
      name: geniusSong?.album?.name,
      cover_art_url: geniusSong?.album?.cover_art_url,
      url: geniusSong?.album?.url,
    },
    primary_artist: {
      id: geniusSong?.primary_artist.id,
      name: geniusSong?.primary_artist.name,
      image_url: geniusSong?.primary_artist.image_url,
      header_image_url: geniusSong?.primary_artist.header_image_url,
      url: geniusSong?.primary_artist.url,
    }
  } as GeniusSong;
}

export const searchGeniusSong = async (term: string): Promise<Array<GeniusSongEntry>> => {
  const results = await API.graphql({
    query: searchGeniusSongQuery,
    variables: {
      term,
      geniusApiKey: process.env.REACT_APP_GENIUS_API_KEY,
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<SearchGeniusSongQuery>;

  return results.data?.searchGeniusSong?.map(geniusSong => {
    return {
      id: geniusSong?.id,
      title: geniusSong?.title,
      song_art_image_thumbnail_url: geniusSong?.song_art_image_thumbnail_url,
      url: geniusSong?.url,
      header_image_url: geniusSong?.header_image_url,
      header_image_thumbnail_url: geniusSong?.header_image_url,
      primary_artist: {
        id: geniusSong?.primary_artist.id,
        name: geniusSong?.primary_artist.name,
        image_url: geniusSong?.primary_artist.image_url,
        header_image_url: geniusSong?.primary_artist.header_image_url,
      }
    } as GeniusSongEntry
  } ) || [];
}

export const getGeniusSongsForArtist = async (id: number): Promise<Array<GeniusSongEntry>> => {
  const results = await API.graphql({
    query: getGeniusSongsByArtistId,
    variables: {
      id,
      geniusApiKey: process.env.REACT_APP_GENIUS_API_KEY,
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetGeniusSongsByArtistIdQuery>;

  return results.data?.getGeniusSongsByArtistId?.map(geniusSong => {
    return {
      id: geniusSong?.id,
      title: geniusSong?.title,
      song_art_image_thumbnail_url: geniusSong?.song_art_image_thumbnail_url,
      url: geniusSong?.url,
      header_image_url: geniusSong?.header_image_url,
      header_image_thumbnail_url: geniusSong?.header_image_url,
      primary_artist: {
        name: geniusSong?.primary_artist.name,
      }
    } as GeniusSongEntry
  } ) || [];
};