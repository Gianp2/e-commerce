import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Novedades from './components/Novedades';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const Home = ({ scrollToProducts }) => (
  <>
    <Hero scrollToProducts={scrollToProducts} />
    <Novedades />
    <div id="productos">
      <ProductList />
    </div>
    <Contact /> {/* 👈 Se agregó aquí */}
  </>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const preventAutoScroll = useRef(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      preventAutoScroll.current = true; // evitar scroll al re-render
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        preventAutoScroll.current = false;
      }, 800);
    }
  };

  // Evita scroll involuntario al re-render del tema
  useEffect(() => {
    if (preventAutoScroll.current) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPage]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          scrollToProducts={scrollToProducts}
        />
        <main className="flex-grow">
          {currentPage === 'home' && <Home scrollToProducts={scrollToProducts} />}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
