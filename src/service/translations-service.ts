import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { CreateTranslationInput, CreateTranslationMutation } from "../API";
import { createTranslation as createTranslationMutation } from "../graphql/mutations";
import { Translation } from "../models";
import { API, Auth } from "aws-amplify";


export const createTranslation = async (translation: Translation): Promise<string> => {
  const currentUser = await Auth.currentUserInfo();
  const result = await API.graphql({
    query: createTranslationMutation,
    variables: { 
      input: {
        owner: currentUser.username,
        songId: translation.song!.id,
        rating: translation.rating,
        lyrics: 'translation.lyrics',// TODO: Fix
      } as CreateTranslationInput
    },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<CreateTranslationMutation>;

  const id = result.data?.createTranslation?.id;
  if(id){
    return id;
  } else {
    throw new Error('Translation could not be created.');
  }
}