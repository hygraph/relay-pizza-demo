import { createFragmentContainer, graphql } from "react-relay";
import Pizza_pizza from "./Pizza";

const Pizzas = ({ pizza }) => (
  <div>
    <h1>Pizzas</h1>
    {pizza?.edges.map(({ node }) => (
      <Pizza_pizza key={node.id} pizza={node} />
    ))}
  </div>
);

export default createFragmentContainer(Pizzas, {
  pizza: graphql`
    fragment Pizzas_pizza on PizzaConnection {
      edges {
        node {
          ...Pizza_pizza
          id
        }
      }
    }
  `,
});
