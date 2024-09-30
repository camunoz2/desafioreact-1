/* eslint-disable react/prop-types */
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { numberToClpPrice } from "../utils/transformPrice";
import { ListGroup } from "react-bootstrap";
import useCart from "../hooks/useCart";

export default function CardPizza({ item }) {
  const { addToCart } = useCart();

  return (
    <Card>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name.toUpperCase()}</Card.Title>
        <Card.Text>Ingredientes</Card.Text>
        <Card.Text>{item.desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {item.ingredients.map((ingredient, idx) => (
          <ListGroup.Item key={idx}>{ingredient}</ListGroup.Item> // Profesor, estos reemplazan a los li x si acaso
        ))}
      </ListGroup>
      <Card.Footer>
        <p>{numberToClpPrice(item.price)}</p>
        <Stack direction="horizontal" gap={2}>
          <Link to={`/pizza/${item.id}`}>
            <Button variant="primary">Ver mas 👁️</Button>
          </Link>
          <Button
            onClick={() => addToCart(item)}
            variant="outline-primary"
            className="ms-auto"
          >
            Agregar 🛒
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  );
}
