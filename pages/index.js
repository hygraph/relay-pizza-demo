import { graphql, fetchQuery } from "react-relay";
import { useQuery } from "relay-hooks";
import { Container } from "@chakra-ui/core";

import { initEnvironment } from "../lib/createEnvironment";
import Pizzas from "../components/Pizzas";

const query = graphql`
  query pages_Query {
    pizzasConnection {
      ...Pizzas_pizza
    }
  }
`;

const Index = ({ environment }) => {
  const { error, props } = useQuery(query);

  if (error) return <Container>{error.message}</Container>;

  if (!props) return <Container>Loading</Container>;

  return (
    <Container>
      <Pizzas pizza={props.pizzasConnection} />
    </Container>
  );
};

export async function getStaticProps() {
  const { environment, relaySSR } = initEnvironment();

  await fetchQuery(environment, query);

  const relayData = (await relaySSR.getCache())?.[0];

  return {
    props: {
      relayData: !relayData ? null : [[relayData[0], relayData[1].json]],
    },
  };
}

export default Index;
