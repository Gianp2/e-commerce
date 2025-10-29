import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = ({ scrollToProducts, theme = 'light', language = 'es' }) => {
  const scrollY = useScrollAnimation();
  const parallaxOffset = scrollY * 0.5;

  const t = {
    es: {
      season: 'Nueva Temporada 2025',
      title1: 'Nueva Colección',
      title2: 'Primavera 2025',
      description:
        'Moda masculina y femenina con estilo y confort. Encuentra tu look ideal en nuestra nueva colección.',
      viewCollection: 'Ver Colección',
      discounts: 'Descuentos',
      featuredProduct: 'Buzo Oversize',
      off: '-30% OFF',
    },
    en: {
      season: 'New Season 2025',
      title1: 'New Collection',
      title2: 'Spring 2025',
      description:
        'Men’s and women’s fashion with style and comfort. Find your perfect look in our new collection.',
      viewCollection: 'View Collection',
      discounts: 'Discounts',
      featuredProduct: 'Oversized Hoodie',
      off: '-30% OFF',
    },
  };

  const lang = t[language] || t['es'];

  return (
    <section
      className={`relative overflow-hidden min-h-screen flex items-center transition-colors duration-700 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950'
          : 'bg-gradient-to-br from-blue-200 via-blue-100 to-amber-100'
      }`}
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl animate-float ${
            theme === 'dark' ? 'bg-amber-400/40' : 'bg-amber-300/40'
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float-delayed ${
            theme === 'dark' ? 'bg-blue-500/40' : 'bg-blue-400/40'
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl animate-pulse-slow ${
            theme === 'dark' ? 'bg-gray-600/20' : 'bg-gray-400/20'
          }`}
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div
            className={`space-y-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-center md:text-left`}
            style={{ transform: `translateY(-${parallaxOffset * 0.3}px)` }}
          >
            <div
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-lg animate-fade-in animate-season-float backdrop-blur-sm ${
                theme === 'dark' ? 'bg-white/20 text-amber-400' : 'bg-amber-200 text-amber-700'
              } mx-auto md:mx-0`}
            >
              <Sparkles size={20} />
              <span className="text-sm font-semibold tracking-wide">{lang.season}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-slide-in-left">
              {lang.title1}{' '}
              <span className="block text-amber-500">{lang.title2}</span>
            </h1>

            <p
              className={`text-lg md:text-xl leading-relaxed max-w-xl animate-fade-in mx-auto md:mx-0`}
              style={{ textAlign: 'inherit' }}
            >
              {lang.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start animate-slide-in-left">
              <button
                onClick={scrollToProducts}
                className="group bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-600 transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                {lang.viewCollection}
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  size={20}
                />
              </button>

              <button
                className={`group border-2 px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'border-gray-300 text-gray-200 hover:bg-gray-100 hover:text-gray-900'
                    : 'border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Sparkles size={20} />
                {lang.discounts}
              </button>
            </div>
          </div>

          {/* Imagen destacada */}
          <div
            className="relative animate-slide-in-right md:ml-10"
            style={{ transform: `translateY(-${parallaxOffset * 0.5}px)` }}
          >
            <div
              className={`relative rounded-3xl p-6 shadow-xl transform hover:scale-105 transition-all duration-700 ${
                theme === 'dark'
                  ? 'bg-white/10 backdrop-blur-md border border-white/10'
                  : 'bg-white/90 backdrop-blur-md border border-gray-200'
              }`}
            >
              <div className="absolute -top-5 -right-5 bg-amber-500 text-gray-900 px-5 py-2 rounded-full font-bold text-lg shadow-lg animate-bounce-slow z-10">
                {lang.off}
              </div>

              <img
                src="/remera.png"
                alt="Producto destacado"
                className="rounded-2xl shadow-lg w-full h-96 md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />

              {/* Card del producto más pequeña */}
              <div
                className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 p-4 rounded-2xl shadow-2xl bg-white/50 backdrop-blur-md w-52 text-center flex flex-col items-center space-y-1 ${
                  theme === 'dark' ? 'bg-gray-800/40 text-white' : 'text-gray-900'
                }`}
              >
                <p className="text-base font-semibold">{lang.featuredProduct}</p>
                <p className="text-2xl font-bold">$89.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ola SVG inferior */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 150" className="w-full h-20 md:h-32" preserveAspectRatio="none">
          <path
            fill={theme === 'dark' ? '#0f172a' : '#fef3c7'}
            d="M0,64 C360,140 1080,0 1440,64 L1440,150 L0,150 Z"
          ></path>
        </svg>
      </div>

      {/* Animaciones personalizadas */}
      <style jsx>{`
        @keyframes seasonFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-season-float {
          animation: seasonFloat 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
