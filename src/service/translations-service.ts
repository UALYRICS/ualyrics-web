import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { CreateTranslationInput, CreateTranslationMutation, GetTranslationQuery } from "../API";
import { createTranslation as createTranslationMutation } from "../graphql/mutations";
import { API } from "aws-amplify";
import { getTranslation } from "../graphql/queries";
import { Translation } from "../models";


export const createTranslation = async (input: CreateTranslationInput): Promise<string> => {
  const result = await API.graphql({
    query: createTranslationMutation,
    variables: { input },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  }) as GraphQLResult<CreateTranslationMutation>;

  const id = result.data?.createTranslation?.id;
  if(id){
    return id;
  } else {
    throw new Error('Translation could not be created.');
  }
}

export const getTranslationById = async (id: string): Promise<Translation> => {
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
    createdAt: translation.createdAt,
    rating: translation.rating,
    lyrics: translation.lyrics,
  }
}