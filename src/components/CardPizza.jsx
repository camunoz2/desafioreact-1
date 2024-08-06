/* eslint-disable react/prop-types */
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { numberToClpPrice } from "../utils/transformPrice";

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <h3>Ingredientes</h3>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <h3>{numberToClpPrice(price)}</h3>
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
