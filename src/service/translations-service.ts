import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { CreateTranslationInput, CreateTranslationMutation } from "../API";
import { createTranslation as createTranslationMutation } from "../graphql/mutations";
import { API } from "aws-amplify";


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