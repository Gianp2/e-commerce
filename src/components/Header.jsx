import React, { useState, useEffect, useCallback } from 'react';
import { X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = ({ setCurrentPage, currentPage, scrollToProducts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => setIsMenuOpen(false), [currentPage]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [isMenuOpen]);

  const handleMenuClick = useCallback(
    (item) => {
      if (item.name === 'Productos') {
        if (currentPage === 'home') scrollToProducts();
        else {
          setCurrentPage('home');
          setTimeout(() => scrollToProducts(), 300);
        }
      } else {
        setCurrentPage(item.page);
        if (item.page === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    },
    [currentPage, setCurrentPage, scrollToProducts]
  );

  const menuItems = [
    { name: 'Home', page: 'home' },
    { name: 'Productos', page: 'productos' }, // cambiado para mayor claridad
    { name: 'Contacto', page: 'contact' },
  ];

  return (
    <>
      <header className="fixed w-full z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Menú + Logo */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center p-2 rounded-full 
              bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm cursor-pointer 
              transition-all duration-300 hover:bg-amber-400 dark:hover:bg-amber-500 hover:scale-110 active:scale-95 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
            >
              <span className={`block w-5 h-0.5 bg-current rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current rounded transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-5 h-0.5 bg-current rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>

            <div
              className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-amber-500 transition-colors duration-300 active:scale-95"
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Tienda
            </div>
          </div>

          {/* Botón tema */}
          <div className="flex items-center z-50">
            <button
              onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
              className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
              hover:bg-amber-400 dark:hover:bg-amber-500 hover:text-gray-900 hover:scale-110
              transition-all duration-300 ease-in-out shadow-sm active:scale-95 focus:outline-none"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menú lateral izquierdo */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 flex flex-col p-6
        bg-gradient-to-b from-amber-200/90 via-white/80 to-gray-100/80 dark:from-gray-900/90 dark:via-gray-900/95 dark:to-gray-950/90
        shadow-2xl backdrop-blur-md border-r border-transparent
        transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Botón cerrar */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-500 
            text-gray-700 dark:text-gray-200 hover:text-white transition-all duration-300 hover:rotate-90 focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items del menú */}
        <div className="flex flex-col gap-6 mt-8 items-center">
          {menuItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item)}
              className={`relative font-bold py-3 px-8 rounded-lg
              text-gray-800 dark:text-gray-200 text-lg
              hover:text-amber-500 dark:hover:text-amber-400
              transition-all duration-300 transform hover:scale-105 focus:outline-none`}
              style={{
                animation: isMenuOpen ? `fadeSlideIn 0.4s ease ${index * 0.05}s both` : 'none',
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 text-center">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            © 2025 Tienda
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
