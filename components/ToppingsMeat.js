import { createFragmentContainer, graphql } from "react-relay";

const Topping = ({ topping }) => {
  return <div>{topping.title}</div>;
};

export default createFragmentContainer(Topping, {
  topping: graphql`
    fragment ToppingsMeat_topping on Meat {
      id
      title
    }
  `,
});
