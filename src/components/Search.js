import React, { useState } from 'react';
import reactRouterDom from 'react-router-dom';
import { useGlobalContext } from '../context';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const { setSearchterm, searchInput, setSearchInput, loading } =
    useGlobalContext();
  const [searchLabel, setSearchLabel] = useState(
    'Search for a league or team...'
  );

  const handleInput = (e) => {
    e.preventDefault();
    if (searchInput.length > 2) {
      setSearchterm(searchInput);
    } else {
      setSearchLabel('Search must be at least 3 letters long');
    }
  };

  return (
    <section className="search">
      <form className="search-form form-control">
        <p className="search-label">{searchLabel}</p>
        <input
          type="text"
          id="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="btn btn-primary btn-search"
          type="submit"
          onClick={handleInput}
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>
    </section>
  );
};

export default Search;
