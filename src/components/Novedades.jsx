import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const Novedades = () => {
  const swiperRef = useRef(null);
  const { theme } = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  const novedades = [
    {
      id: 1,
      title: "Campera Urbana 2025",
      category: "HOMBRE",
      price: "$89",
      description: "Ligera, impermeable y con diseño moderno.",
      image: "/novedad1.webp",
      color: "blue",
    },
    {
      id: 2,
      title: "Vestido Verano 2025",
      category: "MUJER",
      price: "$62",
      description: "Fresco, fluido y elegante.",
      image: "/novedad2.webp",
      color: "pink",
    },
    {
      id: 3,
      title: "Remera Clásica Unisex",
      category: "UNISEX",
      price: "$24",
      description: "Algodón premium, corte perfecto.",
      image: "/novedad3.webp",
      color: "gray",
    },
    {
      id: 4,
      title: "Pantalón Cargo",
      category: "HOMBRE",
      price: "$74",
      description: "Resistente y cómodo.",
      image: "/novedad4.webp",
      color: "green",
    },
  ];

  const badgeColor = (color) =>
    `bg-${color}-100 text-${color}-800 dark:bg-${color}-700 dark:text-${color}-200`;

  return (
    <section
      key={theme}
      className={`relative py-24 transition-colors duration-700 ${
        theme === "dark"
          ? "bg-[#0f172a]"
          : "bg-gradient-to-b from-white via-[#fff4c4] to-[#fef3c7]"
      }`}
    >

      {/* LUZ AMARILLA COMO EN EL HERO */}
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl bg-amber-300/40 dark:bg-amber-400/40 animate-float" />

      {/* ENCABEZADO */}
      <motion.div
        className="text-center mb-14 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
          Novedades
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Descubrí las últimas tendencias de esta temporada.
        </p>
        <div className="mt-6 w-24 h-1 mx-auto bg-yellow-500 dark:bg-yellow-400 rounded-full" />
      </motion.div>

      {/* SLIDER */}
      <div className="container max-w-[1400px] mx-auto px-6 lg:px-16">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ dynamicBullets: true, clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {novedades.map((item) => (
            <SwiperSlide key={item.id}>
              <article
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="overflow-hidden rounded-2xl h-[300px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="mt-5 text-center">
                  <span className={`${badgeColor(item.color)} text-xs px-3 py-1 rounded-full`}>
                    {item.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {item.description}
                  </p>

                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-3">
                    {item.price}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl max-w-md w-[90%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>

              <img src={selectedItem.image} alt="" className="rounded-xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {selectedItem.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {selectedItem.description}
              </p>
              <p className="text-xl font-bold text-yellow-500 mt-3">
                {selectedItem.price}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Novedades;
