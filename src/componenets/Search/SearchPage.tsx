import React, { useState, useEffect } from "react";
import { search } from '../../service/search-service';
import { useLocation } from "react-router-dom";
import { Song } from "genius-lyrics";
import './SearchPage.css';
import {Link} from "react-router-dom";

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

  return (
    <div>
      {searchResults.map(item => (
        <div key={item.id}>
          <div className="row">
              <div>
                <img src={item.thumbnail} className='icon' alt="Song thumbnail" />
              </div>	
              <div className="left-margin">
                <h4><Link to={`/song/${item.id}`}>{item.title}</Link></h4>
                <h4>{item.artist?.name}</h4>
              </div>
          </div>
          <div className="clear"></div>
        </div>
      ))}
    </div>
  );
};