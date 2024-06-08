import React from "react";

const ReadingList = ({ list, removeFromReadingList }) => {
  return (
    <div className="my-8">
      <h2 className="text-center text-2xl font-bold mb-4">Teacher's List</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {list.map((book, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center max-w-xs"
          >
            <img
              src={book.coverPhotoURL}
              alt={`${book.title} cover`}
              className="w-full rounded-md mb-4"
            />
            <div className="text-center">
              <p className="font-bold text-lg">{book.title}</p>
              <p className="text-gray-600">by {book.author}</p>
            </div>
            <button
              onClick={() => removeFromReadingList(book)}
              className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingList;
