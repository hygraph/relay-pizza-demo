/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { ToppingsFruit_topping$ref } from "./ToppingsFruit_topping.graphql";
import type { ToppingsFungus_topping$ref } from "./ToppingsFungus_topping.graphql";
import type { ToppingsMeat_topping$ref } from "./ToppingsMeat_topping.graphql";
import type { ToppingsOil_topping$ref } from "./ToppingsOil_topping.graphql";
import type { ToppingsVegetable_topping$ref } from "./ToppingsVegetable_topping.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Pizza_pizza$ref: FragmentReference;
declare export opaque type Pizza_pizza$fragmentType: Pizza_pizza$ref;
export type Pizza_pizza = {|
  +id: string,
  +title: ?string,
  +image: $ReadOnlyArray<{|
    +url: string
  |}>,
  +toppings: $ReadOnlyArray<{|
    +__typename: string,
    +$fragmentRefs: ToppingsMeat_topping$ref & ToppingsFruit_topping$ref & ToppingsVegetable_topping$ref & ToppingsFungus_topping$ref & ToppingsOil_topping$ref,
  |}>,
  +$refType: Pizza_pizza$ref,
|};
export type Pizza_pizza$data = Pizza_pizza;
export type Pizza_pizza$key = {
  +$data?: Pizza_pizza$data,
  +$fragmentRefs: Pizza_pizza$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Pizza_pizza",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Asset",
      "kind": "LinkedField",
      "name": "image",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "toppings",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ToppingsMeat_topping"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ToppingsFruit_topping"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ToppingsVegetable_topping"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ToppingsFungus_topping"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ToppingsOil_topping"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Pizza"
};
// prettier-ignore
(node/*: any*/).hash = '3328c41913d4b180a8257f43b1f07061';

module.exports = node;
