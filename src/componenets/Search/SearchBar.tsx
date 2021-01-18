import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    history.push(`/find/?searchTerm=${searchTerm}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Назва чи слова пісні" value={searchTerm} onChange={handleTermChange}/>
      <button type="submit">Пошук</button>
    </form>
  );
};