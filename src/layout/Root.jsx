import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { useFetch } from "../hooks/useFetch.jsx";
import { endpoint } from "../utils/constants.js";
import { CartProvider } from "../context/CartContext.jsx";
import { UserProvider } from "../context/UserContext.jsx";

export default function Root() {
  const { error, isLoading } = useFetch(endpoint);

  if (error) {
    return (
      <div>
        <p>Ha ocurrrido un error: {error.toString()}</p>
        <p>
          Tienes el servidor local corriento en el puerto 5000? Ese puede ser el
          problema
        </p>
      </div>
    );
  }
  if (isLoading) {
    return <p>...Cargando datos</p>;
  }

  return (
    <CartProvider>
      <UserProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </UserProvider>
    </CartProvider>
  );
}
