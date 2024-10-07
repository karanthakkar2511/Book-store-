import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
    return (
        <div className="book-list grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-6">
            {books.map(book => (
                <div 
                    key={book.id} 
                    className="book-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="flex justify-center">
                        <img 
                            src={book.image} 
                            alt="book-cover" 
                            className="rounded-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                            style={{ maxWidth: "250px", maxHeight: "350px" }}
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">{book.title}</h2>
                        <p className="text-gray-600 mt-1">{book.author}</p>
                        <p className="text-gray-500 mt-1">{book.genre}</p>
                        <p className="text-gray-400 mt-1">{book.publicationDate}</p>
                        <Link 
                            to={`/book/${book.id}`} 
                            className="mt-4 inline-block text-blue-600 hover:text-blue-400"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList;
