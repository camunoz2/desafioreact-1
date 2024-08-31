import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { useFetch } from "../hooks/useFetch.jsx";
import { endpoint } from "../utils/constants.js";
import { Outlet } from "react-router-dom";

export function Root() {
  const { error, isLoading } = useFetch(endpoint);

  if (error) {
    return (
      <div>
        <p>Ha ocurrrido un error: {error.toString()}</p>
      </div>
    );
  }
  if (isLoading) {
    return <p>...Cargando datos</p>;
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
