import React, { useState } from 'react';
import { FaBars, FaHome, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';
import SpringModal from './modal'; // Asegúrate de que la ruta sea correcta
import { Typography } from '@mui/material';

const Navbar: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModalHandler = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModalHandler = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <nav className="bg-blue-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <h1 className='pl-2 text-3xl font-bold text-white-900 tracking-tight leading-tight'>
            ELECTROLUZ
            </h1>
        </button>
        <button className="focus:outline-none">
          <FaBars className="text-white" />
        </button>
      </div>
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-1/2 p-2 rounded-md focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <FaShoppingCart className="text-white" />
        </button>
        <button className="focus:outline-none" onClick={openLoginModalHandler}>
          <FaUser className="text-white" />
        </button>
      </div>
      
      {/* Modal de Login */}
      <SpringModal open={isLoginModalOpen} onClose={closeLoginModalHandler}>
        <div className="flex w-full h-full max-w-4xl bg-white rounded-lg shadow-lg relative p-8">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={closeLoginModalHandler}
          >
            <FaTimes className="w-6 h-6" />
          </button>
          <div className="flex-1 flex flex-col justify-center pr-8">
            <Typography id="spring-modal-title" variant="h6" component="h2" className="text-2xl font-semibold mb-4">
              Login
            </Typography>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign In
              </button>
              <div className="flex justify-between mt-4">
                <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
                <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
              </div>
            </form>
          </div>
          <div className="hidden md:block flex-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300" // Cambia la URL de la imagen según lo necesites
              alt="Login Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </SpringModal>
    </nav>
  );
};

export default Navbar;
