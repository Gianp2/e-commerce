import React, { memo } from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const socialLinks = [
  { icon: <Instagram size={24} />, label: 'Instagram', href: '#' },
  { icon: <Facebook size={24} />, label: 'Facebook', href: '#' },
  { icon: <Twitter size={24} />, label: 'Twitter', href: '#' }
];

const categories = ['Hombre', 'Mujer', 'Niños'];
const helpLinks = ['Devoluciones', 'Preguntas Frecuentes', 'Términos y Condiciones'];

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer
      className="relative pt-20 xl:pt-28 pb-12 xl:pb-16 overflow-hidden transition-all duration-700"
      style={{
        background: isDark
          ? '#0f172a'
          : 'linear-gradient(to bottom, #fef3c7, #ffffff)'
      }}
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 md:w-96 md:h-96 bg-amber-400 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32 max-w-[1800px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-16 mb-12 xl:mb-16 text-center md:text-left">
          <div className="space-y-5 xl:space-y-7 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 xl:space-x-4">
              <div className="bg-amber-500 p-3 xl:p-4 rounded-2xl shadow-md hover:rotate-12 transition-transform duration-300">
                <ShoppingBag size={32} className="text-gray-900" />
              </div>
              <span className={`text-3xl xl:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Mi <span className="text-amber-500">Tienda</span>
              </span>
            </div>

            <p className={`leading-relaxed max-w-sm xl:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Moda moderna y versátil para todos los estilos. Inspirate con nuestras colecciones exclusivas.
            </p>

            <div className="flex gap-4 xl:gap-5 justify-center md:justify-start">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 xl:p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-md ${
                    isDark
                      ? 'bg-gray-800 text-gray-400 hover:bg-amber-500 hover:text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-amber-500 hover:text-white'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl xl:text-3xl font-bold mb-5 xl:mb-6 text-amber-500 tracking-tight">
              Categorías
            </h3>
            <ul className={`space-y-3 xl:space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {categories.map((item) => (
                <li key={item}>
                  <a className="text-lg xl:text-xl hover:text-amber-500 hover:translate-x-1 transition-all duration-300 inline-block font-medium cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl xl:text-3xl font-bold mb-5 xl:mb-6 text-amber-500 tracking-tight">
              Ayuda
            </h3>
            <ul className={`space-y-3 xl:space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {helpLinks.map((item) => (
                <li key={item}>
                  <a className="text-lg xl:text-xl hover:text-amber-500 hover:translate-x-1 transition-all duration-300 inline-block font-medium cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`relative h-px mb-8 xl:mb-10 ${isDark ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'} opacity-60`}></div>

        <div className="text-center">
          <p className={`text-sm xl:text-base tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © 2025 <span className="font-semibold text-amber-500">Mi Tienda</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
