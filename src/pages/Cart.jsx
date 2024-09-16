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
import { handleAddToCart, handleRemoveFromCart } from "../actions/cart-actions";
import useAuth from "../hooks/useAuth";

export default function Cart({ navHeight, footerHeight }) {
  const { cart, dispatch, totalPrice } = useContext(CartContext);
  const { token } = useAuth();

  const addToCart = handleAddToCart(dispatch);
  const removeFromCart = handleRemoveFromCart(dispatch);

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
      {token ? (
        <Button className="bg-primary text-center flex-grow-1 text-white">
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
    </Container>
  );
}
