import { Song } from '../../model/song';
import React from 'react';
import { search } from '../../service/search-service';

export const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("Eminem");
  const [searchResults, setSearchResults] = React.useState(new Array<Song>());
  const handleSubmit = event => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = event => {
    search(searchTerm).then(results => setSearchResults(results));
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSearch}>
          <input type="text" placeholder="Назва чи слова пісні" value={searchTerm} onChange={handleSubmit}/>
          <button type="submit">Пошук</button>
      </form>
      <ul>
      {searchResults.map(item => (
        <li>{item}</li>
      ))}
      </ul>
    </>
  );
};