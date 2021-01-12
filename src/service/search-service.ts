import Genius from "genius-lyrics";
import {Song} from '../model/song';

export const search = async (term: string) => {
  const Client = new Genius.Client('i6skCYqy5w6sNOHpW32r436jn9NoQPzBikS3mAXeMQnfbJh1hg-i8y7nIPhF4oe7'); // Scrapes if no key is provided
  return (await Client.songs.search(term)).map(s => ({name: s.title, geniusId: s.id} as Song));
}