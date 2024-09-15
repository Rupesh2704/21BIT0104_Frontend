// src/components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '400px',
            height: '40px',
            borderRadius: '20px',
            padding: '10px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '10px',
            height: '40px',
            width: '100px',
            borderRadius: '20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
