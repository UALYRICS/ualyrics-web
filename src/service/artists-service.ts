import { Char } from "../models/char";
import { Artist } from "../models";
import { API } from "aws-amplify";
import { GraphQLResult, GRAPHQL_AUTH_MODE  } from "@aws-amplify/api";
import { getArtistsByFirstLetter, getArtist } from "../graphql/queries";
import { createArtist as createArtistMutation } from "../graphql/mutations";
import { CreateArtistInput, CreateArtistMutation, GetArtistsByFirstLetterQuery, GetArtistQuery } from "../API";
import { mapResultDataToArtist, mapSingleArtistResultToArtist } from "../mappers/mappers";

export async function fetchArtistsByFirstLetter(firstLetter: Char): Promise<Artist[]> {
  const results = await API.graphql({
    query: getArtistsByFirstLetter,
    variables: {firstLetter: firstLetter.getValue},
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetArtistsByFirstLetterQuery>;

  return results.data!.getArtistsByFirstLetter!.items!.map(mapResultDataToArtist) || [];
}

export async function createArtistIfNotExists(artist: Artist): Promise<string>{
  const existing = await fetchArtistsByFirstLetterAndTitle(new Char(artist.title), artist.title);
  if(existing){
    return existing.id;
  }

  return await createArtist(artist);
}

export async function getArtistById(artistId: string): Promise<Artist> {
  const result = await API.graphql({
    query: getArtist,
    variables: {
      id: artistId,
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetArtistQuery>;

  return mapSingleArtistResultToArtist(result.data!.getArtist!);
}

async function fetchArtistsByFirstLetterAndTitle(firstLetter: Char, title: string): Promise<Artist | null> {
  const result = await API.graphql({
    query: getArtistsByFirstLetter,
    variables: {
      firstLetter: firstLetter.getValue,
      title: {
        eq: title
      }
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetArtistsByFirstLetterQuery>;

  return result.data!.getArtistsByFirstLetter!.items!.map(mapResultDataToArtist)[0] || null;
}

async function createArtist(artist: Artist): Promise<string>{
  const result = await API.graphql({
    query: createArtistMutation,
    variables: { 
      input: {
        title: artist?.title,
        geniusId: artist?.geniusId,
        firstLetter: artist?.title.toUpperCase().charAt(0),
        thumbnailUrl: artist?.thumbnailUrl,
      } as CreateArtistInput
    },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<CreateArtistMutation>;

  const id = result.data?.createArtist?.id;
  if(id){
    return id;
  } else {
    throw new Error('Artist could not be created.');
  }
}
