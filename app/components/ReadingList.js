import React from "react";

const ReadingList = ({ list, removeFromReadingList }) => {
  return (
    <div className="px-6">
      <h2 className="mb-6 ml-[220px] text-[1.625rem] font-bold text-[#335C6E] sm:ml-0">
        Teacher's List
      </h2>
      <div className="grid grid-cols-2  sm:grid-cols-2 xl:grid-cols-6 gap-4 max-w-[1360px] mx-auto">
        {list.map((book, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg cursor-pointer"
          >
            <div className="mb-4">
              <img
                src={book.coverPhotoURL}
                alt={`${book.title} cover`}
                className="w-[150px] h-[150px] object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow text-center">
              <p className="text-base font-bold leading-relaxed text-gray-800">
                {book.title}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-[0.8125rem] font-semibold leading-6">
                by {book.author}
              </p>
            </div>
            <button
              onClick={() => removeFromReadingList(book)}
              className="py-2 mt-4 text-white bg-[#53C2C2] hover:bg-[#28B8B8] rounded-lg shadow-md w-full"
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
