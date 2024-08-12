import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  const navHeight = "70px";
  const footerHeight = "88px";

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register navHeight={navHeight} footerHeight={footerHeight} /> */}
      <Login navHeight={navHeight} footerHeight={footerHeight} />
      <Footer />
    </>
  );
}
