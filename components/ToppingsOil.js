import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { createFragmentContainer, graphql } from "react-relay";

const Topping = ({ topping }) => {
  return <div> {topping.title}</div>;
};

export default createFragmentContainer(Topping, {
  topping: graphql`
    fragment ToppingsOil_topping on Oil {
      id
      title
    }
  `,
});
