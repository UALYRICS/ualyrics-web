import { Char } from "../model/char";
import { Artist } from "../model/artist";

import { API } from "aws-amplify";
import { GraphQLResult, GRAPHQL_AUTH_MODE  } from "@aws-amplify/api";
import { listArtists } from "../graphql/queries";
import { ListArtistsQuery } from "../API";

export async function fetchArtistsByFirstLetter(firstLetter: Char): Promise<Array<Artist>> {
    const results = await API.graphql({
        query: listArtists,
        variables: {firstLetter: firstLetter.getValue,},
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
        }) as GraphQLResult<ListArtistsQuery>;

    return results.data?.listArtists?.items?.map(item => ({
        name: item?.name,
        geniusId: item?.geniusId,
        imageUrl: item?.imageUrl,
    }) as Artist) || [];
}
