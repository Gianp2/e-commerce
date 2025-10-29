import React from 'react';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-100/40 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Contáctanos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos para ayudarte — escribinos o visitanos cuando quieras.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Formulario */}
          <form className="bg-gray-50/80 p-10 rounded-3xl shadow-lg backdrop-blur-sm flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition-all duration-300 h-[600px]">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Envíanos un mensaje
              </h3>
              <input
                type="text"
                placeholder="Tu nombre"
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              />
              <textarea
                placeholder="Tu mensaje"
                rows="5"
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Mapa + Info */}
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.851029885265!2d-58.38159248477037!3d-34.603684580459616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac22db1b7b9%3A0xc0c8d3f2ef4375aa!2sAv.%20Principal%201234%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1698519123456!5m2!1ses-419!2sar"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Tarjeta de información */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-80 border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="text-amber-600" size={22} />
                Información de contacto
              </h4>
              <div className="flex flex-col gap-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <MapPin className="text-amber-600" size={22} />
                  <p>Av. Principal 1234, Buenos Aires</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-amber-600" size={22} />
                  <p>+54 11 1234-5678</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-amber-600" size={22} />
                  <p>contacto@MiTienda.com</p>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-1 flex justify-center items-center gap-2">
                  <Sparkles className="text-amber-600" size={18} />
                  Horarios de atención
                </h5>
                <p className="text-sm text-gray-600">Lunes a Viernes: 9:00 - 20:00</p>
                <p className="text-sm text-gray-600">Sábados: 10:00 - 18:00</p>
                <p className="text-sm text-gray-600">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
