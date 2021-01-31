import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {scrapLyrics} from "../../service/lyrics-service"; 
import "./SongPage.css";

export const SongPage = () => {
  let { songGeniusId } = useParams();
  const [lyrics, setLyrics] = useState<string>();

  useEffect(() => {
    async function getData() {
      try {
        const lyricsData = await scrapLyrics("https://genius.com/Ceza-beatcoin-lyrics");
        setLyrics(lyricsData?.getLyrics?.body);
      } catch (error) {
        console.error("Error fetching lyrics", error);
      }
    }
    getData();
  }, [songGeniusId]);

  return <p className="lyrics">{lyrics}</p>
}