import Genius, { Song } from "genius-lyrics";

export const search = async (term: string): Promise<Array<Song>> => {
  const Client = new Genius.Client('i6skCYqy5w6sNOHpW32r436jn9NoQPzBikS3mAXeMQnfbJh1hg-i8y7nIPhF4oe7', { requestOptions: {baseURL: process.env.REACT_APP_GENIUS_API_URL} }); // Scrapes if no key is provided
  return await Client.songs.search(term);
}