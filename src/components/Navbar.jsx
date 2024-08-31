import Container from "react-bootstrap/Container";
import BNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { numberToClpPrice } from "../utils/transformPrice";
import { Link } from "react-router-dom";

export default function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <BNavbar expand="lg" className="bg-body-tertiary">
      <Container className="justify-content-between">
        <BNavbar.Brand href="#home">Pizzeria Mamma Mia</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home">
              <Button variant="outline-primary">🍕 Home</Button>
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
            🛒 Total {numberToClpPrice(total)}
          </Button>
        </Link>
      </Container>
    </BNavbar>
  );
}
