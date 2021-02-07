import axios from "axios";
import { Song as GeniusSong } from "genius-lyrics";

export const getGeniusSongById = async (geniusId: number): Promise<GeniusSong> => {
  const key = 'i6skCYqy5w6sNOHpW32r436jn9NoQPzBikS3mAXeMQnfbJh1hg-i8y7nIPhF4oe7';
  const url = process.env.REACT_APP_GENIUS_API_URL ? process.env.REACT_APP_GENIUS_API_URL : '';
  const response = await axios.get(`${url}/api/songs/${geniusId}`, {
    headers: {
        'Authorization': `Bearer ${key}`
    }
  });

  return new GeniusSong(response.data.response.song, key, true);
}