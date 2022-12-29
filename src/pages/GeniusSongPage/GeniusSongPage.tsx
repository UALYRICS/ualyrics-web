import React, { useState, useEffect, FunctionComponent } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getGeniusSong } from '../../service/song-service';
import useDocumentTitle from '../../utils/use-document-title';
import "./GeniusSongPage.css";

export const GeniusSongPage: FunctionComponent<{}> = () => {
  let { songId } = useParams<{songId: string}>();
  const [song, setSong] = useState<string>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      const songData = await getGeniusSong(parseInt(songId!));
      setSong(songData);
    }
    getData().catch(error => setError(true));
  }, [songId]);

  useDocumentTitle(`Шукаємо текст пісні... | UALYRICS`);

  if(song){
    return <Navigate to={`/songs/${song}`}/>;
  }
  if(error){
    return (
      <div className="text-center page-content">
        <h3>Халепа, текст пісні не знайдено :(</h3>
        <h6 className="text-muted">Повернутися на <Link to="/">головну</Link>.</h6>
      </div>
    );
  }
  return (
    <div className="text-center page-content">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <h3 className="mt-3">Шукаємо текст пісні...</h3>
      <h6 className="text-muted">Це може тривати до 10 секунд.</h6>
    </div>
  );
}