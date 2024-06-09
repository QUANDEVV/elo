import React from "react";

const SearchResults = ({ results, addToReadingList }) => {
  return (
    <div className="absolute z-10 w-full max-w-2xl mx-auto overflow-y-auto transform -translate-x-1/2 bg-white rounded-lg shadow-lg left-1/2 max-h-96">
      {results.map((book, index) => (
        <div
          key={index}
          className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100"
        >
          <img
            src={book.coverPhotoURL}
            alt={`${book.title} cover`}
            width={64}
            height={64}
            className="w-16 h-16 mr-4 rounded-md"
          />
          <div className="flex-grow">
            <p className="font-bold">{book.title}</p>
            <p className="text-gray-600">by {book.author}</p>
          </div>
          <button
            onClick={() => addToReadingList(book)}
            className="p-2 text-white rounded bg-turquoise"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
