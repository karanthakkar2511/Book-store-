import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const handleFilter = () => {
    onFilter({ genre, author, date });
  };

  return (
    <div className="filter-bar p-4 bg-white shadow-md rounded-lg flex flex-wrap gap-4 justify-center md:justify-start items-center">
      <input
        type="text"
        placeholder="Search by Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Search by Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterBar;
