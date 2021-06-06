import { FunctionComponent, useState } from 'react';
import { Char } from '../../../models/char';
import { LETTERS } from '../../../utils/constants';
import { fetchArtistsByFirstLetter } from "../../../service/browse-service";
import { Artist, Song } from "../../../models";
import { useHistory } from "react-router";
import "./TranslationSelector.css";

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
    const artist = artists.find(artist => artist.id === target.value);
    setSongs(artist!.songs!.filter(song => song?.translations?.length !== 0));
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
      history.push(`/songs/${songId}`);
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
    <div className="translation-selector mx-2 my-2">
      <form>
        <select className="form-control my-2" onChange={firstLetterSelecter}>
          <option key={"-"}>Оберіть першу літеру імені виконавця</option>
          {[...LETTERS].map(l => <option value={l} key={l}>{l}</option>)}
        </select>
        <select className="form-control my-2" onChange={artistTitleSelected}>
          <option key={"-"}>Оберіть ім'я виконавця</option>
          {artists.map(artist => <option value={artist.id} key={artist.id}>{artist.title}</option>)}
        </select>
        <select className="form-control my-2" onChange={songSelected}>
          <option key={"-"}>Оберіть пісню</option>
          {songs.map(song => <option value={song!.id} key={song!.id}>{song!.title}</option>)}
        </select>
        <button type="submit" className="btn btn-block btn-outline-dark my-4" disabled={!songId} onClick={goToSongPage}>Перейти</button>
      </form>
    </div>
  );
}