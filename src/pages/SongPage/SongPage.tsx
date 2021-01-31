import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { SongLyrics } from "../../componenets/Song/SongLyrics";
import { Song } from "../../models";
import { getSongById } from "../../service/song-service"; 
import "./SongPage.css";

export const SongPage = () => {
  let { songId } = useParams();
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    async function getData() {
      try {
        const songData = await getSongById(songId);
        setSong(songData);
      } catch (error) {
        console.error("Error fetching song", error);
      }
    }
    getData();
  }, [songId]);
  return (
    <>
      <SongDetails song={song}/>
      <SongLyrics song={song!} />
    </>
  )
}