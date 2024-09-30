/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function Profile({ navHeight, footerHeight }) {
  const navigate = useNavigate();
  const { isAuthenticated, email, id, profile, token, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Usuario no autenticado");
      navigate("/login");
    } else {
      profile(token);
    }
  }, [isAuthenticated]);

  return (
    <Container
      style={{
        alignContent: "center",
        minHeight: `calc(100vh - ${navHeight} - ${footerHeight})`,
      }}
    >
      <Card>
        <Card.Body>
          <h1>{email}</h1>
          <p>Tu id es: {id}</p>
          <hr />
          <Button variant="primary" type="submit" onClick={logout}>
            Cerrar Sesion
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
