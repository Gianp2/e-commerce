import React, { memo } from "react";
import { FaStar, FaRocket, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: FaStar,
    title: "Calidad Inigualable",
    description:
      "Seleccionamos cada producto con un compromiso absoluto por la calidad, garantizando durabilidad y satisfacción.",
    delay: 0.1,
  },
  {
    id: 2,
    icon: FaRocket,
    title: "Innovación Vanguardista",
    description:
      "Nos anticipamos a las tendencias, ofreciendo productos que combinan diseño y tecnología de última generación.",
    delay: 0.3,
  },
  {
    id: 3,
    icon: FaHeadset,
    title: "Atención Excepcional",
    description:
      "Estamos contigo en cada paso, ofreciendo un servicio personalizado que hace que tu experiencia sea única.",
    delay: 0.5,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const SobreNosotros = () => {
  return (
    <section
      id="sobre-nosotros"
      className="py-28 px-6 lg:px-24 bg-gradient-to-b from-[#fde68a] to-white dark:bg-none dark:bg-[#0f172a] transition-colors duration-300"
      aria-labelledby="sobre-nosotros-title"
    >
      <div className="max-w-7xl mx-auto text-center">

        <motion.h2
          id="sobre-nosotros-title"
          className="mb-8 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Nuestra Esencia
        </motion.h2>

        <motion.p
          className="mb-12 max-w-4xl mx-auto text-xl sm:text-2xl leading-relaxed text-gray-700 dark:text-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
        >
          En <strong>[Tienda]</strong>, creamos experiencias de compra que inspiran y conectan.
          Somos un equipo apasionado por la calidad, la innovación y el compromiso con nuestros clientes.
          Cada producto que ofrecemos refleja nuestra dedicación a la excelencia, diseñada para transformar tu día a día con estilo y confianza.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map(({ id, icon: Icon, title, description, delay }) => (
            <motion.div
              key={id}
              className="relative p-8 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
              custom={delay}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 p-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg">
                <Icon className="text-3xl" />
              </div>

              <h3 className="mt-8 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(SobreNosotros);
