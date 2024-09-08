/* eslint-disable react/prop-types */
import { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { numberToClpPrice } from "../utils/transformPrice";
import { CartContext } from "../context/CartContext";

export default function Cart({ navHeight, footerHeight }) {
  const { cart, dispatch, totalPrice } = useContext(CartContext);

  function handleAddToCart(id) {
    dispatch({
      type: "added",
      id: id,
    });
  }

  function handleRemoveFromCart(id) {
    dispatch({
      type: "removed",
      id: id,
    });
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
                  onClick={() => handleAddToCart(item.id)}
                  className="bg-primary text-center flex-grow-1 text-white"
                >
                  +
                </Button>
                <div className="text-center flex-grow-1">{item.count}</div>
                <Button
                  onClick={() => handleRemoveFromCart(item.id)}
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
        Total: {numberToClpPrice(totalPrice)}
      </div>
    </Container>
  );
}
