import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { LyricsLine, Song } from '../../models';
import { getSongById } from "../../service/song-service";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { SongLyricsForm } from "./SongLyricsForm";
import { createTranslation } from "../../service/translations-service";
import { Auth } from "aws-amplify";

const AddTranslationPage: FunctionComponent<{}> = () => {
  let { songId } = useParams();
  const [song, setSong] = useState<Song>();
  const [lyrics, setLyrics] = useState<Array<LyricsLine>>([]);

  useEffect(() => {
    async function getData() {
      const songData = await getSongById(songId);
      setSong(songData);
      setLyrics(songData.lyrics.split('\n').map((line) => ({original: line, translation: ''} as LyricsLine)));
    }
    getData();
  }, [songId]);

  const handleSave = async () => {
    const currentUser = await Auth.currentUserInfo();

    createTranslation({
      songId: song?.id || '',
      rating: 0,
      owner: currentUser.username,
      lyrics,
    });
  }

  const handleChange = (lineIndex: number, newValue: string) => {
    setLyrics(lyrics.map((line, i) => {
      if(i === lineIndex){
        return {
          original: line.original, 
          translation: newValue,
        };
      } else {
        return line;
      }
    }));
  }

  return (
    <>
      <SongDetails song={song}/>
      <SongLyricsForm lyrics={lyrics} handleChange={handleChange} />
      <div><button onClick={handleSave}>Save</button></div>
    </>
  )
}

export default withAuthenticator(AddTranslationPage);