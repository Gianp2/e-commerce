import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductList = () => {
  const [category, setCategory] = useState('all');
  const [collection, setCollection] = useState('all');
  const [gender, setGender] = useState('all');
  const [sort, setSort] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;
  const categories = ['all', ...new Set(products.map(p => p.category))];
  const collections = ['all', 'novedades', 'nuevos', 'mas-vendidos', 'ofertas'];
  const containerRef = useRef(null);

  // Filtrado y ordenamiento
  const filteredProducts = products
    .filter(p => (category === 'all' ? true : p.category === category))
    .filter(p => (gender === 'all' ? true : p.gender === gender))
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter(p => {
      switch (collection) {
        case 'novedades':
        case 'nuevos':
          return p.isNew === true;
        case 'mas-vendidos':
          return p.isBestseller === true;
        case 'ofertas':
          return p.isOnSale === true;
        default:
          return true;
      }
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Scroll suave cuando cambia la página
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (window.innerWidth < 768) setIsFilterOpen(false);
  };

  return (
    <section id="productos" className="relative bg-gradient-to-b from-amber-100 via-white to-white py-20">
      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Título */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-200 px-6 py-2 rounded-full mb-4 shadow-sm">
            <Sparkles className="text-amber-400" size={20} />
            <span className="text-sm font-bold text-stone-800">Colección Exclusiva</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-4">Nuestra Colección</h2>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Moda masculina y femenina con estilo. Encuentra tu look ideal entre nuestras selecciones exclusivas.
          </p>
        </div>

        {/* Botón filtros móviles */}
        <div className="flex justify-center mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-amber-400 text-gray-900 px-5 py-2.5 rounded-full font-semibold shadow hover:bg-amber-500 transition-all duration-300"
          >
            <Filter size={20} /> Filtros
          </button>
        </div>

        <div className="flex gap-8 relative">
          {/* Botón plegar/abrir sidebar desktop */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden md:flex absolute -left-5 top-2 z-10 items-center justify-center bg-amber-400 text-gray-900 p-2 rounded-full shadow hover:bg-amber-500 transition-all duration-300"
          >
            {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>

          {/* Sidebar filtros desktop */}
          <aside
            className={`hidden md:flex flex-col bg-white rounded-2xl p-6 shadow-md space-y-6 
                        max-h-[calc(100vh-200px)] overflow-y-auto sticky top-24 transition-all duration-300 
                        ${isSidebarOpen ? 'w-72 opacity-100 mr-4' : 'w-0 opacity-0 p-0 mr-0 overflow-hidden'}`}
          >
            {isSidebarOpen && (
              <>
                <h3 className="text-lg font-bold text-stone-800 mb-2">Filtros</h3>

                {/* Colección */}
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Colección</label>
                  <select
                    value={collection}
                    onChange={e => { setCollection(e.target.value); setCurrentPage(1); }}
                    className="w-full px-3 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    {collections.map(col => (
                      <option key={col} value={col}>{col.replace('-', ' ').toUpperCase()}</option>
                    ))}
                  </select>
                </div>

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
              </>
            )}
          </aside>

          {/* Productos */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage} // <--- clave depende de la página
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
              >
                {currentProducts.length > 0 ? (
                  currentProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))
                ) : (
                  <p className="text-center text-stone-600 text-lg col-span-full">
                    No se encontraron productos que coincidan con los filtros seleccionados.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="p-2 rounded-full hover:bg-amber-200 transition"
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
                        ? 'bg-amber-400 text-gray-900 border-amber-400'
                        : 'bg-white text-stone-800 border-stone-300 hover:bg-amber-200'
                    } transition-all`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="p-2 rounded-full hover:bg-amber-200 transition"
                  disabled={currentPage === totalPages}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            )}

            {/* Botón final */}
            <div className="text-center">
              <button className="group bg-gradient-to-r from-amber-400 to-amber-300 text-gray-900 px-12 py-5 rounded-full font-bold text-lg hover:from-amber-500 hover:to-amber-400 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                Ver Todos los Productos
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Panel filtros móviles */}
        <div className={`fixed inset-0 bg-black/40 z-50 flex justify-end transition-opacity duration-300 ${isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <aside
            className={`bg-white w-72 h-full p-6 shadow-lg overflow-y-auto relative transform transition-transform duration-300 ease-in-out
              ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-4 right-4 text-stone-700 hover:text-amber-500 transition-colors"
            >
              <X size={28} />
            </button>
            <h3 className="text-lg font-bold text-stone-800 mb-4">Filtros</h3>

            <div className="space-y-4">
              {/* Colección */}
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Colección</label>
                <select
                  value={collection}
                  onChange={e => { setCollection(e.target.value); setCurrentPage(1); }}
                  className="w-full px-3 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  {collections.map(col => (
                    <option key={col} value={col}>{col.replace('-', ' ').toUpperCase()}</option>
                  ))}
                </select>
              </div>

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
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
