import React from 'react';

const BookDetail = ({ book }) => {
    if (!book) return <p>Loading...</p>;

    return (
        <div className="book-detail p-8 bg-white shadow-lg rounded-lg flex justify-between items-start max-w-5xl mx-auto">
            <div className="w-1/2">
                <img 
                    src={book.image} 
                    alt="book-cover" 
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    style={{ maxWidth: "400px", maxHeight: "400px" }}
                />
            </div>
            <div className="w-1/2 pl-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h2>
                <p className="text-lg text-gray-700 mb-2">
                    <strong>Author:</strong> {book.author}
                </p>
                <p className="text-lg text-gray-700 mb-2">
                    <strong>Genre:</strong> {book.genre}
                </p>
                <p className="text-lg text-gray-700 mb-2">
                    <strong>Publication Date:</strong> {book.publicationDate}
                </p>
            </div>
        </div>
    );
};

export default BookDetail;
