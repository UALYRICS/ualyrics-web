import { FunctionComponent, useState } from 'react';
import { Char } from '../../../models/char';
import { LETTERS } from '../../../utils/constants';
import { fetchArtistsByFirstLetter } from "../../../service/browse-service";
import { Artist, Song } from "../../../models";
import { useHistory } from "react-router";
import "./TranslationSelector.css";
import { getArtistById } from '../../../service/artists-service';

export const TranslationSelector: FunctionComponent<{}> = () => {
  let history = useHistory();

  const [artists, setArtists] = useState<Array<Artist>>([]);
  const [songs, setSongs] = useState<Array<Song | null>>([]);
  const [songId, setSongId] = useState<string>();

  async function firstLetterSelecter({target}) {
    resetArtists();
    if(!LETTERS.includes(target.value)){
      return;
    }
    const artistsData = await fetchArtistsByFirstLetter(new Char(target.value));
    setArtists(artistsData);
  }

  async function artistTitleSelected({target}) {
    if(target.value === 'Оберіть ім\'я виконавця'){
      resetSongs();
      return;
    }
    const artist = await getArtistById(target.value);
    setSongs(artist!.songs!.filter(song => song!.translations!.length !== 0));
    resetSongId();
  }

  function songSelected({target}) {
    if(target.value === 'Оберіть пісню'){
      resetSongId();
      return;
    }
    setSongId(target.value);
  }

  function goToSongPage() {
    const translationId = songs.find(song => song!.id === songId)!.translations![0]?.id;
    history.push(`/translations/${translationId}`);
  }

  function resetArtists() {
    setArtists([]);
    resetSongs();
  }

  function resetSongs() {
    setSongs([]);
    resetSongId();
  }

  function resetSongId(){
    setSongId(undefined);
  }

  return (
    <div className="translation-selector my-2">
      <div className="translation-selector-header subheader">Перейти до перекладу</div>
      <form>
        <select className="form-control my-2" onChange={firstLetterSelecter} data-test="first-letter-select">
          <option key={"-"}>Оберіть першу літеру імені виконавця</option>
          {[...LETTERS].map(l => <option value={l} key={l}>{l}</option>)}
        </select>
        <select className="form-control my-2" onChange={artistTitleSelected} data-test="artist-title-select">
          <option key={"-"}>Оберіть ім'я виконавця</option>
          {artists.map(artist => <option value={artist.id} key={artist.id}>{artist.title}</option>)}
        </select>
        <select className="form-control my-2" onChange={songSelected} data-test="song-select">
          <option key={"-"}>Оберіть пісню</option>
          {songs.map(song => <option value={song!.id} key={song!.id}>{song!.title}</option>)}
        </select>
        <button type="submit" className="btn btn-block btn-outline-dark mt-4" disabled={!songId} onClick={goToSongPage} data-test="go-to-translation-button">Перейти</button>
      </form>
    </div>
  );
}