/*
  Deep Object Filter

  Given an object or an array obj and a function fn, return a filtered object or array filteredObject.

  Example:
  Input: {"a": 1, "b": "2", "c": 3, "d": "4", "e": 5, "f": 6, "g": {"a": 1}}, (x) => typeof x === "string"
  Output: {"b":"2","d":"4"}
*/

import { deepStrictEqual } from 'assert';

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;
type Func = (value: JSONValue) => boolean;

function deepObjectFilter(o: Obj, fn: Func): Obj | undefined {
  if (Array.isArray(o)) {
    const output = [];

    for (const item of o) {
      if (Array.isArray(item) || isObject(item)) {
        const result = deepObjectFilter(item as Obj, fn);

        if (result !== undefined) {
          output.push(result);
        }
      } else {
        if (fn(item)) {
          output.push(item);
        }
      }
    }

    return output.length ? output : undefined;
  } else {
    const output: Record<string, JSONValue> = {};
    const entries = Object.entries(o);

    for (const [key, value] of entries) {
      if (Array.isArray(value) || isObject(value)) {
        const result = deepObjectFilter(value as Obj, fn);

        if (result !== undefined) {
          output[key] = result;
        }
      } else {
        if (fn(value)) {
          output[key] = value;
        }
      }
    }

    return Object.keys(output).length ? output : undefined;
  }
}

function isObject(o: unknown): o is Record<string, unknown> {
  return typeof o === 'object' && o !== null && !Array.isArray(o);
}

const o = { a: 1, b: '2', c: 3, d: '4', e: 5, f: 6, g: { a: 1 } };

deepStrictEqual(
  deepObjectFilter(o, (x) => typeof x === 'string'),
  { b: '2', d: '4' }
);
