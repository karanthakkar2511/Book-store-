import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-xl font-semibold">E-Library Management System</p>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a href="##" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
          <a href="##" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
          <a href="##" className="hover:text-gray-300 transition-transform duration-300 hover:scale-110">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="##" className="hover:text-gray-300 transition-transform duration-300 hover:scale-110">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="##" className="hover:text-gray-300 transition-transform duration-300 hover:scale-110">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="mt-4 text-gray-300">
          <p>© 2024 E-Library Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
