/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import CardPizza from "./CardPizza";
import Header from "./Header";
import { useWindowDimensions } from "../hooks/useWindowsDimensions";
import { BP_LG, BP_SM } from "../utils/constants";

export default function Home({ pizzas }) {
  const { width } = useWindowDimensions();

  function getNumberOfColumns() {
    let gridColumnsConfiguration = "";
    if (width > BP_LG) {
      gridColumnsConfiguration = "repeat(3, 1fr)";
    } else if (width > BP_SM && width < BP_LG) {
      gridColumnsConfiguration = "repeat(2, 1fr)";
    } else {
      gridColumnsConfiguration = "1fr";
    }
    return gridColumnsConfiguration;
  }

  return (
    <>
      <Header />
      <Container className="mt-4 mb-4">
        <div
          className="gap-2"
          style={{ display: "grid", gridTemplateColumns: getNumberOfColumns() }}
        >
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              desc={pizza.desc}
              img={pizza.img}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
