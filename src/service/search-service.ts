import Genius from "genius-lyrics";
import {Song} from '../model/song';

export const search = async (term: string) => {
  const Client = new Genius.Client('aH2LpSO9r9gVRGsxv-eazJoBu7ka8FRhp-lTUPeJRqVkOUy5W13oApk3ds67HZBpiLEs2j8Bln-jfagNKYn_sg'); // Scrapes if no key is provided
  return (await Client.songs.search(term)).map(s => ({name: s.title, geniusId: s.id} as Song));
}