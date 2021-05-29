import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { SongDetails } from "../../componenets/Song/SongDetails";
import { LyricsLine, Song } from '../../models';
import { getSongById } from "../../service/song-service";
import { SongLyricsForm } from "./SongLyricsForm";
import { createTranslation, getTranslationById } from "../../service/translations-service";
import { useHistory } from "react-router"
import useAuth from "../../componenets/Auth/UseAuth";

const AddTranslationPage: FunctionComponent<{}> = () => {
  let { songId } = useParams<{songId: string}>();
  let history = useHistory();

  const [song, setSong] = useState<Song>();
  const [lyrics, setLyrics] = useState<Array<LyricsLine>>([]);
  const {currentUser} = useAuth();

  useEffect(() => {
    async function getData() {
      if(!currentUser){
        return;
      }
      const songData = await getSongById(songId);
      setSong(songData);
  
      const existingTranslation = songData.translations?.find(t => t?.owner === currentUser.username);
      if(existingTranslation){
        const translation = await getTranslationById(existingTranslation.id);
        setLyrics(translation.lyrics as Array<LyricsLine>);
      } else {
        setLyrics(songData.lyrics.split('\n').map((line) => ({original: line, translation: ''} as LyricsLine)));
      }
    }

    getData();
  }, [songId, currentUser]);

  const handleSave = async () => {
    createTranslation({
      songId: song!.id,
      rating: 0,
      owner: currentUser!.username,
      ownerName: currentUser!.attributes.name,
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

  if(!song || ! lyrics){
    return <></>;
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

export default AddTranslationPage;