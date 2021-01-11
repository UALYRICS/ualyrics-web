import Genius from "genius-lyrics";
import {Song} from '../model/song';

export const search = async (term: string) => {
  const Client = new Genius.Client('_NqU5X3ywTnBAzvmVglDNeMDPiYBdsNGOEnmAcRKJO-P2nhMtDXz9MSoUbyfR7CZ'); // Scrapes if no key is provided
  return (await Client.songs.search(term)).map(s => ({name: s.title, geniusId: s.id} as Song));
}