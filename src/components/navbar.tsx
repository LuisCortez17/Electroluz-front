
import React, { useState } from 'react';
import { FaBars, FaHome, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <nav className="bg-blue-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link className="focus:outline-none" to="/">
          <h1 className='pl-2 text-3xl font-bold text-white-900 tracking-tight leading-tight'>
            ELECTROLUZ
            </h1>
        </Link>
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
        <Link to="/login" className="focus:outline-none">
          <FaUser className="text-white" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
