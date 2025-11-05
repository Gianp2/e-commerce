import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { motion } from "framer-motion";

const LoginAdmin = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);

    try {
      const respuesta = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: correo, password: contrasena }),
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        localStorage.setItem("adminToken", datos.token);
        navigate("/admin/dashboard");
      } else {
        setError(datos.message || "Credenciales inválidas");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor");
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col items-center"
      >
        {/* Img Huella*/}
        <img
          src="/huella.png"
          alt="Huella"
          className="w-20 h-20 mb-4 drop-shadow-[0_0_20px_rgba(255,255,0,0.6)]"
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white tracking-tight">
          Login - Administrador
        </h2>

        <form onSubmit={handleSubmit} className="w-full space-y-6 flex flex-col items-center">
          {/* Email */}
          <div className="relative w-full">
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Correo electrónico
            </label>
            <div className="relative">
              <HiOutlineMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-yellow-400" />
              <input
                id="correo"
                type="email"
                placeholder="admin@ejemplo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="pl-10 p-3 w-full rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-200 bg-gray-900/70 text-white placeholder-gray-400"
                required
                aria-describedby={error ? "correo-error" : undefined}
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="relative w-full">
            <label
              htmlFor="contrasena"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Contraseña
            </label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute top-1/2 left-3 transform -translate-y-1/2 text-yellow-400" />
              <input
                id="contrasena"
                type="password"
                placeholder="••••••••"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                className="pl-10 p-3 w-full rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-200 bg-gray-900/70 text-white placeholder-gray-400"
                required
                aria-describedby={error ? "contrasena-error" : undefined}
              />
            </div>
          </div>

          {/* Mensaje de error */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm font-medium text-center"
              id="error-message"
            >
              {error}
            </motion.p>
          )}

          {/* Botón */}
          <button
            type="submit"
            disabled={cargando}
            className="w-3/4 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            aria-label="Iniciar sesión"
          >
            {cargando && (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {cargando ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginAdmin;
