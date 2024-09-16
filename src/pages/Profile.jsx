/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function Profile({ navHeight, footerHeight }) {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      console.log("user not logged in");
      navigate("/login");
    }
  }, [token]);

  return (
    <Container
      style={{
        alignContent: "center",
        minHeight: `calc(100vh - ${navHeight} - ${footerHeight})`,
      }}
    >
      <Card>
        <Card.Body>
          <h1>Hola test@email.com</h1>
          <hr />
          <Button variant="primary" type="submit">
            Cerrar Sesion
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
