/*
  Deep Omit

  Implement a function deepOmit(obj, keys) that removes specified keys
  and their corresponding values from an object, including nested objects
  or arrays. It works recursively to traverse through the entire object
  structure, ensuring that all occurrences of the specified keys are removed at
  all levels. The function takes in an object (obj) and an array of string keys (keys).

  Example:
  Input: { a: 1, b: 2, c: 3 }, ['b']
  Output: { a: 1, c: 3 }
*/

function deepOmit(o, keys) {
  return deepOmitHelper(o, new Set(keys));
}

function deepOmitHelper(o, setKeys) {
  if (isObject(o)) {
    const keys = Object.keys(o);
    const output = {};

    for (const key of keys) {
      if (setKeys.has(key)) {
        continue;
      }

      output[key] = deepOmitHelper(o[key], setKeys);
    }

    return output;
  }

  if (Array.isArray(o)) {
    const output = [];

    for (const item of o) {
      if (isObject(item) || Array.isArray(o)) {
        const result = deepOmitHelper(item, setKeys);
        output.push(result);
      } else {
        output.push(item);
      }
    }

    return output;
  }

  return o;
}

function isObject(o) {
  return typeof o === 'object' && !Array.isArray(o) && o !== null;
}

const assert = require('assert');
assert.deepStrictEqual(deepOmit({ a: 1, b: 2, c: 3 }, ['b']), { a: 1, c: 3 });
