/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToppingsVegetable_topping$ref: FragmentReference;
declare export opaque type ToppingsVegetable_topping$fragmentType: ToppingsVegetable_topping$ref;
export type ToppingsVegetable_topping = {|
  +id: string,
  +title: ?string,
  +$refType: ToppingsVegetable_topping$ref,
|};
export type ToppingsVegetable_topping$data = ToppingsVegetable_topping;
export type ToppingsVegetable_topping$key = {
  +$data?: ToppingsVegetable_topping$data,
  +$fragmentRefs: ToppingsVegetable_topping$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ToppingsVegetable_topping",
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
  "type": "Vegetable"
};
// prettier-ignore
(node/*: any*/).hash = '11fd0e929a0e2f3b175939e091b1064f';

module.exports = node;
