import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTheme } from '../context/ThemeContext';
import 'swiper/css';
import 'swiper/css/pagination';

const Novedades = () => {
  const swiperRef = useRef(null);
  const { theme } = useTheme();

  const novedades = [
    { id: 1, title: 'Campera Urbana 2025', category: 'Hombre', price: '$89', description: 'Ligera, impermeable y con diseño moderno. Ideal para la ciudad.', image: '/novedad1.png', badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200' },
    { id: 2, title: 'Vestido Verano 2025', category: 'Mujer', price: '$62', description: 'Fresco, fluido y elegante. Perfecto para días soleados.', image: '/novedad2.png', badgeColor: 'bg-pink-100 text-pink-800 dark:bg-pink-700 dark:text-pink-200' },
    { id: 3, title: 'Remera Clásica Unisex', category: 'Unisex', price: '$24', description: 'Algodón premium, corte perfecto. Tu esencial diario.', image: '/novedad3.png', badgeColor: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' },
    { id: 4, title: 'Pantalón Cargo', category: 'Hombre', price: '$74', description: 'Resistente, funcional, cómodo y con bolsillos amplios.', image: '/novedad4.png', badgeColor: 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200' },
  ];

  return (
    <section
      key={theme}
      style={{ backgroundColor: theme === 'dark' ? '#0f172a' : '#fef3c7' }}
      className="relative py-16 transition-all duration-700 ease-in-out"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">Novedades</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Descubrí lo último en estilo, confort y tendencia para esta temporada.
          </p>
        </div>

        <div onMouseEnter={() => swiperRef.current?.autoplay?.stop()} onMouseLeave={() => swiperRef.current?.autoplay?.start()}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            pagination={{ clickable: true, el: '.novedades-pagination' }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="relative"
          >
            {novedades.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col md:flex-row items-center justify-center bg-transparent rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <div className="w-full md:w-1/2 flex justify-center items-center p-6 relative transition-colors duration-500">
                    <div className="w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] flex justify-center items-center bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                    </div>
                    <span className={`absolute top-4 left-4 px-3 py-1 text-xs sm:text-sm font-semibold rounded-full ${item.badgeColor} backdrop-blur-sm shadow-sm`}>
                      {item.category}
                    </span>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-6 sm:p-8 lg:p-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{item.description}</p>
                    <span className="text-2xl font-extrabold text-yellow-600 dark:text-yellow-400 mb-5 block">{item.price}</span>
                    <div className="flex justify-center md:justify-start">
                      <button className="px-6 py-3 bg-yellow-500 dark:bg-yellow-400 text-gray-900 dark:text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-600 dark:hover:bg-yellow-500 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                        Ver producto
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="novedades-pagination flex justify-center mt-6 sm:mt-8 gap-3"></div>
        </div>
      </div>

      <style jsx>{`
        .novedades-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #fbbf24;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .novedades-pagination .swiper-pagination-bullet-active {
          transform: scale(1.5);
          opacity: 1;
          background-color: #f59e0b;
        }
      `}</style>
    </section>
  );
};

export default Novedades;
