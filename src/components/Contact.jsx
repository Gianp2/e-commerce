import React from 'react';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className="py-24 relative overflow-hidden transition-all duration-700"
      style={{
        background: isDark
          ? 'linear-gradient(to bottom, #1e293b, #0f172a)'
          : 'linear-gradient(to bottom, #ffffff, #fef3c7)',
      }}
    >
      {/* Fondos decorativos con movimiento parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className={`absolute top-36 right-16 w-56 h-56 rounded-full blur-2xl animate-float ${
          isDark ? 'bg-amber-400/30' : 'bg-amber-300/50'
        }`}
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className={`text-5xl md:text-6xl font-extrabold mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Contáctanos
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Estamos para ayudarte — escríbenos o visítanos cuando quieras.
          </p>
        </motion.div>

        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Formulario con efecto de entrada */}
          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`p-10 rounded-3xl shadow-lg backdrop-blur-sm flex flex-col justify-between border hover:shadow-2xl transition-all duration-500 w-full lg:w-1/2 h-[600px] hover:-translate-y-1 ${
              isDark
                ? 'bg-gray-800/60 border-gray-700 text-white'
                : 'bg-gray-50/80 border-gray-100 text-gray-900'
            }`}
          >
            <div className="flex flex-col gap-6">
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Envíanos un mensaje
              </h3>
              <input
                type="text"
                placeholder="Tu nombre"
                className={`p-4 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white focus:ring-amber-500'
                    : 'bg-white border-gray-300 focus:ring-amber-500 text-gray-900'
                }`}
              />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className={`p-4 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white focus:ring-amber-500'
                    : 'bg-white border-gray-300 focus:ring-amber-500 text-gray-900'
                }`}
              />
              <textarea
                placeholder="Tu mensaje"
                rows="5"
                className={`p-4 rounded-xl border focus:outline-none focus:ring-2 transition-all resize-none ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white focus:ring-amber-500'
                    : 'bg-white border-gray-300 focus:ring-amber-500 text-gray-900'
                }`}
              />
            </div>
            <button
              type="submit"
              className={`font-semibold py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-1 ${
                isDark
                  ? 'bg-amber-500 hover:bg-amber-600 text-gray-900'
                  : 'bg-amber-500 hover:bg-amber-600 text-white'
              }`}
            >
              Enviar mensaje
            </button>
          </motion.form>

          {/* Info + Mapa con fade-in progresivo */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col w-full lg:w-1/2 gap-6 h-[600px]"
          >
            <motion.div
              variants={fadeInUp}
              className={`p-8 rounded-3xl shadow-2xl border backdrop-blur-md flex-1 flex flex-col justify-center items-center text-center gap-6 hover:-translate-y-1 transition-transform duration-500 ${
                isDark
                  ? 'bg-gray-800/80 border-gray-700 text-white'
                  : 'bg-white/95 border-gray-100 text-gray-700'
              }`}
            >
              <h4 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Sparkles className="text-amber-500" size={24} />
                Información de contacto
              </h4>

              <div className="flex flex-col gap-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="text-amber-500" size={22} />
                  <p className="font-medium">Av. Principal 1234, Buenos Aires</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="text-amber-500" size={22} />
                  <p className="font-medium">+54 11 1234-5678</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="text-amber-500" size={22} />
                  <p className="font-medium">contacto@MiTienda.com</p>
                </div>
              </div>

              <div
                className={`mt-6 p-4 rounded-xl w-full border ${
                  isDark
                    ? 'bg-gray-700/50 border-gray-700 text-white'
                    : 'bg-gray-50 border-gray-200 text-gray-800'
                }`}
              >
                <h5 className="font-semibold mb-2 flex justify-center items-center gap-2">
                  <Sparkles className="text-amber-500" size={18} />
                  Horarios de atención
                </h5>
                <p className="text-sm">Lunes a Viernes: 9:00 - 20:00</p>
                <p className="text-sm">Sábados: 10:00 - 18:00</p>
                <p className="text-sm">Domingos: Cerrado</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className={`relative w-full flex-1 rounded-3xl overflow-hidden shadow-xl border ${
                isDark ? 'border-gray-700' : 'border-gray-100'
              }`}
            >
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.851029885265!2d-58.38159248477037!3d-34.603684580459616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac22db1b7b9%3A0xc0c8d3f2ef4375aa!2sAv.%20Principal%201234%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1698519123456!5m2!1ses-419!2sar"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
