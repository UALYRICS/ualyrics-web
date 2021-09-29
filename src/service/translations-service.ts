import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { CreateTranslationInput, CreateTranslationMutation, GetTranslationQuery, UpdateTranslationInput, UpdateTranslationMutation, DeleteTranslationInput, DeleteTranslationMutation } from "../API";
import { createTranslation as createTranslationMutation, updateTranslation as updateTranslationMutation, deleteTranslation as deleteTranslationMutation } from "../graphql/mutations";
import { updateArtist } from "./artists-service";
import { API, Storage } from "aws-amplify";
import { Translation } from "../models";
import { mapResultToTranslation } from "../mappers/mappers";

export const createSongTranslation = async (input: CreateTranslationInput): Promise<Translation> => {
  const translation = await createTranslation(input);

  await updateArtist({id: translation.song?.artist?.id!, hasTranslations: true});
  await addTranslationToLatestFile(translation);

  return translation;
}

const createTranslation = async (input: CreateTranslationInput): Promise<Translation> => {
  const result = await API.graphql({
    query: createTranslationMutation,
    variables: { input },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<CreateTranslationMutation>;

  return mapResultToTranslation(result);
}

export const updateTranslation = async (input: UpdateTranslationInput): Promise<GraphQLResult<UpdateTranslationMutation>> => {
  return API.graphql({
    query: updateTranslationMutation,
    variables: { input },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<UpdateTranslationMutation>;
} 

export const deleteTranslation = async (input: DeleteTranslationInput): Promise<GraphQLResult<DeleteTranslationMutation>> => {
  return API.graphql({
    query: deleteTranslationMutation,
    variables: { input },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<DeleteTranslationMutation>;
}

export const getTranslationById = async (id: string): Promise<Translation> => {

  const getTranslation = `
    query GetTranslation($id: ID!) {
      getTranslation(id: $id) {
        id
        owner
        title
        createdAt
        rating
        lyrics {
          original
          translation
        }
        song {
          id
          artistId
          albumId
          geniusId
          title
          artistName
          albumName
          imageUrl
          createdAt
          updatedAt
          youtubeLink
          spotifyLink
          soundcloudLink
        }
      }
    }
  `;

  const result = await API.graphql({
    query: getTranslation,
    variables: {
      id: id,
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetTranslationQuery>;

  const translation = result.data?.getTranslation;

  if(!translation){
    throw Error(`Translation with id: ${id} not found.`);
  }

  return {
    id: translation.id,
    title: translation.title,
    owner: translation.owner,
    ownerName: translation.ownerName,
    createdAt: translation.createdAt,
    rating: translation.rating,
    lyrics: translation.lyrics,
    song: {
      artistName: translation.song!.artistName,
      albumName: translation.song!.albumName || '',
      id: translation.song!.id,
      geniusId: translation.song!.geniusId,
      imageUrl: translation.song!.imageUrl,
      title: translation.song!.title,
      lyrics: '', // We do not need song lyrics, they are in translation lyrics,
      youtubeLink: translation.song?.youtubeLink || undefined,
      spotifyLink: translation.song?.spotifyLink || undefined,
      soundcloudLink: translation.song?.soundcloudLink || undefined,
      artist: {
        id: translation.song?.artistId!,
        title: translation.song?.artistName!,
        geniusId: translation.song?.artist?.geniusId || -1,
        firstLetter: translation.song?.artist?.firstLetter || '',
        thumbnailUrl: translation.song?.artist?.thumbnailUrl || '',
      }
    }
  }
}

const addTranslationToLatestFile = async (translation: Translation): Promise<Object> => {
  const translations = await getLatestTranslations();

  // Remove translation from the list if already existing
  const mutatedTranslations = translations.filter((item) => {
      return item.id !== translation.id
  });

  // Add translation to the front of the list
  mutatedTranslations.unshift(translation);

  // Trim array of translations to 100
  while(mutatedTranslations.length > 100){
    mutatedTranslations.splice(-1,1);
  }

  // Save recent translations to S3
  return saveTranslationsToS3(mutatedTranslations);
};

export const removeTranslationFromLatestFile = async (translation: Translation): Promise<void> => {
  const translations = await getLatestTranslations();

  // Remove translation from the list
  const mutatedTranslations = translations.filter((item) => {
      return item.id !== translation.id
  });

  // Save recent translations to S3
  await saveTranslationsToS3(mutatedTranslations);
}

const getLatestTranslations = async (): Promise<Array<Translation>> => {
  const data = await Storage.get(`recentlyadded.json`, { download: true, cacheControl: 'no-cache' }) as {Body: {text(): Promise<string>}};
  const recentAddadData = await data.Body.text();
  return JSON.parse(recentAddadData) as Array<Translation>;
}

const saveTranslationsToS3 = async (translations: Array<Translation>): Promise<Object> => {
    // Save recent translations to S3
    return Storage.put(`recentlyadded.json`, JSON.stringify(translations));
}