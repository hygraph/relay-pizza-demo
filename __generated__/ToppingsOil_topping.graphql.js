/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToppingsOil_topping$ref: FragmentReference;
declare export opaque type ToppingsOil_topping$fragmentType: ToppingsOil_topping$ref;
export type ToppingsOil_topping = {|
  +id: string,
  +title: ?string,
  +$refType: ToppingsOil_topping$ref,
|};
export type ToppingsOil_topping$data = ToppingsOil_topping;
export type ToppingsOil_topping$key = {
  +$data?: ToppingsOil_topping$data,
  +$fragmentRefs: ToppingsOil_topping$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ToppingsOil_topping",
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
  "type": "Oil"
};
// prettier-ignore
(node/*: any*/).hash = 'ddf1d63632a64d178c44df05526fb0e2';

module.exports = node;
