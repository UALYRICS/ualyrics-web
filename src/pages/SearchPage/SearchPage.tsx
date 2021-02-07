import React, { useState, useEffect } from "react";
import { search } from '../../service/search-service';
import { useLocation, Link } from "react-router-dom";
import { Song } from "genius-lyrics";
import './SearchPage.css';

export const SearchPage = () => {
  let query = useQuery();
  let searchTerm = query.get("searchTerm") || "";
  const [searchResults, setSearchResults] = useState(new Array<Song>());

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    function getData() {
      search(searchTerm).then(results => setSearchResults(results));
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
                <img src={song.thumbnail} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4><Link to={`/song?geniusId=${song.id}`}>{song.title}</Link></h4>
                <h4>{song.artist?.name}</h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
};