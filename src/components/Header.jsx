import React, { useState, useEffect, useCallback } from "react";
import { X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const menuItems = [
  { name: "Nosotros", id: "sobre-nosotros" },
  { name: "Novedades", id: "novedades" },
  { name: "Productos", id: "productos" },
  { name: "Contacto", id: "contacto" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <>
      <header className="fixed w-full z-50 backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border-b border-white/20 dark:border-gray-700/30 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
          <div
            className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-amber-500 transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            MiTienda
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-amber-500 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
              className="p-2.5 rounded-full bg-gray-200/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 hover:bg-amber-400 dark:hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2.5 rounded-full bg-gray-200/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 hover:bg-amber-400 dark:hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 shadow-sm active:scale-95"
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 flex flex-col p-6 bg-white/80 dark:bg-gray-900/90 backdrop-blur-2xl shadow-2xl border-r border-white/20 dark:border-gray-700/30 transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-500 text-gray-700 dark:text-gray-200 hover:text-white transition-all duration-300"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-8 items-center">
          {menuItems.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-bold text-lg py-3 px-8 rounded-lg text-gray-800 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300 transform hover:scale-105"
              style={{
                animation: isMenuOpen
                  ? `fadeSlideIn 0.4s ease ${index * 0.05}s both`
                  : "none",
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Mi Tienda
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
