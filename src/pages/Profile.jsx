/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Profile({ navHeight, footerHeight }) {
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
