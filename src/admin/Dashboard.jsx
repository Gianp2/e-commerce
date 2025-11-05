import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Panel Admin</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Cerrar Sesión
        </button>
      </header>

      <main>
        <p className="text-gray-700 dark:text-gray-300">
          Bienvenido al dashboard del admin. Aquí podrás gestionar los productos, pedidos y usuarios.
        </p>
        {/* Más contenido del panel se puede agregar aca */}
      </main>
    </div>
  );
};

export default Dashboard;
