import React from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-100 pt-16 pb-8 relative overflow-hidden">
      {/* Fondo sutil con textura */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo y redes */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-amber-500 p-2 rounded-xl transform hover:rotate-12 transition-transform duration-300">
                <ShoppingBag size={24} className="text-stone-900" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-stone-100">Mi Tienda</span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed max-w-sm">
              Moda moderna para todos. Encuentra tu estilo con nuestras colecciones exclusivas.
            </p>
            <div className="flex gap-4">
              {[ 
                { icon: <Instagram size={20} />, label: "Instagram" },
                { icon: <Facebook size={20} />, label: "Facebook" },
                { icon: <Twitter size={20} />, label: "Twitter" },
              ].map((social, i) => (
                <button
                  key={i}
                  aria-label={social.label}
                  className="bg-stone-700 p-3 rounded-full hover:bg-amber-500 hover:text-stone-900 transform hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Categorías</h3>
            <ul className="space-y-3 text-stone-400">
              {["Hombre", "Mujer", "Niños", "Accesorios"].map((item) => (
                <li key={item}>
                  <button className="hover:text-amber-500 hover:translate-x-2 transition-all duration-300 inline-block">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Ayuda</h3>
            <ul className="space-y-3 text-stone-400">
              {["Envíos", "Devoluciones", "Preguntas Frecuentes", "Términos y Condiciones"].map(
                (item) => (
                  <li key={item}>
                    <button className="hover:text-amber-500 hover:translate-x-2 transition-all duration-300 inline-block">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="border-t border-stone-700 pt-8 text-center">
          <p className="text-stone-500 text-sm tracking-wide">
            &copy; 2025 Mi Tienda. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
