import React from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-stone-900 via-stone-800 to-stone-900 text-stone-100 pt-20 pb-12 overflow-hidden">
      {/* Fondo sutil con textura */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Logo y redes */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 p-3 rounded-2xl transform hover:rotate-12 transition-transform duration-300 shadow-md">
                <ShoppingBag size={28} className="text-stone-900" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-stone-100">
                Mi <span className="text-amber-400">Tienda</span>
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              Moda moderna y versátil para todos los estilos. Inspirate con nuestras colecciones exclusivas.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[{ icon: <Instagram size={22} />, label: 'Instagram' },
                { icon: <Facebook size={22} />, label: 'Facebook' },
                { icon: <Twitter size={22} />, label: 'Twitter' }].map((social, i) => (
                <button
                  key={i}
                  aria-label={social.label}
                  className="bg-stone-800 p-3 rounded-full hover:bg-amber-500 hover:text-stone-900 transform hover:scale-110 transition-all duration-300 shadow-md"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Categorías */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-5 text-amber-400 tracking-tight">Categorías</h3>
            <ul className="space-y-3 text-stone-400">
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
            <ul className="space-y-3 text-stone-400">
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
        <div className="relative h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent mb-8"></div>

        {/* Derechos reservados */}
        <div className="text-center space-y-2">
          <p className="text-stone-500 text-sm tracking-wide">
            &copy; 2025 <span className="text-stone-300 font-semibold">Mi Tienda</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
