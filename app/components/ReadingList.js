import React from "react";

const ReadingList = ({ list, removeFromReadingList }) => {
  return (
    <div className="px-6">
      <h2 className="mb-4 text-2xl font-bold text-center">Teacher's List</h2>
      <div className="flex flex-wrap gap-4 sm:grid sm:grid-cols-2 sm:gap-4 mx:22">
        {list.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg flex flex-col w-[150px] cursor-pointer"
          >
            <div className="mb-4">
              <img
                src={book.coverPhotoURL}
                alt={`${book.title} cover`}
                className="w-full"
              />
            </div>
            <div className="flex-grow">
              <p className="text-base leading-relaxed font-weight-800">
                {book.title}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-[12px] leading-relaxed">
                by {book.author}
              </p>
            </div>
            <button
              onClick={() => removeFromReadingList(book)}
              className="py-2 mt-4 text-white bg-red-500 rounded"
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
