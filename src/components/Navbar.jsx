import Container from "react-bootstrap/Container";
import BNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { numberToClpPrice } from "../utils/transformPrice";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { totalPrice } = useContext(CartContext);
  const token = false;

  return (
    <BNavbar expand="lg" className="bg-body-tertiary">
      <Container className="justify-content-between">
        <Link to="/home">
          <BNavbar.Brand>Pizzeria Mamma Mia</BNavbar.Brand>
        </Link>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home">
              <Button variant="outline-primary">🍕 Home</Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline-primary">
                {token ? "🔓" : "🔐"} Perfil
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline-primary">
                {token ? "🔓" : "🔐"} Login
              </Button>
            </Link>
            <Nav to="/register">
              <Button variant="outline-primary">
                {token ? "🔓" : "🔐"}
                Register
              </Button>
            </Nav>
          </Nav>
        </BNavbar.Collapse>
        <Link to="/cart">
          <Button variant="outline-secondary">
            🛒 Total {numberToClpPrice(totalPrice)}
          </Button>
        </Link>
      </Container>
    </BNavbar>
  );
}
