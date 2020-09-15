import { createFragmentContainer, graphql } from "react-relay";

const Topping = ({ topping }) => {
  return <div>{topping.title}</div>;
};

export default createFragmentContainer(Topping, {
  topping: graphql`
    fragment ToppingsCheese_topping on Cheese {
      id
      title
      nonDairy
    }
  `,
});
