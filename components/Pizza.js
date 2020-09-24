import { createFragmentContainer, graphql } from "react-relay";
import { Grid, Box, Text, Image, Center } from "@chakra-ui/core";
import ToppingsCheese from "./ToppingsCheese";
import ToppingsSauce from "./ToppingsSauce";

import ToppingsFruit from "./ToppingsFruit";
import ToppingsMeat from "./ToppingsMeat";
import ToppingsVegetable from "./ToppingsVegetable";
import ToppingsFungus from "./ToppingsFungus";
import ToppingsOil from "./ToppingsOil";

const Topping = {
  Meat: ToppingsMeat,
  Vegetable: ToppingsVegetable,
  Fungus: ToppingsFungus,
  Fruit: ToppingsFruit,
  Oil: ToppingsOil,
};

const Pizza = ({ pizza }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" mb={4}>
      <Box w="100%" bg="yellow.200" p={4}>
        <Center width="full" height="full" key={pizza.id}>
          <Text fontSize="3xl">{pizza.title}</Text>
        </Center>
      </Box>
      <Box w="100%">
        <Image src={pizza.image[0].url} objectFit="cover" w="full" />
      </Box>
      <Box w="100%" bg="green.300" p={4}>
        {pizza.toppings.map((topping, index) => {
          const Component = Topping[topping.__typename];
          return <Component key={index} topping={topping} />;
        })}
      </Box>
      <Box w="100%" bg="yellow.400" p={4}></Box>
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
        ...ToppingsOil_topping
      }
    }
  `,
});
