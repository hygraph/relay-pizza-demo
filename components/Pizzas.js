import React from "react";
import { createPaginationContainer, graphql } from "react-relay";
import { Button } from "@chakra-ui/core";
import Pizza from "./Pizza";

class Pizzas extends React.Component {
  render() {
    const { pizzas } = this.props;
    const { pizzasConnection } = pizzas;
    return (
      <>
        <div>
          <h1>Pizzas</h1>
          {pizzasConnection.edges.map(({ node }) => (
            <Pizza key={node.id} pizza={node} />
          ))}
        </div>
        <Button onClick={() => this._loadMore()} title="Load More">
          Load More
        </Button>
      </>
    );
  }

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      console.log(this.props.relay.hasMore());
      return;
    }

    this.props.relay.loadMore(1, (error) => {
      console.log(error);
    });
  }
}

export default createPaginationContainer(
  Pizzas,
  {
    pizzas: graphql`
      fragment Pizzas_pizzas on Query
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 1 }
        cursor: { type: "String" }
        orderBy: { type: "PizzaOrderByInput", defaultValue: title_ASC }
      ) {
        pizzasConnection(first: $count, after: $cursor, orderBy: $orderBy)
        @connection(key: "Pizzas_pizzasConnection") {
          edges {
            node {
              ...Pizza_pizza
              id
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.pizzas.pizzasConnection;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
        orderBy: fragmentVariables.orderBy,
      };
    },
    query: graphql`
      query PizzasQuery(
        $count: Int
        $cursor: String
        $orderBy: PizzaOrderByInput
      ) {
        ...Pizzas_pizzas
        @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
      }
    `,
  }
);
