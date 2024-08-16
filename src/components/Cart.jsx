/* eslint-disable react/prop-types */
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { numberToClpPrice } from "../utils/transformPrice";

function Adder({ count, add, remove }) {
  return (
    <Stack direction="horizontal">
      <Button
        onClick={add}
        className="bg-primary text-center flex-grow-1 text-white"
      >
        +
      </Button>
      <div className="text-center flex-grow-1">{count}</div>
      <Button
        onClick={remove}
        className="bg-primary text-center flex-grow-1 text-white"
      >
        -
      </Button>
    </Stack>
  );
}

function PizzaItem({ item, handleAdd, handleRemove }) {
  return (
    <Row className="align-items-center border border-primary rounded overflow-hidden">
      <Col style={{ padding: 0 }}>
        <Image src={item.img} alt={item.name} style={{ height: "200px" }} />
      </Col>
      <Col>
        <h2>{item.name.toUpperCase()}</h2>
      </Col>
      <Col>
        <Adder add={handleAdd} remove={handleRemove} count={item.count} />
      </Col>
      <Col className="text-center">
        <p>{numberToClpPrice(item.price * item.count)}</p>
      </Col>
    </Row>
  );
}

export default function Cart({ pizzaCart, navHeight, footerHeight }) {
  const [cart, setCart] = useState(pizzaCart);

  const totalValue = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  function handleAdd(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }

  function handleRemove(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
    );
  }

  return (
    <Container
      style={{
        alignContent: "center",
        minHeight: `calc(100vh - ${navHeight} - ${footerHeight})`,
      }}
    >
      <Stack gap={3}>
        {cart.map((item) => (
          <PizzaItem
            handleAdd={() => handleAdd(item.id)}
            handleRemove={() => handleRemove(item.id)}
            item={item}
            key={item.id}
          />
        ))}
      </Stack>
      <div className="display-6 d-flex justify-content-end">
        Total: {numberToClpPrice(totalValue)}
      </div>
    </Container>
  );
}
