import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { ListTranslationRequestsQuery, ListTranslationRequestsQueryVariables} from "../API";
import { API } from "aws-amplify";
import { listTranslationRequests } from "../graphql/queries";
import { TranslationRequest } from "../models";

export const getTranslationRequestsList = async (input: ListTranslationRequestsQueryVariables): Promise<Array<TranslationRequest>> => {
  const result = await API.graphql({
    query: listTranslationRequests,
    variables: { input },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<ListTranslationRequestsQuery>;

  return result.data?.listTranslationRequests?.items.map(item => (item as TranslationRequest)) || [];
}