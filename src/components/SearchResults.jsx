import React from 'react';

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}>
          <p>Trademark: {result.trademark}</p>
          <p>Owner: {result.owner}</p>
          {/* Add other relevant fields */}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
