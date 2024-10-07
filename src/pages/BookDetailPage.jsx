import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import bookService from '../services/bookService';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const fetchedBook = await bookService.getBookById(id);
      setBook(fetchedBook);
    };
    fetchBook();
  }, [id]);

  return (
    <div className="book-detail-page flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Book Details</h2>
      <div className="w-full max-w-4xl bg-white p-6 shadow-lg rounded-lg">
        {book ? <BookDetail book={book} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default BookDetailPage;
