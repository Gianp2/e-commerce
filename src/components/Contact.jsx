import React from 'react';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const [refTitle, isVisibleTitle] = useIntersectionObserver({ threshold: 0.2 });
  const [refMap, isVisibleMap] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-16 left-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-16 right-10 w-72 h-72 bg-gray-200/40 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <div
          ref={refTitle}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisibleTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas o dudas? Nuestro equipo está listo para ayudarte en lo que necesites.
          </p>
        </div>

        {/* Mapa */}
        <div
          ref={refMap}
          className={`relative w-full h-96 lg:h-[450px] rounded-3xl overflow-hidden shadow-xl transition-all duration-700 ${
            isVisibleMap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.851029885265!2d-58.38159248477037!3d-34.603684580459616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac22db1b7b9%3A0xc0c8d3f2ef4375aa!2sAv.%20Principal%201234%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1698519123456!5m2!1ses-419!2sar"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Card flotante de contacto */}
          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-80 flex flex-col gap-5 border border-gray-200">
            <div className="flex items-center gap-4">
              <MapPin className="text-amber-600" size={26} />
              <p className="text-gray-800 font-medium">Av. Principal 1234, Buenos Aires</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-amber-600" size={26} />
              <p className="text-gray-800 font-medium">+54 11 1234-5678</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-amber-600" size={26} />
              <p className="text-gray-800 font-medium">contacto@MiTienda.com</p>
            </div>
          </div>
        </div>

        {/* Horarios de atención */}
        <div className="mt-12 p-8 bg-gray-50 rounded-3xl shadow-lg text-gray-800 text-center max-w-md mx-auto transition-transform hover:-translate-y-2 duration-300">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-amber-600" size={26} />
            Horarios de Atención
          </h3>
          <div className="space-y-2 text-lg">
            <p><span className="font-semibold">Lunes a Viernes:</span> 9:00 - 20:00</p>
            <p><span className="font-semibold">Sábados:</span> 10:00 - 18:00</p>
            <p><span className="font-semibold">Domingos:</span> Cerrado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
