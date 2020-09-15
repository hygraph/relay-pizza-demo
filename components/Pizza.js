import { createFragmentContainer, graphql } from "react-relay";
import { Grid, Box, Text, Image } from "@chakra-ui/core";
import ToppingsCheese from "./ToppingsCheese";
import ToppingsSauce from "./ToppingsSauce";

import ToppingsFruit from "./ToppingsFruit";
import ToppingsMeat from "./ToppingsMeat";
import ToppingsVegetable from "./ToppingsVegetable";
import ToppingsFungus from "./ToppingsFungus";

const Topping = {
  Meat: ToppingsMeat,
  Vegetable: ToppingsVegetable,
  Fungus: ToppingsFungus,
  Fruit: ToppingsFruit,
};

const Pizza = ({ pizza }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
      <Box w="100%" bg="blue.500">
        <div key={pizza.id}>
          <Text fontSize="3xl">{pizza.title}</Text>
        </div>
      </Box>
      <Box w="100%" bg="red.500">
        <Image src={pizza.image[0].url} objectFit="cover" w="full" />
      </Box>
      <Box w="100%" bg="green.500">
        {pizza.toppings.map((topping, index) => {
          const Component = Topping[topping.__typename];
          return <Component key={index} topping={topping} />;
        })}
      </Box>
      <Box w="100%" bg="yellow.500"></Box>
    </Grid>
  );
};

export default createFragmentContainer(Pizza, {
  pizza: graphql`
    fragment Pizza_pizza on Pizza {
      id
      title
      image {
        url
      }
      toppings {
        __typename
        ...ToppingsMeat_topping
        ...ToppingsFruit_topping
        ...ToppingsVegetable_topping
        ...ToppingsFungus_topping
      }
    }
  `,
});
