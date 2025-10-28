import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Header = ({ setCurrentPage, currentPage, scrollToProducts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollAnimation();

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const navItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Productos', page: 'products' },
    { name: 'Contacto', page: 'contact' },
  ];

  const handleNavClick = (page) => {
    if (page === 'products') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => scrollToProducts(), 100);
      } else {
        scrollToProducts();
      }
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-md py-3'
          : 'bg-gray-900/80 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 font-bold text-white text-2xl tracking-tight"
          >
            <span className="text-amber-400">Mi </span> Tienda
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className="text-gray-200 hover:text-amber-400 font-medium transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-200 hover:text-amber-400 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down space-y-2 bg-gray-900/95 rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className="block w-full text-left py-3 text-gray-200 hover:text-amber-400 hover:bg-gray-800 px-4 rounded-lg transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
