<<<<<<< Updated upstream
import { FaBars, FaHome, FaShoppingCart, FaUser } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="bg-blue-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <button className="focus:outline-none">
                    <FaHome className="text-white" />
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
                <button className="focus:outline-none">
                    <FaUser className="text-white" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
=======
import React, { useState, useEffect } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CategoryMenu from './categories';

const Navbar: React.FC = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  const closeCategories = () => {
    setCategoriesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setScrollingUp(false);
      } else {
        // Scrolling up
        setScrollingUp(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={`relative bg-blue-800 text-white z-40 transition-transform duration-300 ease-in-out ${
      scrollingUp ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className='pl-2'>
            <Link className="focus:outline-none" to="/">
              <h1 className='pl-2 text-3xl font-bold text-white-900 tracking-tight leading-tight'>
                ELECTROLUZ
              </h1>
            </Link>
          </div>
          <div>
          <button
            className="focus:outline-none ml-8 p-2 rounded hover:bg-blue-700"
            onClick={toggleCategories}
          >
            <FaBars className="text-white text-2xl" /> {/* Ajusta el tamaño aquí */}
          </button>
          </div>
        </div>
        <div className="w-full flex justify-center relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-1/2 p-2 pl-12 rounded-md focus:outline-none"
          />
          <div className="absolute left-1/4 transform -translate-x-1/6 h-full flex items-center pl-4 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-8 pr-4">
          <button className="focus:outline-none">
            <FaShoppingCart className="text-white text-2xl" />
          </button>
          <Link to="/login" className="focus:outline-none">
            <FaUser className="text-white text-2xl" />
          </Link>
        </div>
      </nav>
      {categoriesOpen && (
        <CategoryMenu
          categories={["Electrónica", "Moda", "Hogar y Jardín", "Juguetes y Hobbies", "Deportes", "Automotriz"]}
          closeMenu={closeCategories}
        />
      )}
    </div>
  );
};

export default Navbar;
>>>>>>> Stashed changes
