import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--blue bg-lightest-blue"
        type="search"
        placeholder="Search Universe"
        onChange={(searchfield, searchChange)}
      />
    </div>
  );
};

export default SearchBox;
