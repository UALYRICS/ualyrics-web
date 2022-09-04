import { GetArtistResult, SongResult } from "./result-types";
import { Artist, GeniusSong, Song, Translation } from "../models";
import { CreateTranslationMutation, GetArtistsByFirstLetterQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api-graphql";

export function mapSingleArtistResultToArtist(item: GetArtistResult): Artist {
  return {
    id: item?.id,
    firstLetter: item.title.toUpperCase().charAt(0),
    title: item?.title,
    geniusId: item?.geniusId,
    thumbnailUrl: item?.thumbnailUrl,
    description: item?.description,
    songs: item?.songs?.items?.map(mapSongResultToSong)
  } as Artist;
}

export function mapSongResultToSong(song: SongResult | null): Song {
  return {
    id: song?.id!,
    geniusId: song?.geniusId!,
    title: song?.title!,
    imageUrl: song?.imageUrl!,
    lyrics: song?.lyrics!,
    artistName: song?.artistName!,
    albumName: song?.albumName || undefined,
    translations: song?.translations?.items,
    artist: {
      id: song?.artistId,
      title: song?.artistName,
    },
    youtubeLink: song?.youtubeLink,
    spotifyLink: song?.spotifyLink,
    soundcloudLink: song?.soundcloudLink,
  } as Song;
}

export function mapResultDataToArtist(result: GraphQLResult<GetArtistsByFirstLetterQuery>): Artist | undefined {
  const itemsList = result?.data?.getArtistsByFirstLetter;
  return itemsList?.items?.map(item => {
    return {
    id: item?.id,
    title: item?.title,
    geniusId: item?.geniusId,
    thumbnailUrl: item?.thumbnailUrl,
    description: item?.description,
    hasTranslations: item?.hasTranslations,
  } as Artist}
  )[0];
}

export function mapResultToTranslation(graphQLResult: GraphQLResult<CreateTranslationMutation>): Translation {
  const result = graphQLResult.data?.createTranslation;
  return {
    id: result?.id,
    createdAt: result?.createdAt,
    owner: result?.owner,
    ownerName: result?.ownerName,
    rating: result?.rating,
    song: {
      id: result?.song?.id,
      artistName: result?.song?.artistName,
      title: result?.song?.title,
      albumName: result?.song?.albumName,
      imageUrl: result?.song?.imageUrl,
      artist: {
        id: result?.song?.artistId,
      }
    }
  } as Translation;
}

export function mapGeniusSongToSong(geniusSong: GeniusSong, lyrics: string): Song {
  const songId = geniusSong.path.substring(1).replace(/-lyrics$/ig, '');
  const artistId = geniusSong?.primary_artist.url.substring(geniusSong?.primary_artist.url.lastIndexOf('/') + 1);
  const albumId = geniusSong?.album?.url?.substring(geniusSong?.album?.url?.lastIndexOf('/') + 1);
  return {
    id: songId, // removing leading slash and '-lyrics' sufix
    geniusId: geniusSong.id,
    title: geniusSong.title,
    imageUrl: geniusSong.song_art_image_thumbnail_url,
    lyrics: lyrics,
    artistName: geniusSong.primary_artist.name,
    albumName: geniusSong.album?.name,
    artist: {
      id: artistId,
      title: geniusSong?.primary_artist.name,
      thumbnailUrl: geniusSong?.primary_artist.image_url,
      firstLetter: geniusSong?.primary_artist?.name.charAt(0),
      geniusId: geniusSong?.primary_artist.id,
    },
    album: geniusSong.album ? {
      id: albumId || '',
      artistId: artistId,
      geniusId: geniusSong?.album?.id,
      title: geniusSong?.album?.name,
      thumbnailUrl: geniusSong?.album?.cover_art_url
    }: undefined,
    youtubeLink: geniusSong.media.find(media => media?.provider === 'youtube')?.url,
    spotifyLink: geniusSong.media.find(media => media?.provider === 'spotify')?.url,
    soundcloudLink: geniusSong.media.find(media => media?.provider === 'soundcloud')?.url,
  }
}