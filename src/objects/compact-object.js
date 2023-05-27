/*
  Compact Object

  Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed.
  This operation applies to the object and any nested objects.
  Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
  You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

  Example:
  Input: {"a": null, "b": [false, 1]}
  Output: {"b": [1]}
*/

function compactObject(o) {
  const isArray = Array.isArray(o);
  const output = isArray ? [] : {};
  const keys = Object.keys(o);

  for (const k of keys) {
    if (o[k]) {
      if (isObject(o[k])) {
        const result = compactObject(o[k]);
        if (isArray) {
          output.push(result);
        } else {
          output[k] = result;
        }
      } else {
        if (isArray) {
          output.push(o[k]);
        } else {
          output[k] = o[k];
        }
      }
    }
  }

  return output;
}

function isObject(o) {
  return o !== null && typeof o === 'object';
}

const assert = require('assert');
assert.deepEqual(compactObject({ a: null, b: [false, 1] }), { b: [1] });
