import React from "react";
import Image from "next/image";

const SearchResults = ({ results, addToReadingList }) => {
  return (
    <div className="max-h-96 overflow-y-auto w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg z-50">
      {results.map((book, index) => (
        <div
          key={index}
          className="p-4 border-b border-gray-200 flex items-center hover:bg-gray-100"
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
