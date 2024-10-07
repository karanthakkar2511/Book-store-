import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination flex justify-center my-6">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 mx-1 border rounded-lg shadow-md transition-colors duration-300 
            ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-blue-200 hover:text-blue-700'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
