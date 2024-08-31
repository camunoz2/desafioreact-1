/* eslint-disable react/prop-types */
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { numberToClpPrice } from "../utils/transformPrice";
import { Container, ListGroup } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import { endpoint } from "../utils/constants";

export default function Pizza({ pizzaId }) {
  const { data, error, isLoading } = useFetch(endpoint + "/" + pizzaId);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (isLoading) {
    return <div>...cargando...</div>;
  }
  if (!data) {
    return <div>No hay pizzas con ese ID!</div>;
  }

  return (
    <Container>
      <Card>
        <Card.Img
          style={{ maxHeight: "400px", objectFit: "cover" }}
          variant="top"
          src={data.img}
        />
        <Card.Body>
          <Card.Title>{data.name.toUpperCase()}</Card.Title>
          <Card.Text>Ingredientes</Card.Text>
          <Card.Text>{data.desc}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {data.ingredients.map((ingredient, idx) => (
            <ListGroup.Item key={idx}>{ingredient}</ListGroup.Item> // Profesor, estos reemplazan a los li x si acaso
          ))}
        </ListGroup>
        <Card.Footer>
          <p>{numberToClpPrice(data.price)}</p>
          <Stack direction="horizontal" gap={2}>
            <Button variant="outline-primary" className="ms-auto">
              Agregar 🛒
            </Button>
          </Stack>
        </Card.Footer>
      </Card>
    </Container>
  );
}
