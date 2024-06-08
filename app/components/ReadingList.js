import React from "react";
import Image from "next/image";

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
              className="w-32 h-32 rounded-md mb-4"
            />
            <div className="flex-grow text-center">
              {/* <p className="font-bold">{book.title}</p> */}
              <p className="text-gray-600">by {book.author}</p>
            </div>
            <button
              onClick={() => removeFromReadingList(book)}
              className="bg-orangeRed text-white p-2 rounded mt-4"
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
