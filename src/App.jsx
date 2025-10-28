import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = ({ scrollToProducts }) => {
  return (
    <>
      <Hero scrollToProducts={scrollToProducts} />
      <ProductList />
      <Contact />
    </>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
};

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
    <div className="min-h-screen flex flex-col">
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
  );
};

export default App;
