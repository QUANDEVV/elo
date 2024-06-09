import React from "react";

const SearchResults = ({ results, addToReadingList }) => {
    if (results.length === 0) {
      return null; // Don't render anything if there are no results
    }

  return (
    <div className="absolute z-10 w-full max-w-2xl mx-auto mt-2 overflow-y-auto transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg left-1/2 max-h-96 sm:w-[360px]">
      {
        results.map((book, index) => (
          <div
            key={index}
            className="flex items-center p-4 transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50"
          >
            <img
              src={book.coverPhotoURL}
              alt={`${book.title} cover`}
              className="w-16 h-16 mr-4 rounded-md shadow-sm"
            />
            <div className="flex-grow">
              <p className="font-semibold text-gray-900">{book.title}</p>
              <p className="text-sm text-gray-600">by {book.author}</p>
            </div>
            <button
              onClick={() => addToReadingList(book)}
              className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 rounded-md shadow bg-turquoise hover:bg-dark-turquoise"
            >
              Add
            </button>
          </div>
        
      
      ))}
    </div>
  );
};

export default SearchResults;
