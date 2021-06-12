import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { LyricsLine, Song, Translation } from '../../models';
import { getSongById } from "../../service/song-service";
import { SongTranslationForm } from "./SongLyricsForm";
import { createTranslation, getTranslationById, updateTranslation } from "../../service/translations-service";
import { useHistory } from "react-router"
import useAuth from "../../componenets/Auth/UseAuth";
import { LeftTitleSection } from "../../componenets/Decor/LeftTitleSection";

const AddTranslationPage: FunctionComponent<{}> = () => {
  let { songId } = useParams<{songId: string}>();
  let history = useHistory();

  const [song, setSong] = useState<Song>();
  const [lyrics, setLyrics] = useState<Array<LyricsLine>>([]);
  const [titleTranslation, setTitleTranslation] = useState<string>('');
  const [existing, setExisting] = useState<Translation | null>();
  const {currentUser} = useAuth();

  useEffect(() => {
    async function getData() {
      if(!currentUser){
        return;
      }
      const songData = await getSongById(songId);
      setSong(songData);
  
      const existingTranslation = songData.translations?.find(t => t?.owner === currentUser.username);
      setExisting(existingTranslation);

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
    if(existing){
      updateTranslation({
        id: existing.id,
        title: titleTranslation,
        lyrics,
      });
    } else {
      createTranslation({
        songId: song!.id,
        title: titleTranslation,
        rating: 0,
        owner: currentUser!.username,
        ownerName: currentUser!.attributes.name,
        lyrics,
      });
    }

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

  const handleTitleChange = (value: string) => {
    setTitleTranslation(value);
  }

  if(!song || ! lyrics){
    return <></>;
  }

  const disabled = lyrics
    .filter(l => l.original.length > 0)
    .map(l => l.translation)
    .filter(t => t.length === 0)
    .length !== 0
    ||
    titleTranslation.length === 0;

  return (
    <>
      <LeftTitleSection title="Додати переклад"/>
      <SongTranslationForm lyrics={lyrics} titleTranslation={titleTranslation} song={song} handleChange={handleChange} handleTitleChange={handleTitleChange}  />
      <br/>
      <div>
        <button className="btn btn-outline-dark btn-light btn-lg btn-block" onClick={handleSave} disabled={disabled}>Опублікувати переклад</button>
      </div>
    </>
  )
}

export default AddTranslationPage;