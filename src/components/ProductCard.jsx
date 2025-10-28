import React from 'react';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProductCard = ({ product, index }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`bg-[#f9f9f9] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-500 group border border-gray-200 ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Imagen del producto */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-3xl"
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Estrellas */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-amber-400 text-amber-400 drop-shadow-sm"
            />
          ))}
          <span className="text-sm text-gray-500 ml-2 font-medium">(128)</span>
        </div>

        {/* Título y categoría */}
        <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">
          {product.category}
        </p>

        {/* Precios */}
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
          <span className="text-3xl font-bold text-amber-600">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
