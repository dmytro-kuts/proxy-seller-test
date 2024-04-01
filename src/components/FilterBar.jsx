import React from 'react';

const FilterBar = ({ sortOrder, onSortChange }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <select className="filter-bar" aria-label='Sort Order:' value={sortOrder} onChange={handleSortChange}>
      <option value="asc">Sort A-Z</option>
      <option value="desc">Sort Z-A</option>
    </select>
  );
};

export default FilterBar;

