import { Song } from "genius-lyrics";
import axios from "axios";

export const getGeniusSongById = async (geniusId: number): Promise<Song> => {
  const key = 'i6skCYqy5w6sNOHpW32r436jn9NoQPzBikS3mAXeMQnfbJh1hg-i8y7nIPhF4oe7';
  const url = process.env.REACT_APP_GENIUS_API_URL ? process.env.REACT_APP_GENIUS_API_URL : '';
  const response = await axios.get(`${url}/api/songs/${geniusId}`, {
    headers: {
        'Authorization': `Bearer ${key}`
    }
  });
  return new Song(response.data.response.song, key, true);
}