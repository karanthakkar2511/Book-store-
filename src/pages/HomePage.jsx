import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import bookService from '../services/bookService';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await bookService.getBooks();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);

  return (
    <div className="home-page bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">E-Library</h1>
      <div className="book-list-container max-w-screen-lg mx-auto">
        <BookList books={books} />
      </div>
    </div>
  );
};

export default HomePage;
