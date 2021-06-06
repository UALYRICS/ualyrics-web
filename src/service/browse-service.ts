import { Char } from "../models/char";
import { Artist, Song } from "../models";
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
          createdAt
          updatedAt
          songs {
            items {
              id
              title
              translations {
                items {
                  id
                }
              }
            }
            nextToken
          }
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
        songs?:  {
          items?:  Array< {
            id: string,
            title: string,
            translations?:  {
              items?:  Array< {
                id: string,
              }>,
            },
          }>,
        },
      } >,
    },
  };

  const results = await API.graphql({
    query: getArtistsWithTranslationsByFirstLetter,
    variables: {firstLetter: firstLetter.getValue},
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetArtistsWithTranslationsByFirstLetterQuery>;

  return results.data!.getArtistsByFirstLetter!.items!
  .map(item => ({
    id: item.id,
    title: item.title,
    geniusId: item.geniusId,
    thumbnailUrl: item.thumbnailUrl,
    description: item.description,
    songs: item.songs?.items?.map(song => ({
      id: song.id,
      title: song.title,
      translations: song.translations?.items
    } as Song))
  } as Artist))
  .filter(artist => artist.songs?.flatMap(song => song?.translations).length !== 0)
  ;
}