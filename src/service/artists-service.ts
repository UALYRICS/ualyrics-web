import { Char } from "../models/char";
import { Artist } from "../models";
import { API } from "aws-amplify";
import { GraphQLResult, GRAPHQL_AUTH_MODE  } from "@aws-amplify/api";
import { getArtistsByFirstLetter } from "../graphql/queries";
import { createArtist as createArtistMutation, updateArtist as updateArtistMutation } from "../graphql/mutations";
import { CreateArtistInput, CreateArtistMutation, GetArtistsByFirstLetterQuery, GetArtistQuery, UpdateArtistInput, UpdateArtistMutation } from "../API";
import { mapResultDataToArtist, mapSingleArtistResultToArtist } from "../mappers/mappers";
import { LETTERS, NON_LETTER_SYMBOL_ARTISTS_URL } from "../utils/constants";

export async function createArtistIfNotExists(artist: Artist): Promise<string>{
  const existing = await fetchArtistsByFirstLetterAndTitle(new Char(getFirstLetter(artist)), artist.title);
  if(existing){
    return existing.id;
  }

  return await createArtist(artist);
}

export async function getArtistById(artistId: string): Promise<Artist> {
  const getArtist = /* GraphQL */ `
    query GetArtist($id: ID!) {
      getArtist(id: $id) {
        id
        geniusId
        title
        description
        thumbnailUrl
        albums {
          items {
            id
            geniusId
            title
            thumbnailUrl
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
            translations {
              items {
                id
              }
            }
          }
          nextToken
        }
      }
    }
  `;

  const result = await API.graphql({
    query: getArtist,
    variables: {
      id: artistId,
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetArtistQuery>;

  return mapSingleArtistResultToArtist(result.data!.getArtist!);
}

async function fetchArtistsByFirstLetterAndTitle(firstLetter: Char, title: string): Promise<Artist | undefined> {
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

  return mapResultDataToArtist(result);
}

async function createArtist(artist: Artist): Promise<string>{
  const result = await API.graphql({
    query: createArtistMutation,
    variables: { 
      input: {
        id: artist.id,
        title: artist?.title,
        geniusId: artist?.geniusId,
        firstLetter: getFirstLetter(artist),
        thumbnailUrl: artist?.thumbnailUrl,
        hasTranslations: false,
      } as CreateArtistInput
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<CreateArtistMutation>;

  const id = result.data?.createArtist?.id;
  if(id){
    return id;
  } else {
    throw new Error('Artist could not be created.');
  }
}

export function getFirstLetter(artist: Artist): string{
  const firstChar = artist?.title.toUpperCase().charAt(0);
  return LETTERS.includes(firstChar) ? firstChar : NON_LETTER_SYMBOL_ARTISTS_URL;
}

export async function updateArtist(input: UpdateArtistInput): Promise<GraphQLResult<UpdateArtistMutation>> {
  return await API.graphql({
    query: updateArtistMutation,
    variables: { 
      input
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<UpdateArtistMutation>;
}
