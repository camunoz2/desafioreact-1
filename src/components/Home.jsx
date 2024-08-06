import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardPizza from "./CardPizza";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <Container className="mt-4 mb-4">
        <Row className="gap-2">
          <Col>
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["Mozarella", "tomates", "jamon", "oregano"]}
              img="pizza1.jpg"
            />
          </Col>
          <Col>
            <CardPizza
              name="Espanola"
              price={6950}
              ingredients={[
                "Mozarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              img="pizza2.jpg"
            />
          </Col>
          <Col>
            <CardPizza
              name="Pepperoni"
              ingredients={["Mozarella", "pepperoni", "oregano"]}
              price={6950}
              img="pizza3.jpg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
