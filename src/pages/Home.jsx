/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { useWindowDimensions } from "../hooks/useWindowsDimensions";
import { BP_LG, BP_SM, endpoint } from "../utils/constants";
import { getNumberOfColumns } from "../utils/getCols";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const { width } = useWindowDimensions();
  const { data, isLoading, error } = useFetch(endpoint);

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
          style={{
            display: "grid",
            gridTemplateColumns: getNumberOfColumns(width, BP_LG, BP_SM),
          }}
        >
          {data?.map((pizza) => (
            <CardPizza key={pizza.id} item={pizza} />
          ))}
        </div>
      </Container>
    </>
  );
}
