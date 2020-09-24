/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToppingsSauce_topping$ref: FragmentReference;
declare export opaque type ToppingsSauce_topping$fragmentType: ToppingsSauce_topping$ref;
export type ToppingsSauce_topping = {|
  +id: string,
  +title: ?string,
  +$refType: ToppingsSauce_topping$ref,
|};
export type ToppingsSauce_topping$data = ToppingsSauce_topping;
export type ToppingsSauce_topping$key = {
  +$data?: ToppingsSauce_topping$data,
  +$fragmentRefs: ToppingsSauce_topping$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ToppingsSauce_topping",
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
  "type": "Sauce"
};
// prettier-ignore
(node/*: any*/).hash = '13a392395ea369b954cb2f44101ea145';

module.exports = node;
