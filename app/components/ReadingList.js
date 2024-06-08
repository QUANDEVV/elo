import React from "react";

const ReadingList = ({ list, removeFromReadingList }) => {
  return (
    <div className="mb-4">
      {list.map((book, index) => (
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
            onClick={() => removeFromReadingList(book)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReadingList;
