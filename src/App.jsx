import React, { useState, useEffect, useRef, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SobreNosotros from "./components/SobreNosotros";
import Novedades from "./components/Novedades";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

import LoginAdmin from "./admin/LoginAdmin";
import Dashboard from "./admin/Dashboard";
import AdminRoute from "./admin/AdminRoute";
import AdminLayout from "./admin/AdminLayout";

const Home = React.memo(({ scrollToProducts }) => (
  <>
    <Hero scrollToProducts={scrollToProducts} />
    <section id="sobre-nosotros">
      <SobreNosotros />
    </section>
    <section id="novedades">
      <Novedades />
    </section>
    <section id="productos" aria-label="Lista de productos">
      <ProductList />
    </section>
    <section id="contacto">
      <Contact />
    </section>
  </>
));

const Layout = ({ children, scrollToProducts, setCurrentPage, currentPage }) => {
  const location = useLocation();
  const showLayout = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {showLayout && (
        <Header
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          scrollToProducts={scrollToProducts}
        />
      )}

      <main className="flex-grow" role="main">{children}</main>

      {showLayout && <Footer />}
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const preventAutoScroll = useRef(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const scrollToProducts = useCallback(() => {
    const element = document.getElementById("productos");
    if (element) {
      preventAutoScroll.current = true;
      element.scrollIntoView({ behavior: "smooth" });
      const timeout = setTimeout(() => {
        preventAutoScroll.current = false;
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    if (preventAutoScroll.current) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentPage]);

  return (
    <ThemeProvider>
      <Router>
        <Layout
          scrollToProducts={scrollToProducts}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        >
          <Routes>
            <Route
              path="/"
              element={<Home scrollToProducts={scrollToProducts} />}
            />

            <Route
              path="/admin/login"
              element={
                <AdminLayout>
                  <LoginAdmin />
                </AdminLayout>
              }
            />

            <Route
              path="/admin/dashboard"
              element={
                <AdminLayout>
                  <AdminRoute>
                    <Dashboard />
                  </AdminRoute>
                </AdminLayout>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
