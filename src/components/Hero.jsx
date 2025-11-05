import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const translations = {
  es: {
    season: "Nueva Temporada 2025",
    title1: "Nueva Colección",
    title2: "Primavera 2025",
    description:
      "Moda masculina y femenina con estilo y confort. Encuentra tu look ideal en nuestra nueva colección.",
    viewCollection: "Ver Colección",
    discounts: "Descuentos",
    featuredProduct: "Buzo Oversize",
    off: "-30% OFF",
  },
  en: {
    season: "New Season 2025",
    title1: "New Collection",
    title2: "Spring 2025",
    description:
      "Men’s and women’s fashion with style and comfort. Find your perfect look in our new collection.",
    viewCollection: "View Collection",
    discounts: "Discounts",
    featuredProduct: "Oversized Hoodie",
    off: "-30% OFF",
  },
};

const Hero = ({ scrollToProducts, language = "es" }) => {
  const scrollY = useScrollAnimation();
  const parallaxOffset = scrollY * 0.5;
  const lang = translations[language] || translations.es;

  return (
    <section className="relative flex items-center min-h-screen overflow-hidden transition-colors duration-500 ease-in-out bg-gradient-to-br from-blue-200 via-blue-100 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none transition-all duration-500 ease-in-out">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl bg-amber-300/40 dark:bg-amber-400/40 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-blue-400/40 dark:bg-blue-500/40 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl bg-gray-400/20 dark:bg-gray-600/20 animate-pulse-slow" />
      </div>

      <div className="container relative z-10 px-6 py-24 mx-auto transition-colors duration-500 ease-in-out">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div
            className="space-y-8 text-center text-gray-900 transition-colors duration-500 ease-in-out md:text-left dark:text-gray-100"
            style={{ transform: `translateY(-${parallaxOffset * 0.3}px)` }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 mx-auto font-semibold tracking-wide text-sm rounded-full shadow-lg backdrop-blur-sm bg-amber-200 text-amber-700 animate-season-float dark:bg-white/10 dark:text-amber-400 md:mx-0 transition-colors duration-500 ease-in-out">
              <Sparkles size={20} />
              <span>{lang.season}</span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl animate-slide-in-left transition-colors duration-500 ease-in-out">
              {lang.title1} <span className="block text-amber-500">{lang.title2}</span>
            </h1>

            <p className="max-w-xl mx-auto text-lg leading-relaxed md:text-xl animate-fade-in md:mx-0 transition-colors duration-500 ease-in-out">
              {lang.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start animate-slide-in-left">
              <button
                type="button"
                onClick={scrollToProducts}
                className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-500 ease-in-out transform bg-amber-500 rounded-full hover:bg-amber-600 hover:scale-105 hover:shadow-xl"
              >
                {lang.viewCollection}
                <ArrowRight size={20} className="transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
              </button>

              <button
                type="button"
                className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold transition-all duration-500 ease-in-out transform border-2 rounded-full border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-gray-200 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:scale-105"
              >
                <Sparkles size={20} />
                {lang.discounts}
              </button>
            </div>
          </div>

          <div
            className="relative md:ml-10 animate-slide-in-right transition-all duration-500 ease-in-out"
            style={{ transform: `translateY(-${parallaxOffset * 0.5}px)` }}
          >
            <div className="relative p-6 transition-all duration-500 ease-in-out transform bg-white/90 rounded-3xl shadow-xl border border-gray-200 dark:bg-white/10 dark:backdrop-blur-md dark:border-white/10">
              <div className="absolute z-10 px-5 py-2 font-bold text-lg text-gray-900 bg-amber-500 rounded-full shadow-lg -top-5 -right-5 animate-bounce-slow">
                {lang.off}
              </div>

              <img
                src="/remera.webp"
                alt="Producto destacado"
                loading="lazy"
                width="500"
                height="500"
                className="object-cover w-full h-96 rounded-2xl shadow-lg transition-transform duration-700 ease-in-out transform hover:scale-105 md:h-[500px]"
              />

              <div className="absolute bottom-6 left-1/2 flex flex-col items-center w-52 p-4 space-y-1 text-center transform -translate-x-1/2 rounded-2xl shadow-2xl bg-white/50 backdrop-blur-md text-gray-900 dark:bg-gray-800/40 dark:text-white transition-colors duration-500 ease-in-out">
                <p className="text-base font-semibold">{lang.featuredProduct}</p>
                <p className="text-2xl font-bold">$89.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden transition-colors duration-500 ease-in-out">
        <svg viewBox="0 0 1440 150" className="w-full h-20 md:h-32" preserveAspectRatio="none">
          <path
            fill="#fde68a"
            d="M0,64 C360,140 1080,0 1440,64 L1440,150 L0,150 Z"
            className="transition-colors duration-500 ease-in-out dark:fill-[#0f172a]"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes seasonFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-season-float {
          animation: seasonFloat 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
