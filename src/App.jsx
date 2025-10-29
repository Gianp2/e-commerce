import React, { useState } from 'react';
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
    <ProductList />
    <Contact />
  </>
);

const ContactPage = () => (
  <div className="pt-20">
    <Contact />
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentPage('home');
  };

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
          {currentPage === 'contact' && <ContactPage />}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
