import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className='search'>
      <input type='text' placeholder='Search by username...' value={searchTerm} onChange={handleInputChange} className='search__input' />
    </div>
  );
};

export default SearchBar;
