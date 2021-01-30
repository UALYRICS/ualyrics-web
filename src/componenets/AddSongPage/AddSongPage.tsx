import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Song as GeniusSong } from "genius-lyrics";
import { getGeniusSongById } from '../../service/song-service';
import { scrapLyrics } from '../../service/lyrics-service';
import { LyricsLine, Song } from '../../models';
import { saveSongTranslation } from '../../service/translation-serice';
import { withAuthenticator } from "@aws-amplify/ui-react";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const AddSongPage = () => {
  const geniusId = parseInt(useQuery().get("geniusId") || '');

  const [song, setSong] = useState<GeniusSong>();
  const [lyrics, setLyrics] = useState<LyricsLine[]>();

  useEffect(() => {
    async function getData() {
      try {
        const songData = await getGeniusSongById(geniusId) as GeniusSong;
        setSong(songData);
        const lyricsData = await scrapLyrics(songData.url);
        setLyrics(lyricsData?.getLyrics?.body.split('\n').map((line, index) => ({number: index, original: line} as LyricsLine)));
      } catch (error) {
        console.error("Error fetching lyrics or song", error);
      }
    }
    getData();
  }, [geniusId]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    lyrics![index] = {number: lyrics![index].number, original: lyrics![index].original, translation: e.target.value} ;
    setLyrics(lyrics);
  }
  
  function handleSave(){
    const newSong = {
      id: '',
      title: song?.title,
      externalId: song?.id.toString(),
      lyrics,
      imageUrl: song?.thumbnail,
      artist: {
        title: song?.artist.name,
        thumbnailUrl: song?.artist.thumbnail,
        firstLetter: song?.artist?.name.charAt(0),
        externalId: song?.artist.id.toString(),
      },
      album: {
        externalId: song?.raw.album?.id.toString(),
        title: song?.raw.album?.name,
        thumbnailUrl: song?.raw.album?.cover_art_url
      }
    } as Song;
    saveSongTranslation(newSong);
  }

  return (
    <>
      <img src={song?.thumbnail} alt="Album cover" />
      <div><b>Title:</b></div>
      <div>{song?.title}</div>
      <br/>
      <div><b>By:</b></div>
      <div>{song?.artist.name}</div>
      <br/>
      <div><b>Lyrics:</b></div>
      {lyrics?.map((line, index) => {
        const translationEl = line.original.length === 0 ?
        (<br/>) :
        (<input type="text" value={lyrics[index].translation} onChange={(e) => handleChange(e, index)} />)
          return (
            <div key={index}>
              <div>{line.original}</div>
              <div>{translationEl}</div>
            </div>
          )
        }
      )}
      <div><button onClick={handleSave}>Save</button></div>
    </>
  );
}

export default withAuthenticator(AddSongPage);