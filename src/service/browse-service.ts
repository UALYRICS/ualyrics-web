import { Char } from "../models/char";
import { Artist } from "../models";
import { API } from "aws-amplify";
import { GraphQLResult, GRAPHQL_AUTH_MODE  } from "@aws-amplify/api";

export async function fetchArtistsByFirstLetter(firstLetter: Char): Promise<Artist[]> {
  const getArtistsWithTranslationsByFirstLetter = /* GraphQL */ `
    query GetArtistsByFirstLetter(
      $firstLetter: String
    ) {
      getArtistsByFirstLetter(
        firstLetter: $firstLetter
      ) {
        items {
          id
          geniusId
          firstLetter
          title
          description
          thumbnailUrl
          hasTranslations
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  `;

  type GetArtistsWithTranslationsByFirstLetterQuery = {
    getArtistsByFirstLetter?:  {
      items?:  Array< {
        id: string,
        geniusId: number,
        firstLetter: string,
        title: string,
        description?: string,
        thumbnailUrl: string,
        createdAt: string,
        updatedAt: string,
        hasTranslations: boolean,
      } >,
    },
  };

  const results = await API.graphql({
    query: getArtistsWithTranslationsByFirstLetter,
    variables: {firstLetter: firstLetter.getValue, limit: 200},
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetArtistsWithTranslationsByFirstLetterQuery>;

  return results.data!.getArtistsByFirstLetter!.items!
  .map(item => ({
    id: item.id,
    title: item.title,
    geniusId: item.geniusId,
    thumbnailUrl: item.thumbnailUrl,
    description: item.description,
    hasTranslations: item.hasTranslations || false,
  } as Artist))
  .filter(artist => artist.hasTranslations)
  ;
}
