import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { LyricsLine, Song } from '../../models';
import { getSongById } from "../../service/song-service";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { SongLyricsForm } from "./SongLyricsForm";
import { createTranslation, getTranslationById } from "../../service/translations-service";
import { useHistory } from "react-router"

import { Auth } from "aws-amplify";

const AddTranslationPage: FunctionComponent<{}> = () => {
  let { songId } = useParams();
  let history = useHistory();

  const [song, setSong] = useState<Song>();
  const [lyrics, setLyrics] = useState<Array<LyricsLine>>([]);

  useEffect(() => {
    async function getData() {
      const currentUser = await Auth.currentUserInfo();
      const songData = await getSongById(songId);
      setSong(songData);

      const existingTranslation = songData.translations?.find(t => t?.owner === currentUser.username);
      if(existingTranslation){
        const existingLyrics = (await getTranslationById(existingTranslation.id)).lyrics as Array<LyricsLine>;
        setLyrics(existingLyrics);
      } else {
        setLyrics(songData.lyrics.split('\n').map((line) => ({original: line, translation: ''} as LyricsLine)));
      }
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

    history.push(`/songs/${songId}`);
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
      <br/>
      <div><button onClick={handleSave}>Опублікувати переклад</button></div>
    </>
  )
}

export default withAuthenticator(AddTranslationPage);