import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a book..."
        className="p-4 border border-gray-300 rounded-lg w-full max-w-2xl shadow-sm focus:outline-none focus:border-turquoise"
      />
    </div>
  );
};

export default SearchBar;
