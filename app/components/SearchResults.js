import React from "react";

const SearchResults = ({ results, addToReadingList }) => {
  return (
    <div className="mb-4 max-h-96 overflow-y-auto">
      {results.map((book, index) => (
        <div
          key={index}
          className="p-4 border-b border-gray-200 flex items-center"
        >
          <img
            src={book.coverPhotoURL}
            alt={`${book.title} cover`}
            className="w-16 h-16 mr-4"
          />
          <div className="flex-grow">
            <p className="font-bold">{book.title}</p>
            <p>{book.author}</p>
          </div>
          <button
            onClick={() => addToReadingList(book)}
            className="bg-turquoise text-white p-2 rounded"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
