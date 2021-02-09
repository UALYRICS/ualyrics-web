import React, { useState, useEffect } from "react";
import { searchGeniusSong } from '../../service/genius-service';
import { useLocation, Link } from "react-router-dom";
import './SearchPage.css';
import { GeniusSongEntry } from "../../models";

export const SearchPage = () => {
  let query = useQuery();
  let searchTerm = query.get("searchTerm") || "";
  const [searchResults, setSearchResults] = useState(new Array<GeniusSongEntry>());

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    function getData() {
      searchGeniusSong(searchTerm).then(results => setSearchResults(results));
    }
    getData();
  }, [searchTerm]);

  if(searchResults.length === 0){
    return <></>;
  }

  return (
    <div>
      {searchResults.map(song => (
        <div key={song.id}>
          <div className="row">
              <div>
                <img src={song.song_art_image_thumbnail_url} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4><Link to={`/song?geniusId=${song.id}`}>{song.title}</Link></h4>
                <h4>{song.primary_artist?.name}</h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
};