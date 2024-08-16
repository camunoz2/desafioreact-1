/* eslint-disable react/prop-types */
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { numberToClpPrice } from "../utils/transformPrice";

export default function Cart({ pizzaCart, navHeight, footerHeight }) {
  const totalValue = 200;
  const [cart, setCart] = useState(pizzaCart);

  function add(id) {
    let updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function remove(id) {
    let updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });

    updatedCart = updatedCart.filter((item) => item.count > 0);
    setCart(updatedCart);
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
          <Row
            key={item.id}
            className="align-items-center border border-primary rounded overflow-hidden"
          >
            <Col style={{ padding: 0 }}>
              <Image
                src={item.img}
                alt={item.name}
                style={{ height: "200px" }}
              />
            </Col>
            <Col>
              <h2>{item.name.toUpperCase()}</h2>
            </Col>
            <Col>
              <Stack direction="horizontal">
                <Button
                  onClick={() => add(item.id)}
                  className="bg-primary text-center flex-grow-1 text-white"
                >
                  +
                </Button>
                <div className="text-center flex-grow-1">{item.count}</div>
                <Button
                  onClick={() => remove(item.id)}
                  className="bg-primary text-center flex-grow-1 text-white"
                >
                  -
                </Button>
              </Stack>
            </Col>
            <Col className="text-center">
              <p>{numberToClpPrice(item.price * item.count)}</p>
            </Col>
          </Row>
        ))}
      </Stack>
      <div className="display-6 d-flex justify-content-end">
        Total: {numberToClpPrice(totalValue)}
      </div>
    </Container>
  );
}
