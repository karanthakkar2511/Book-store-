import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">E-Library</h1>
        <nav className="flex space-x-6">
          <Link 
            to="/" 
            className="text-lg font-medium hover:bg-white hover:text-blue-500 py-2 px-4 rounded-lg transition-all duration-300"
          >
            Home
          </Link>
          <Link 
            to="/add-book" 
            className="text-lg font-medium hover:bg-white hover:text-purple-500 py-2 px-4 rounded-lg transition-all duration-300"
          >
            Add Book
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
