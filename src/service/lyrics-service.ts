import { API } from "aws-amplify";
import { GraphQLResult, GRAPHQL_AUTH_MODE  } from "@aws-amplify/api";
import { getLyrics } from "../graphql/queries";
import { GetLyricsQuery } from "../API";


export const scrapLyrics = async (songPath: String) => {
  const { data } = await API.graphql({
    query: getLyrics,
    variables: {url: songPath},
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as GraphQLResult<GetLyricsQuery>;

  return data;
};