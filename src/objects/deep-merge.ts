/*
  Deep Merge

  Given two values obj1 and obj2, return a deepmerged value.
  Values should be deepmerged according to these rules:
  - If the two values are objects, the resulting object should have all the keys that exist on either object. If a key belongs to both objects, deepmerge the two associated values. Otherwise, add the key-value pair to the resulting object.
  - If the two values are arrays, the resulting array should be the same length as the longer array. Apply the same logic as you would with objects, but treat the indices as keys.
  - Otherwise the resulting value is obj2.
  You can assume obj1 and obj2 are the output of JSON.parse().

  Example:
  Input: {"a": 1, "b": {"c": [1 , [2, 7], 5], "d": 2}}, {"a": 1, "b": {"c": [6, [6], [9]], "e": 3}}
  Output: {"a": 1, "b": {"c": [6, [6, 7], [9]], "d": 2, "e": 3}}
*/

import { deepStrictEqual } from 'assert';

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function deepMerge(o1: JSONValue, o2: JSONValue): JSONValue {
  if (Array.isArray(o1) && Array.isArray(o2)) {
    const output = [];
    const size = o1.length > o2.length ? o1.length : o2.length;

    for (let i = 0; i < size; i++) {
      const result = i < o2.length ? deepMerge(o1[i], o2[i]) : o1[i];
      output[i] = result;
    }

    return output;
  }

  if (isObject(o1) && isObject(o2)) {
    const output: Record<string, JSONValue> = {};

    for (const [key, value] of Object.entries(o1)) {
      let result = value;

      if (o2.hasOwnProperty(key)) {
        result = deepMerge(o1[key], o2[key]);
      }

      output[key] = result;
    }

    for (const [key, value] of Object.entries(o2)) {
      if (output.hasOwnProperty(key)) {
        continue;
      }

      output[key] = value;
    }

    return output;
  }

  return o2;
}

function isObject(o: unknown): o is Record<string, unknown> {
  return typeof o === 'object' && o !== null && !Array.isArray(o);
}

deepStrictEqual(
  deepMerge(
    { a: 1, b: { c: [1, [2, 7], 5], d: 2 } },
    { a: 1, b: { c: [6, [6], [9]], e: 3 } }
  ),
  { a: 1, b: { c: [6, [6, 7], [9]], d: 2, e: 3 } }
);
