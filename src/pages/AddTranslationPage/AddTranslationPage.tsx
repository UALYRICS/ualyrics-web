import React, {useState, useEffect, FunctionComponent} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LyricsLine, Song, Translation } from '../../models';
import { getSongById } from "../../service/song-service";
import { SongTranslationForm } from "./SongLyricsForm";
import { createSongTranslation, getTranslationById, updateTranslation } from "../../service/translations-service";
import useAuth from "../../componenets/Auth/UseAuth";
import { LeftTitleSection } from "../../componenets/Decor/LeftTitleSection";
import useDocumentTitle from '../../utils/use-document-title';

const AddTranslationPage: FunctionComponent<{}> = () => {
  let { songId } = useParams<{songId: string}>();
  let navigate = useNavigate();

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
      const songData = await getSongById(songId!);
      setSong(songData);
  
      const existingTranslation = songData.translations?.find(t => t?.owner === currentUser.username);
      setExisting(existingTranslation);

      if(existingTranslation){
        const translation = await getTranslationById(existingTranslation.id);
        setLyrics(translation.lyrics as Array<LyricsLine>);
        setTitleTranslation(translation.title);
      } else {
        setLyrics(songData.lyrics.split('\n').map((line) => ({original: line, translation: ''} as LyricsLine)));
      }
    }

    getData();
  }, [songId, currentUser]);

  const handleSave = async () => {
    let translationId: string;
    if(existing){
      translationId = (await updateTranslation({
        id: existing.id,
        title: titleTranslation,
        lyrics,
      })).data?.updateTranslation?.id!;
    } else {
      const idSuffix = song!.translations!.length === 0 ? '' : `(${song!.translations!.length + 1})`;
      translationId = (await createSongTranslation({
        id: song!.id + idSuffix,
        songId: song!.id,
        title: titleTranslation,
        rating: 0,
        owner: currentUser!.username,
        ownerName: currentUser!.attributes.name,
        lyrics,
      })).id;
    }

    navigate(`/translations/${translationId}`);
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

  useDocumentTitle(`${song?.artistName || ''} - ${song?.title || ''} | додати переклад | UALYRICS`);

  if(!song || ! lyrics){
    return <></>;
  }

  const disabled = 
    lyrics.length === 0
    || titleTranslation.length === 0
    || lyrics
    .filter(l => l.original.length > 0)
    .map(l => l.translation)
    .filter(t => t.length === 0)
    .length !== 0;

  return (
    <>
      <LeftTitleSection title="Додати переклад"/>
      <SongTranslationForm lyrics={lyrics} titleTranslation={titleTranslation} song={song} handleChange={handleChange} handleTitleChange={handleTitleChange}  />
      <button className="btn btn-outline-dark btn-light btn-lg btn-block my-3" data-test="submit-translation-button"onClick={handleSave} disabled={disabled}>Опублікувати переклад</button>
    </>
  )
}

export default AddTranslationPage;