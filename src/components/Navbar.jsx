import Container from "react-bootstrap/Container";
import BNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { numberToClpPrice } from "../utils/transformPrice";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { totalPrice } = useContext(CartContext);
  const { logout, token } = useAuth();

  return (
    <BNavbar expand="lg" className="bg-body-tertiary">
      <Container className="justify-content-between">
        <Link to="/">
          <BNavbar.Brand>Pizzeria Mamma Mia</BNavbar.Brand>
        </Link>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <Button variant="outline-primary">🍕 Home</Button>
            </Link>
            {token ? (
              <>
                <Button variant="outline-primary" onClick={logout}>
                  {token ? "🔓" : "🔐"} Logout
                </Button>
                <Link to="/profile">
                  <Button variant="outline-primary">
                    {token ? "🔓" : "🔐"} Perfil
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline-primary">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline-primary">
                    {token ? "🔓" : "🔐"}
                    Register
                  </Button>
                </Link>
              </>
            )}
          </Nav>
          <Link to="/cart">
            <Button variant="outline-secondary">
              🛒 Total {numberToClpPrice(totalPrice)}
            </Button>
          </Link>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}
