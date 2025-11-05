import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { useTheme } from '../context/ThemeContext';

const PRODUCTS_PER_PAGE = 6;
const MAX_PRICE = 200;
const INITIAL_PRICE_RANGE = [0, MAX_PRICE];

const COLLECTIONS = ['all', 'novedades', 'nuevos', 'mas-vendidos', 'ofertas'];
const GENDERS = ['all', 'men', 'women'];
const SORT_OPTIONS = ['default', 'price-asc', 'price-desc', 'name'];

const ProductList = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    collection: 'all',
    gender: 'all',
    sort: 'default',
    priceRange: INITIAL_PRICE_RANGE,
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef(null);
  const filterModalRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/data/products.json');
        const data = await res.json();
        setProducts(data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = useMemo(
    () => ['all', ...new Set(products.map((p) => p.category))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    const { category, gender, collection, sort, priceRange } = filters;

    let result = products
      .filter((p) => category === 'all' || p.category === category)
      .filter((p) => gender === 'all' || p.gender === gender)
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (collection === 'novedades' || collection === 'nuevos') result = result.filter((p) => p.isNew);
    if (collection === 'mas-vendidos') result = result.filter((p) => p.isBestseller);
    if (collection === 'ofertas') result = result.filter((p) => p.isOnSale);

    result.sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

    return result;
  }, [products, filters]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterModalRef.current && !filterModalRef.current.contains(e.target)) {
        setIsMobileFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updateFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const resetFilters = () =>
    setFilters({ category: 'all', collection: 'all', gender: 'all', sort: 'default', priceRange: INITIAL_PRICE_RANGE });

  const hasActiveFilters = useMemo(
    () => JSON.stringify(filters) !== JSON.stringify({
      category: 'all', collection: 'all', gender: 'all', sort: 'default', priceRange: INITIAL_PRICE_RANGE
    }),
    [filters]
  );

  return (
    <section
      className="relative py-16 transition-all duration-700"
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(to bottom, #0f172a, #1e293b)'
          : 'linear-gradient(to bottom, #fef3c7, #ffffff)',
      }}
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-200 dark:bg-gray-800 px-6 py-2 rounded-full">
            <Sparkles size={20} className="text-amber-400" />
            <span className="text-sm font-bold">Colección Exclusiva</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mt-3">Nuestra Colección</h2>
        </header>

        <p className="text-center text-sm mb-6">
          Mostrando <span className="text-amber-600 font-bold">{filteredProducts.length}</span> productos
        </p>

        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {isLoading ? 'Cargando...' : currentProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductList;
