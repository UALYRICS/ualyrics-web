import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchBar: FunctionComponent<{}> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    history.push(`/find/?searchTerm=${searchTerm}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="input-group my-2 my-lg-0">
      <input className="form-control mr-sm-2 ml-sm-2" placeholder="Назва чи слова пісні" value={searchTerm} onChange={handleTermChange} aria-label="Пошук" />
      <button className="btn btn-outline-dark btn-light my-sm-0" type="submit">Пошук</button>
    </form>
  );
};