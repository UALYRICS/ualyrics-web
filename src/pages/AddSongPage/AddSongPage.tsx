import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Song as GeniusSong } from "genius-lyrics";
import { getGeniusSongById } from '../../service/song-service';
import { scrapLyrics } from '../../service/lyrics-service';
import { LyricsLine, Song } from '../../models';
import { saveSongTranslation } from '../../service/translation-serice';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { mapGeniusSongToSong } from "../../mappers/mappers";
import { SongDetails } from "../../componenets/Song/SongDetails";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const AddSongPage = () => {
  const geniusId = parseInt(useQuery().get("geniusId") || '');

  const [song, setSong] = useState<Song>();
  //const [lyrics, setLyrics] = useState<LyricsLine[]>();

  useEffect(() => {
    async function getData() {
      try {
        const songData = await getGeniusSongById(geniusId) as GeniusSong;
        const lyricsData = await scrapLyrics(songData.url);
        const lyrics = lyricsData!.getLyrics!.body.split('\n').map((line, index) => ({number: index, original: line} as LyricsLine));
        setSong(mapGeniusSongToSong(songData, lyrics));
      } catch (error) {
        console.error("Error fetching lyrics or song", error);
      }
    }
    getData();
  }, [geniusId]);

  function handleLyricsChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    song!.lyrics[index] = {number: song!.lyrics![index]!.number, original: song!.lyrics![index]!.original, translation: e.target.value} ;
    setSong(song);
  }
  
  function handleSave(){
    saveSongTranslation(song!);
  }

  return (
    <>
      <SongDetails song={song} />
      <br/>
      <div><b>Lyrics:</b></div>
      {song?.lyrics?.map((line, index) => {
        const translationEl = line!.original.length === 0 ?
        (<br/>) :
        (<input type="text" value={song!.lyrics![index]!.translation} onChange={(e) => handleLyricsChange(e, index)} />)
          return (
            <div key={index}>
              <div>{line!.original}</div>
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