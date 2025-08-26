import React from 'react';
import './Searchbar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input type="text" className="search-input" placeholder="Buscar por categoria ou nome do produto..." />
      <input type="date" className="date-filter" />
      <button className="filter-button">Filtrar</button>
    </div>
  );
};

export default SearchBar;