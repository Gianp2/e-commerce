import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Novedades = () => {
  const swiperRef = useRef(null);

  const novedades = [
    {
      id: 1,
      title: 'Campera Urbana 2025',
      category: 'Hombre',
      price: '$89',
      description: 'Ligera, impermeable y con diseño moderno. Ideal para la ciudad.',
      image: '/novedad1.png',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 2,
      title: 'Vestido Verano 2025',
      category: 'Mujer',
      price: '$62',
      description: 'Fresco, fluido y elegante. Perfecto para días soleados.',
      image: '/novedad2.png',
      badgeColor: 'bg-pink-100 text-pink-800',
    },
    {
      id: 3,
      title: 'Remera Clásica Unisex',
      category: 'Unisex',
      price: '$24',
      description: 'Algodón premium, corte perfecto. Tu esencial diario.',
      image: '/novedad3.png',
      badgeColor: 'bg-gray-100 text-gray-800',
    },
    {
      id: 4,
      title: 'Pantalón Cargo',
      category: 'Hombre',
      price: '$74',
      description: 'Resistente, funcional, cómodo y con bolsillos amplios.',
      image: '/novedad4.png',
      badgeColor: 'bg-green-100 text-green-800',
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 transition-colors duration-500"
      style={{ backgroundColor: '#fef3c7' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-2 sm:mb-3">
            Novedades
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Descubrí lo último en estilo, confort y tendencia para esta temporada.
          </p>
        </div>

        {/* Carrusel */}
        <div
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.novedades-pagination' }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="relative rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
          >
            {novedades.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col md:flex-row items-center justify-center bg-white/90 rounded-2xl overflow-hidden shadow-lg">
                  
                  {/* Imagen */}
                  <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 p-5 sm:p-6 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-auto h-[280px] sm:h-[340px] object-contain transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 text-xs sm:text-sm font-semibold rounded-full ${item.badgeColor} backdrop-blur-sm shadow-sm`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Texto */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 sm:p-7 lg:p-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <span className="text-2xl font-bold text-yellow-600 mb-4 block">
                      {item.price}
                    </span>
                    <div className="flex justify-center md:justify-start">
                      <button className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                        Ver producto
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Paginación */}
          <div className="novedades-pagination flex justify-center mt-6 sm:mt-7 gap-3"></div>
        </div>
      </div>

      {/* Estilo bullets */}
      <style jsx>{`
        .novedades-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #fbbf24;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .novedades-pagination .swiper-pagination-bullet-active {
          transform: scale(1.4);
          opacity: 1;
          background-color: #facc15;
        }
      `}</style>
    </section>
  );
};

export default Novedades;
