import axios from "axios";
import htmlparser from "node-html-parser";

export const scrapLyrics = async (songGeniusId: Number) => {
  const url = process.env.REACT_APP_GENIUS_WEB_URL ? process.env.REACT_APP_GENIUS_WEB_URL : '';
  const { data } = await axios.get(`${url}/songs/${songGeniusId}`);
  const DOM = htmlparser(data);
  const lyricsDiv = DOM.querySelector(".lyrics");
  if (!lyricsDiv || !lyricsDiv.text) throw new Error('No results');

  return lyricsDiv.text.trim();
};