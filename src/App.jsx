import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useFetch } from "./hooks/useFetch";
import Cart from "./components/Cart.jsx";
import { pizzaCart } from "./data/pizzas.js";
import Pizza from "./components/Pizza.jsx";
// import Register from "./components/Register";
// import Login from "./components/Login";

export const endpoint = "http://localhost:5000/api/pizzas";
export default function App() {
  const navHeight = "70px";
  const footerHeight = "88px";

  const { data, error, isLoading } = useFetch(endpoint);

  if (error) {
    return (
      <div>
        <p>Ha ocurrrido un error: {error}</p>
      </div>
    );
  }
  if (isLoading) {
    return <p>...Cargando datos</p>;
  }

  return (
    <>
      <Navbar />
      {/* <Home pizzas={data} /> */}
      {/* <Cart
        pizzaCart={pizzaCart}
        navHeight={navHeight}
        footerHeight={footerHeight}
      /> */}
      {/* <Register navHeight={navHeight} footerHeight={footerHeight} /> */}
      {/* <Login navHeight={navHeight} footerHeight={footerHeight} /> */}
      <Pizza pizzaId={"p002"} />
      <Footer />
    </>
  );
}
