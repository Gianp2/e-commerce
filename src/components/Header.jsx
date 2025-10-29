import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Header = ({ setCurrentPage, currentPage, scrollToProducts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPage]);

  const menuItems = [
    { name: 'Home', page: 'home' },
    { name: 'Productos', page: 'home', action: scrollToProducts },
    { name: 'Contacto', page: 'contact' },
  ];

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/80 shadow-md transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-amber-500 transition-colors duration-300"
          onClick={() => setCurrentPage('home')}
        >
          Tienda
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                if (item.action) item.action();
                else setCurrentPage(item.page);
              }}
              className={`font-semibold text-gray-900 dark:text-gray-200 relative transition-colors duration-300
                ${
                  currentPage === item.page
                    ? 'text-amber-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-amber-400 after:rounded-full'
                    : 'hover:text-amber-400'
                }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          {/* Tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-amber-400 dark:hover:bg-amber-500 hover:text-gray-900 dark:hover:text-gray-900 transition-colors duration-300 shadow-sm"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Menú Mobile */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-amber-400 dark:hover:bg-amber-500 transition-colors duration-300 shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md overflow-hidden shadow-md"
          >
            <div className="flex flex-col gap-4 p-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.action) item.action();
                    else setCurrentPage(item.page);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-900 dark:text-gray-200 font-semibold py-2 px-3 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-500 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
