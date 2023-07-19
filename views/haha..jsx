import React, { useState } from 'react';

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here based on searchQuery value
    console.log('Search query:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
