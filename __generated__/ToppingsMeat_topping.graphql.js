/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToppingsMeat_topping$ref: FragmentReference;
declare export opaque type ToppingsMeat_topping$fragmentType: ToppingsMeat_topping$ref;
export type ToppingsMeat_topping = {|
  +id: string,
  +title: ?string,
  +$refType: ToppingsMeat_topping$ref,
|};
export type ToppingsMeat_topping$data = ToppingsMeat_topping;
export type ToppingsMeat_topping$key = {
  +$data?: ToppingsMeat_topping$data,
  +$fragmentRefs: ToppingsMeat_topping$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ToppingsMeat_topping",
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
  "type": "Meat"
};
// prettier-ignore
(node/*: any*/).hash = '8e05dfd94f981d18a2a1f5308e95a437';

module.exports = node;
