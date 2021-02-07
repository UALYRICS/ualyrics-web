import axios from "axios";
import { GeniusSong, Song } from "../models";
import { API } from "aws-amplify";
import { getGeniusSong } from "../graphql/queries";
import { GraphQLResult, GRAPHQL_AUTH_MODE  } from "@aws-amplify/api";
import { GetGeniusSongQuery } from "../API";

export const getGeniusSongById = async (geniusId: number): Promise<GeniusSong> => {
  const results = await API.graphql({
    query: getGeniusSong,
    variables: {id: geniusId},
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetGeniusSongQuery>;

  const geniusSong = results.data!.getGeniusSong;

  return {
    id: geniusSong?.id,
    title: geniusSong?.title,
    song_art_image_thumbnail_url: geniusSong?.song_art_image_thumbnail_url,
    url: geniusSong?.url,
    header_image_url: geniusSong?.header_image_url,
    header_image_thumbnail_url: geniusSong?.header_image_url,
    song_art_image_url: geniusSong?.song_art_image_url,
    media: geniusSong?.media,
    album: {
      id: geniusSong?.album.id,
      artistId: geniusSong?.primary_artist.id,
      name: geniusSong?.album.name,
      cover_art_url: geniusSong?.album.cover_art_url
    },
    primary_artist: {
      id: geniusSong?.primary_artist.id,
      name: geniusSong?.primary_artist.name,
      image_url: geniusSong?.primary_artist.image_url,
      header_image_url: geniusSong?.primary_artist.header_image_url
    }
  } as GeniusSong;
}