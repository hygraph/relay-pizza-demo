/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToppingsFruit_topping$ref: FragmentReference;
declare export opaque type ToppingsFruit_topping$fragmentType: ToppingsFruit_topping$ref;
export type ToppingsFruit_topping = {|
  +id: string,
  +title: ?string,
  +$refType: ToppingsFruit_topping$ref,
|};
export type ToppingsFruit_topping$data = ToppingsFruit_topping;
export type ToppingsFruit_topping$key = {
  +$data?: ToppingsFruit_topping$data,
  +$fragmentRefs: ToppingsFruit_topping$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ToppingsFruit_topping",
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
    }
  ],
  "type": "Fruit"
};
// prettier-ignore
(node/*: any*/).hash = '9934be02d26bf2d48d5ac2d35c2db457';

module.exports = node;
