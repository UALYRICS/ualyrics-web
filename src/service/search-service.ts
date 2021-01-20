import { Song } from "genius-lyrics";
import axios from "axios";

export const search = async (term: string): Promise<Array<Song>> => {
  const key = 'i6skCYqy5w6sNOHpW32r436jn9NoQPzBikS3mAXeMQnfbJh1hg-i8y7nIPhF4oe7';
  const response = await axios.get(`${process.env.REACT_APP_GENIUS_API_URL}/api/search?q=${term}`, {
    headers: {
        'Authorization': `Bearer ${key}`
    }
});
return response.data.response.hits.filter(s => s.type === "song").map(s => new Song(s.result, key, true));
}