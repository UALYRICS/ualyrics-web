import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { CreateTranslationInput, CreateTranslationMutation, GetTranslationQuery, UpdateTranslationInput, UpdateTranslationMutation } from "../API";
import { createTranslation as createTranslationMutation, updateTranslation as updateTranslationMutation } from "../graphql/mutations";
import { API, Storage } from "aws-amplify";
import { Translation } from "../models";

export const createTranslation = async (input: CreateTranslationInput): Promise<Translation> => {
  const result = await API.graphql({
    query: createTranslationMutation,
    variables: { input },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<CreateTranslationMutation>;

  const translationResult = result.data?.createTranslation;

  const translation = {
    id: translationResult?.id,
    createdAt: translationResult?.createdAt,
    owner: translationResult?.owner,
    ownerName: translationResult?.ownerName,
    rating: translationResult?.rating,
    song: {
      id: translationResult?.song?.id,
      artistName: translationResult?.song?.artistName,
      title: translationResult?.song?.title,
      albumName: translationResult?.song?.albumName,
      imageUrl: translationResult?.song?.imageUrl,
    }
  } as Translation;

  updateLatestFile(translation);

  return translation;
}

export const updateTranslation = async (input: UpdateTranslationInput): Promise<void> => {
  await API.graphql({
    query: updateTranslationMutation,
    variables: { input },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<UpdateTranslationMutation>;
} 

export const getTranslationById = async (id: string): Promise<Translation> => {

  const getTranslation = `
    query GetTranslation($id: ID!) {
      getTranslation(id: $id) {
        id
        owner
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

  const translation = result.data?.getTranslation!;
  return {
    id: translation.id,
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
      lyrics: '', // We do not need song lyrics, they are in translation lyrics
    }
  }
}

const updateLatestFile = async (translation: Translation) => {
  const data = await Storage.get(`recentlyadded.json`, { download: true }) as {Body: {text(): Promise<string>}};
  const recentAddadData = await data.Body.text();
  const translations = JSON.parse(recentAddadData) as Array<Translation>;

  // Remove translation from the list if already existing
  const mutatedTranslations = translations.filter(function(item) {
      return item.id !== translation.id
  });

  // Add translation to the front of the list
  mutatedTranslations.unshift(translation);

  // Trim array of translations to 10
  while(mutatedTranslations.length > 10){
    mutatedTranslations.splice(-1,1);
  }

  // Save recent translations to S3
  Storage.put(`recentlyadded.json`, JSON.stringify(mutatedTranslations));
};