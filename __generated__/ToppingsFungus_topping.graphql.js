/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToppingsFungus_topping$ref: FragmentReference;
declare export opaque type ToppingsFungus_topping$fragmentType: ToppingsFungus_topping$ref;
export type ToppingsFungus_topping = {|
  +id: string,
  +title: ?string,
  +$refType: ToppingsFungus_topping$ref,
|};
export type ToppingsFungus_topping$data = ToppingsFungus_topping;
export type ToppingsFungus_topping$key = {
  +$data?: ToppingsFungus_topping$data,
  +$fragmentRefs: ToppingsFungus_topping$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ToppingsFungus_topping",
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
  "type": "Fungus"
};
// prettier-ignore
(node/*: any*/).hash = '74931f61928708f21bb0230c12c04148';

module.exports = node;
