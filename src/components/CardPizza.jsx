/* eslint-disable react/prop-types */
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { numberToClpPrice } from "../utils/transformPrice";
import { ListGroup } from "react-bootstrap";

export default function CardPizza({ name, price, ingredients, img, desc }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name.toUpperCase()}</Card.Title>
        <Card.Text>Ingredientes</Card.Text>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {ingredients.map((ingredient, idx) => (
          <ListGroup.Item key={idx}>{ingredient}</ListGroup.Item> // Profesor, estos reemplazan a los li x si acaso
        ))}
      </ListGroup>
      <Card.Footer>
        <p>{numberToClpPrice(price)}</p>
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary">Ver mas 👁️</Button>
          <Button variant="outline-primary" className="ms-auto">
            Agregar 🛒
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  );
}
