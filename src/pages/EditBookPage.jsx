import React from 'react';
import { useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';

const EditBookPage = () => {
  const { id } = useParams();

  return (
    <div className="edit-book-page flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Edit Book</h2>
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <BookForm bookId={id} />
      </div>
    </div>
  );
};

export default EditBookPage;
