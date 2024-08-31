/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { useWindowDimensions } from "../hooks/useWindowsDimensions";
import { BP_LG, BP_SM, endpoint } from "../utils/constants";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const { width } = useWindowDimensions();
  const { data, isLoading, error } = useFetch(endpoint);

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

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  if (isLoading) {
    return <div>...cargando</div>;
  }

  return (
    <>
      <Header />
      <Container className="mt-4 mb-4">
        <div
          className="gap-2"
          style={{ display: "grid", gridTemplateColumns: getNumberOfColumns() }}
        >
          {data?.map(
            (
              pizza // profesor, ocupe ? por que si no la app se rompia en react stric mode
            ) => (
              <CardPizza
                key={pizza.id}
                id={pizza.id}
                name={pizza.name}
                desc={pizza.desc}
                img={pizza.img}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            )
          )}
        </div>
      </Container>
    </>
  );
}
