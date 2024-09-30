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
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

export default function Cart({ navHeight, footerHeight }) {
  const { cart, totalPrice } = useContext(CartContext);
  const { isAuthenticated, token } = useAuth();
  const { addToCart, removeFromCart, checkout, sucessMessage } = useCart();

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
                  onClick={() => addToCart(item)}
                  className="bg-primary text-center flex-grow-1 text-white"
                >
                  +
                </Button>
                <div className="text-center flex-grow-1">{item.count}</div>
                <Button
                  onClick={() => removeFromCart(item)}
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
      {isAuthenticated ? (
        <Button
          onClick={() => checkout(token, cart)}
          className="bg-primary text-center flex-grow-1 text-white"
        >
          Pagar
        </Button>
      ) : (
        <Button
          disabled
          className="bg-primary text-center flex-grow-1 text-white"
        >
          Debes estar logeado para pagar
        </Button>
      )}
      {sucessMessage && <div>{sucessMessage}</div>}
    </Container>
  );
}
