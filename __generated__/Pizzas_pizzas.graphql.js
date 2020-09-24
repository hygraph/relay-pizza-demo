/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { Pizza_pizza$ref } from "./Pizza_pizza.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Pizzas_pizzas$ref: FragmentReference;
declare export opaque type Pizzas_pizzas$fragmentType: Pizzas_pizzas$ref;
export type Pizzas_pizzas = {|
  +pizzasConnection: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +id: string,
        +$fragmentRefs: Pizza_pizza$ref,
      |}
    |}>
  |},
  +$refType: Pizzas_pizzas$ref,
|};
export type Pizzas_pizzas$data = Pizzas_pizzas;
export type Pizzas_pizzas$key = {
  +$data?: Pizzas_pizzas$data,
  +$fragmentRefs: Pizzas_pizzas$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String"
    },
    {
      "defaultValue": "title_ASC",
      "kind": "LocalArgument",
      "name": "orderBy",
      "type": "PizzaOrderByInput"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "pizzasConnection"
        ]
      }
    ]
  },
  "name": "Pizzas_pizzas",
  "selections": [
    {
      "alias": "pizzasConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "orderBy",
          "variableName": "orderBy"
        }
      ],
      "concreteType": "PizzaConnection",
      "kind": "LinkedField",
      "name": "__Pizzas_pizzasConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PizzaEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Pizza",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Pizza_pizza"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
// prettier-ignore
(node/*: any*/).hash = 'ee96049fdde89483ef4725e61c1a7348';

module.exports = node;
