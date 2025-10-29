import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProductCard = ({ product, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-500 group border border-gray-200 ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Imagen del producto */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-3xl"
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col justify-between h-44 md:h-48">
        {/* Título y categoría */}
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 tracking-tight truncate">
            {product.name}
          </h3>

          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
            {product.category}
          </p>
        </div>

        {/* Precios */}
        <div className="mt-3 flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm md:text-base">
              ${product.originalPrice}
            </span>
          )}
          <span className="text-xl md:text-2xl font-bold text-amber-600">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
