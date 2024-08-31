import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <Container>
      <Card id="error-page" className="p-5">
        <h1>Oops!</h1>
        <p>Ha ocurrido un error inesperado</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Volver</Link>
      </Card>
    </Container>
  );
}
