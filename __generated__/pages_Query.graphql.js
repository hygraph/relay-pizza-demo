/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Pizzas_pizzas$ref } from "./Pizzas_pizzas.graphql";
export type pages_QueryVariables = {||};
export type pages_QueryResponse = {|
  +$fragmentRefs: Pizzas_pizzas$ref
|};
export type pages_Query = {|
  variables: pages_QueryVariables,
  response: pages_QueryResponse,
|};
*/


/*
query pages_Query {
  ...Pizzas_pizzas
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

fragment Pizzas_pizzas on Query {
  pizzasConnection(first: 1, orderBy: title_ASC) {
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
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "title_ASC"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = [
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Pizzas_pizzas"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
                  (v1/*: any*/),
                  (v2/*: any*/),
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
                      (v1/*: any*/)
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
                      (v3/*: any*/),
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v4/*: any*/),
                        "type": "Meat"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v4/*: any*/),
                        "type": "Fruit"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v4/*: any*/),
                        "type": "Vegetable"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v4/*: any*/),
                        "type": "Fungus"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v4/*: any*/),
                        "type": "Oil"
                      }
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
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
        "storageKey": "pizzasConnection(first:1,orderBy:\"title_ASC\")"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
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
    "name": "pages_Query",
    "operationKind": "query",
    "text": "query pages_Query {\n  ...Pizzas_pizzas\n}\n\nfragment Pizza_pizza on Pizza {\n  id\n  title\n  image {\n    url\n    id\n  }\n  toppings {\n    __typename\n    ...ToppingsMeat_topping\n    ...ToppingsFruit_topping\n    ...ToppingsVegetable_topping\n    ...ToppingsFungus_topping\n    ...ToppingsOil_topping\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment Pizzas_pizzas on Query {\n  pizzasConnection(first: 1, orderBy: title_ASC) {\n    edges {\n      node {\n        ...Pizza_pizza\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ToppingsFruit_topping on Fruit {\n  id\n  title\n}\n\nfragment ToppingsFungus_topping on Fungus {\n  id\n  title\n}\n\nfragment ToppingsMeat_topping on Meat {\n  id\n  title\n}\n\nfragment ToppingsOil_topping on Oil {\n  id\n  title\n}\n\nfragment ToppingsVegetable_topping on Vegetable {\n  id\n  title\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fbaa1242bbcdc67c3d3f2fc13fd65e82';

module.exports = node;
