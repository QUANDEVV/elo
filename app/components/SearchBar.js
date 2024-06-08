import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-4 ">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a book..."
        className="p-2 border border-gray-300 rounded w-full"
      />
    </div>
  );
};

export default SearchBar;
