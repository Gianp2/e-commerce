import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Filter, X } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductList = () => {
  const [category, setCategory] = useState('all');
  const [gender, setGender] = useState('all');
  const [sort, setSort] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = ['all', ...new Set(products.map(p => p.category)), 'Calzado'];

  const filteredProducts = products
    .filter(p => (category === 'all' ? true : p.category === category))
    .filter(p => (gender === 'all' ? true : p.gender === gender))
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Manejo de cambio de página
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (window.innerWidth < 768) setIsFilterOpen(false);
  };

  return (
    <section id="productos" className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-6 py-2 rounded-full mb-4 shadow-sm">
            <Sparkles className="text-amber-600" size={20} />
            <span className="text-sm font-bold text-stone-800">Colección Exclusiva</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-4">Nuestra Colección</h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Moda masculina y femenina con estilo. Encuentra tu look ideal entre nuestras selecciones exclusivas.
          </p>
        </div>

        {/* Botón de filtros móviles */}
        <div className="flex justify-end mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-amber-600 transition-all duration-300"
          >
            <Filter size={20} /> Filtros
          </button>
        </div>

        <div className="flex gap-8">
          {/* Panel de filtros lateral (desktop) */}
          <aside className="hidden md:flex flex-col w-72 bg-white rounded-2xl p-6 shadow-md space-y-6 
                             max-h-[calc(100vh-200px)] overflow-y-auto sticky top-24">
            <h3 className="text-lg font-bold text-stone-800 mb-2">Filtros</h3>

            {/* Categoría */}
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Categoría</label>
              <select
                value={category}
                onChange={e => { setCategory(e.target.value); setCurrentPage(1); }}
                className="w-full px-3 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                ))}
              </select>
            </div>

            {/* Género */}
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Género</label>
              <select
                value={gender}
                onChange={e => { setGender(e.target.value); setCurrentPage(1); }}
                className="w-full px-3 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="all">Todos</option>
                <option value="men">Hombre</option>
                <option value="women">Mujer</option>
              </select>
            </div>

            {/* Ordenar */}
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Ordenar por</label>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="w-full px-3 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="default">Por defecto</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="name">Nombre</option>
              </select>
            </div>

            {/* Precio */}
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Rango de precio</label>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={priceRange[1]}
                onChange={e => setPriceRange([0, Number(e.target.value)])}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <p className="text-sm text-stone-600 mt-1">Hasta ${priceRange[1].toFixed(2)}</p>
            </div>
          </aside>

          {/* Productos */}
          <div className="flex-1">
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {currentProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <p className="text-center text-stone-600 text-lg mb-12">
                No se encontraron productos que coincidan con los filtros seleccionados.
              </p>
            )}

            {/* Paginación con flechas */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="p-2 rounded-full hover:bg-amber-100 transition"
                  disabled={currentPage === 1}
                >
                  <ArrowLeft size={20} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-full border ${
                      currentPage === page
                        ? 'bg-amber-500 text-white border-amber-500'
                        : 'bg-white text-stone-800 border-stone-300 hover:bg-amber-100'
                    } transition-all`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="p-2 rounded-full hover:bg-amber-100 transition"
                  disabled={currentPage === totalPages}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            )}

            {/* Botón final */}
            <div className="text-center">
              <button className="group bg-amber-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-amber-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                Ver Todos los Productos
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Panel de filtros móviles */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
            <aside className="bg-white w-72 h-full p-6 shadow-lg overflow-y-auto relative">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="absolute top-4 right-4 text-stone-700 hover:text-amber-500 transition-colors"
              >
                <X size={28} />
              </button>
              <h3 className="text-lg font-bold text-stone-800 mb-4">Filtros</h3>
              {/* Filtros móviles */}
              {/* Aquí puedes repetir los filtros de categoría, género, ordenar y precio */}
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
