"use client"
import { useState, useEffect } from "react";
import { booksData } from "./booksData";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import ReadingList from "./components/ReadingList";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      setSearchResults(filterBooks(searchQuery));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    // Display first 12 books by default
    setReadingList(booksData.slice(0, 12));
  }, []);

  const filterBooks = (query) => {
    return booksData.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const addToReadingList = (book) => {
    if (!readingList.includes(book)) {
      setReadingList([...readingList, book]);
    }
  };

  const removeFromReadingList = (book) => {
    setReadingList(readingList.filter((item) => item !== book));
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults
        results={searchResults}
        addToReadingList={addToReadingList}
      />
      <ReadingList
        list={readingList}
        removeFromReadingList={removeFromReadingList}
      />
    </div>
  );
}
