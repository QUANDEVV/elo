import React from "react";

const ReadingList = ({ list, removeFromReadingList }) => {
  return (
    <div className="px-6">
      <h2 className="mb-6 ml-[240px] text-[1.625rem] font-bold text-[#335C6E] sm:ml-0">
        Teacher's List
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mx-auto  grid-cols-6  sm:grid sm:grid-cols-2 sm:gap-4 max-w-[1360px]">
        {list.map((book, index) => (
          <div key={index} className="  flex flex-col w-[151px] cursor-pointer">
            <div className="mb-4">
              <img
                src={book.coverPhotoURL}
                alt={`${book.title} cover`}
                className="w-[150px] h-[150px] object-cover "
              />
            </div>

            <div className="flex-grow">
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
              className="py-2 mt-4 text-white bg-[#53C2C2] hover:bg-[#28B8B8] rounded-lg shadow-md"
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
