import React from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer
      className={`relative pt-20 pb-12 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'
      }`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Logo y redes */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 p-3 rounded-2xl transform hover:rotate-12 transition-transform duration-300 shadow-md">
                <ShoppingBag size={28} className="text-gray-900" />
              </div>
              <span className={`text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Mi <span className="text-amber-400">Tienda</span>
              </span>
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} leading-relaxed max-w-sm`}>
              Moda moderna y versátil para todos los estilos. Inspirate con nuestras colecciones exclusivas.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[{ icon: <Instagram size={22} />, label: 'Instagram' },
                { icon: <Facebook size={22} />, label: 'Facebook' },
                { icon: <Twitter size={22} />, label: 'Twitter' }].map((social, i) => (
                <button
                  key={i}
                  aria-label={social.label}
                  className={`p-3 rounded-full transform hover:scale-110 transition-all duration-300 shadow-md ${
                    isDark
                      ? 'bg-gray-800 hover:bg-amber-500 hover:text-gray-900'
                      : 'bg-gray-200 hover:bg-amber-500 hover:text-gray-900'
                  }`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Categorías */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-5 text-amber-400 tracking-tight">Categorías</h3>
            <ul className={`${isDark ? 'text-gray-400' : 'text-gray-500'} space-y-3`}>
              {['Hombre', 'Mujer', 'Niños'].map((item) => (
                <li key={item}>
                  <button className="hover:text-amber-400 hover:translate-x-2 transition-all duration-300 inline-block text-lg">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-5 text-amber-400 tracking-tight">Ayuda</h3>
            <ul className={`${isDark ? 'text-gray-400' : 'text-gray-500'} space-y-3`}>
              {['Devoluciones', 'Preguntas Frecuentes', 'Términos y Condiciones'].map((item) => (
                <li key={item}>
                  <button className="hover:text-amber-400 hover:translate-x-2 transition-all duration-300 inline-block text-lg">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separador visual */}
        <div className={`relative h-px mb-8 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

        {/* Derechos reservados */}
        <div className="text-center space-y-2">
          <p className={`${isDark ? 'text-gray-500' : 'text-gray-400'} text-sm tracking-wide`}>
            &copy; 2025 <span className="font-semibold">Mi Tienda</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
