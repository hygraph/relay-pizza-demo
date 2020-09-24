/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToppingsCheese_topping$ref: FragmentReference;
declare export opaque type ToppingsCheese_topping$fragmentType: ToppingsCheese_topping$ref;
export type ToppingsCheese_topping = {|
  +id: string,
  +title: ?string,
  +nonDairy: ?boolean,
  +$refType: ToppingsCheese_topping$ref,
|};
export type ToppingsCheese_topping$data = ToppingsCheese_topping;
export type ToppingsCheese_topping$key = {
  +$data?: ToppingsCheese_topping$data,
  +$fragmentRefs: ToppingsCheese_topping$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ToppingsCheese_topping",
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
      "kind": "ScalarField",
      "name": "nonDairy",
      "storageKey": null
    }
  ],
  "type": "Cheese"
};
// prettier-ignore
(node/*: any*/).hash = '70a488d19ce99426e70093c671bcd236';

module.exports = node;
