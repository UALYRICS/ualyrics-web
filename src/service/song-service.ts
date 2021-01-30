import { Song as GeniusSong } from "genius-lyrics";
import axios from "axios";
import { Song } from "../models";
import { API } from "aws-amplify";
import { createSong as createSongMutation } from "../graphql/mutations";
import { CreateSongInput, CreateSongMutation } from "../API";
import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

export const getGeniusSongById = async (geniusId: number): Promise<GeniusSong> => {
  const key = 'i6skCYqy5w6sNOHpW32r436jn9NoQPzBikS3mAXeMQnfbJh1hg-i8y7nIPhF4oe7';
  const url = process.env.REACT_APP_GENIUS_API_URL ? process.env.REACT_APP_GENIUS_API_URL : '';
  const response = await axios.get(`${url}/api/songs/${geniusId}`, {
    headers: {
        'Authorization': `Bearer ${key}`
    }
  });
  return new GeniusSong(response.data.response.song, key, true);
}

export const createSong = async (artistId: string, albumId: string, song: Song): Promise<string> => {
  const result = await API.graphql({
    query: createSongMutation,
    variables: { 
      input: {
        artistId,
        albumId,
        title: song?.title,
        externalId: song?.externalId.toString(),
        imageUrl: song?.imageUrl,
        lyrics: song.lyrics
      } as CreateSongInput
    },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<CreateSongMutation>;

  const id = result.data?.createSong?.id;
  if(id){
    return id;
  } else {
    throw new Error('Song could not be created.');
  }
};