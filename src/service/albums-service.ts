import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { GetAlbumsByArtistIdQuery, CreateAlbumInput, CreateAlbumMutation } from "../API";
import { getAlbumsByArtistId } from "../graphql/queries";
import { createAlbum as createAlbumMutation } from "../graphql/mutations";
import { Album } from "../models";
import { API } from "aws-amplify";

export const createAlbumIfNotExists = async (artistId: string, album: Album): Promise<string> => {
  const existing = await getAlbumByArtistIdAndTitle(artistId, album.title);
  if(existing){
    return existing.id;
  }

  return await createAlbum(artistId, album);
};


const createAlbum = async (artistId: string, album: Album): Promise<string> => {
  const result = await API.graphql({
    query: createAlbumMutation,
    variables: { 
      input: {
        artistId,
        id: album.id,
        title: album?.title,
        geniusId: album?.geniusId,
        thumbnailUrl: album?.thumbnailUrl,
      } as CreateAlbumInput
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<CreateAlbumMutation>;

  const id = result.data?.createAlbum?.id;
  if(id){
    return id;
  } else {
    throw new Error('Album could not be created.');
  }
}

const getAlbumByArtistIdAndTitle = async (artistId: string, title: string): Promise<Album|undefined> => {
  const result = await API.graphql({
    query: getAlbumsByArtistId,
    variables: {
      artistId,
      title: {
        eq: title
      }
    },
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<GetAlbumsByArtistIdQuery>;

  return result.data?.getAlbumsByArtistId?.items?.map(mapResultDataToAlbum)[0];
}

function mapResultDataToAlbum(item: {id: string, artistId: string, title: string, thumbnailUrl: string, geniusId: number} | null): Album {
  return {
    id: item?.id,
    artistId: item?.artistId,
    title: item?.title,
    thumbnailUrl: item?.thumbnailUrl,
    geniusId: item?.geniusId,
  } as Album
}
