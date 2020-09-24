/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Pizzas_pizzas$ref } from "./Pizzas_pizzas.graphql";
export type PizzaOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "publishedAt_ASC" | "publishedAt_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "%future added value";
export type PizzasQueryVariables = {|
  count?: ?number,
  cursor?: ?string,
  orderBy?: ?PizzaOrderByInput,
|};
export type PizzasQueryResponse = {|
  +$fragmentRefs: Pizzas_pizzas$ref
|};
export type PizzasQuery = {|
  variables: PizzasQueryVariables,
  response: PizzasQueryResponse,
|};
*/


/*
query PizzasQuery(
  $count: Int
  $cursor: String
  $orderBy: PizzaOrderByInput
) {
  ...Pizzas_pizzas_32czeo
}

fragment Pizza_pizza on Pizza {
  id
  title
  image {
    url
    id
  }
  toppings {
    __typename
    ...ToppingsMeat_topping
    ...ToppingsFruit_topping
    ...ToppingsVegetable_topping
    ...ToppingsFungus_topping
    ...ToppingsOil_topping
    ... on Node {
      id
    }
  }
}

fragment Pizzas_pizzas_32czeo on Query {
  pizzasConnection(first: $count, after: $cursor, orderBy: $orderBy) {
    edges {
      node {
        ...Pizza_pizza
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ToppingsFruit_topping on Fruit {
  id
  title
}

fragment ToppingsFungus_topping on Fungus {
  id
  title
}

fragment ToppingsMeat_topping on Meat {
  id
  title
}

fragment ToppingsOil_topping on Oil {
  id
  title
}

fragment ToppingsVegetable_topping on Vegetable {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "PizzaOrderByInput"
  }
],
v1 = {
  "kind": "Variable",
  "name": "orderBy",
  "variableName": "orderBy"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = [
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PizzasQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "Pizzas_pizzas"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PizzasQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "PizzaConnection",
        "kind": "LinkedField",
        "name": "pizzasConnection",
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
                  (v3/*: any*/),
                  (v4/*: any*/),
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
                      },
                      (v3/*: any*/)
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
                      (v5/*: any*/),
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v6/*: any*/),
                        "type": "Meat"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v6/*: any*/),
                        "type": "Fruit"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v6/*: any*/),
                        "type": "Vegetable"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v6/*: any*/),
                        "type": "Fungus"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v6/*: any*/),
                        "type": "Oil"
                      }
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
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
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": [
          "orderBy"
        ],
        "handle": "connection",
        "key": "Pizzas_pizzasConnection",
        "kind": "LinkedHandle",
        "name": "pizzasConnection"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "PizzasQuery",
    "operationKind": "query",
    "text": "query PizzasQuery(\n  $count: Int\n  $cursor: String\n  $orderBy: PizzaOrderByInput\n) {\n  ...Pizzas_pizzas_32czeo\n}\n\nfragment Pizza_pizza on Pizza {\n  id\n  title\n  image {\n    url\n    id\n  }\n  toppings {\n    __typename\n    ...ToppingsMeat_topping\n    ...ToppingsFruit_topping\n    ...ToppingsVegetable_topping\n    ...ToppingsFungus_topping\n    ...ToppingsOil_topping\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment Pizzas_pizzas_32czeo on Query {\n  pizzasConnection(first: $count, after: $cursor, orderBy: $orderBy) {\n    edges {\n      node {\n        ...Pizza_pizza\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ToppingsFruit_topping on Fruit {\n  id\n  title\n}\n\nfragment ToppingsFungus_topping on Fungus {\n  id\n  title\n}\n\nfragment ToppingsMeat_topping on Meat {\n  id\n  title\n}\n\nfragment ToppingsOil_topping on Oil {\n  id\n  title\n}\n\nfragment ToppingsVegetable_topping on Vegetable {\n  id\n  title\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bc94a970daed9f3e4c145b3c54611ffa';

module.exports = node;
