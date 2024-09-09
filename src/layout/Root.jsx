import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { useFetch } from "../hooks/useFetch.jsx";
import { endpoint } from "../utils/constants.js";
import { Outlet } from "react-router-dom";
import { CartContext } from "../context/CartContext.js";
import { pizzaCart } from "../data/pizzas.js";
import { useReducer } from "react";
import cartReducer from "../reducers/CartReducer.js";

export default function Root() {
  const { error, isLoading } = useFetch(endpoint);
  const [cart, dispatch] = useReducer(cartReducer, pizzaCart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  if (error) {
    return (
      <div>
        <p>Ha ocurrrido un error: {error.toString()}</p>
        <p>Tienes el servidor local corriento en el puerto 5000? Ese puede ser el problema</p>
      </div>
    );
  }
  if (isLoading) {
    return <p>...Cargando datos</p>;
  }

  return (
    <CartContext.Provider value={{ cart, dispatch, totalPrice }}>
      <Navbar />
      <Outlet />
      <Footer />
    </CartContext.Provider>
  );
}
