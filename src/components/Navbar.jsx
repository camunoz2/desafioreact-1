import Container from "react-bootstrap/Container";
import BNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { numberToClpPrice } from "../utils/transformPrice";

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
            <Nav.Link href="#home">
              <Button variant="outline-primary">🍕 Home</Button>
            </Nav.Link>
            <Nav.Link href="#login">
              <Button variant="outline-primary">
                {token ? "🔓" : "🔐"} Login
              </Button>
            </Nav.Link>
            <Nav.Link href="#register">
              <Button variant="outline-primary">
                {token ? "🔓" : "🔐"}
                Register
              </Button>
            </Nav.Link>
          </Nav>
        </BNavbar.Collapse>
        <Button variant="outline-secondary">
          🛒 Total {numberToClpPrice(total)}
        </Button>
      </Container>
    </BNavbar>
  );
}
