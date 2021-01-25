import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Song } from "genius-lyrics";
import { getGeniusSongById } from '../../service/song-service';
import { scrapLyrics } from '../../service/lyrics-service';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export const AddSongPage = () => {
  const geniusId = parseInt(useQuery().get("geniusId") || '');

  const [song, setSong] = useState<Song>();
  const [lyrics, setLyrics] = useState<string>();

  useEffect(() => {
    async function getData() {
      try {
        const songData = await getGeniusSongById(geniusId) as Song;
        setSong(songData);
        const lyricsData = await scrapLyrics(songData.url);
        setLyrics(lyricsData?.getLyrics?.body);
      } catch (error) {
        console.error("Error fetching lyrics or song", error);
      }
    }
    getData();
  }, [geniusId]);

  return (
    <>
      <img src={song?.thumbnail} />
      <div><b>Title:</b></div>
      <div>{song?.title}</div>
      <br/>
      <div><b>By:</b></div>
      <div>{song?.artist.name}</div>
      <br/>
      <div><b>Lyrics:</b></div>
      <div><p className="lyrics">{lyrics}</p></div>
    </>
  );
}