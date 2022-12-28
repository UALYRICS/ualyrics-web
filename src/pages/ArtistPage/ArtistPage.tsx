import React, { useState, useEffect, FunctionComponent } from 'react';
import { Artist } from '../../models';
import { ArtistSongs } from './ArtistSongs';
import { getArtistById } from "../../service/artists-service";
import { useParams } from "react-router-dom";
import { LeftTitleSection } from '../../componenets/Decor/LeftTitleSection';
import { ArtistHeader } from './ArtistHeader';
import useDocumentTitle from '../../utils/use-document-title';

export const ArtistPage : FunctionComponent<{}> = () => {
  let { artistId } = useParams<{artistId: string}>();
  const [artist, setArtist] = useState<Artist>();

  useEffect(() => {
    async function getData() {
      try {
        const artistsData = await getArtistById(artistId!);
        setArtist(artistsData);
      } catch (error) {
        console.error("Error fetching artists", error);
      }
    }
    getData();
  }, [artistId]);

  useDocumentTitle(`${artist?.title || ''} | сторінка виконавця | UALYRICS`);

  if(!artist) {
    return <></>;
  }

  return (
    <>
      <LeftTitleSection title="Виконавець"/>
      <ArtistHeader artist={artist} />
      <ArtistSongs artist={artist!}/>
    </>
  )
};