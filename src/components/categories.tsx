import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface CategoryMenuProps {
  categories: string[];
  closeMenu: () => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories, closeMenu }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeMenu]);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className={`bg-white w-64 h-full p-4 shadow-lg z-50 transform transition-transform duration-300 ease-in-out delay-300 ${
          categories ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="flex items-center justify-between w-full text-xl font-bold text-blue-600 focus:outline-none"
          onClick={closeMenu}
        >
          <span>Categorías</span>
          <FaTimes />
        </button>
        <ul className="mt-4 space-y-4 text-lg">
          {categories.map((category, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
    </div>
  );
};

export default CategoryMenu;
