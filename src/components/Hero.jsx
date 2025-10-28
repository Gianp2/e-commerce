import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = ({ scrollToProducts }) => {
  const scrollY = useScrollAnimation();
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-blue-900 pt-20 overflow-hidden min-h-screen flex items-center">
      {/* Fondos flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-stone-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Texto principal */}
          <div className="text-white space-y-8" style={{ transform: `translateY(-${parallaxOffset * 0.3}px)` }}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm animate-slide-in-left">
              <Sparkles size={20} className="text-amber-400" />
              <span className="text-sm font-semibold tracking-wide">
                Nueva Temporada 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-slide-in-left">
              Nueva Colección
              <span className="block text-amber-400">Primavera 2025</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 animate-slide-in-left leading-relaxed">
              Moda masculina y femenina con estilo y confort. Encuentra tu look ideal en nuestra nueva colección.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-in-left">
              <button
                onClick={scrollToProducts}
                className="group bg-amber-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 transform hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Ver Colección
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </button>
              <button className="group border-2 border-gray-200 text-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Sparkles size={20} />
                Descuentos
              </button>
            </div>
          </div>

          {/* Imagen del producto destacado */}
          <div className="relative animate-slide-in-right" style={{ transform: `translateY(-${parallaxOffset * 0.5}px)` }}>
            <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-500">
              <div className="absolute -top-4 -right-4 bg-amber-400 text-gray-900 px-5 py-2 rounded-full font-bold text-lg shadow-lg animate-bounce-slow z-10">
                -30% OFF
              </div>
              <img
                src="/remera.png"
                alt="Producto destacado"
                className="rounded-2xl shadow-lg w-full h-96 md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-6 right-6 bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-slide-up">
                <p className="text-sm text-gray-100 font-semibold">Buzo Oversize</p>
                <p className="text-2xl font-bold text-white">$89.99</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SVG de transición */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20">
          <path
            fill="#ffffff"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
