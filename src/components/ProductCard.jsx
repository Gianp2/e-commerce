import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProductCard = ({ product, index }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isOpen, setIsOpen] = useState(false); // Estado del modal

  const {
    image,
    name,
    category,
    discount,
    originalPrice,
    price
  } = product;

  const animationDelay = { animationDelay: `${index * 0.1}s` };

  return (
    <>
      {/* Tarjeta del producto */}
      <div
        ref={ref}
        style={animationDelay}
        className={`group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl 
          border border-gray-200/30 dark:border-gray-700/30 transform transition-all duration-500 
          ${isVisible ? 'animate-scale-in' : 'opacity-0'}
          bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/10 dark:to-gray-800/5 
          backdrop-blur-md supports-backdrop-blur:bg-white/60 dark:supports-backdrop-blur:bg-gray-800/60`}
      >
        <div className="relative overflow-hidden cursor-pointer" onClick={() => setIsOpen(true)}>
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-72 md:h-80 object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-105"
          />

          {discount && (
            <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm 
              bg-gradient-to-r from-amber-400/90 to-yellow-300/90 text-gray-900 backdrop-blur-sm">
              -{discount}%
            </div>
          )}

          {/* Lupa */}
          <div className="absolute bottom-4 right-4 p-2 rounded-full shadow-lg bg-white/80 dark:bg-gray-800/80
              transition-transform duration-300 hover:scale-110">
            <img src="/lupa.webp" alt="Ver imagen" className="w-6 h-6 object-contain" />
          </div>
        </div>

        <div className="p-5 flex flex-col justify-between h-44 md:h-48">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 tracking-tight truncate 
              group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {category}
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2">
            {originalPrice && (
              <span className="text-gray-400 dark:text-gray-500 line-through text-sm md:text-base">
                ${originalPrice}
              </span>
            )}
            <span className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400 
              group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors duration-300">
              ${price}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-3xl p-6 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()} // Evita que cerrar modal al hacer click en contenido
          >
            <button 
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-xl font-bold hover:text-amber-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <img src={image} alt={name} className="w-full h-96 object-contain rounded-xl mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{name}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{category}</p>
            <div className="flex items-center gap-3">
              {originalPrice && (
                <span className="line-through text-gray-400 dark:text-gray-500">${originalPrice}</span>
              )}
              <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">${price}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
