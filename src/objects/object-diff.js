/*
  Object Diff

  Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences.
  The function should compare the properties of the two objects and identify any changes.
  The returned object should only contains keys where the value is different from obj1 to obj2.
  For each changed key, the value should be represented as an array [obj1 value, obj2 value].
  Keys that exist in one object but not in the other should not be included in the returned object. When comparing two arrays, the indices of the arrays are considered to be their keys.
  The end result should be a deeply nested object where each leaf value is a difference array.

  Example:
  Input: a = {}, b = {"a": 1, "b": 2}
  Output: {}
*/

function objectDiff(a, b) {
  if (a === b) {
    return {};
  }

  if (a === null || b === null) {
    return [a, b];
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return [a, b];
  }

  if (Array.isArray(a) !== Array.isArray(b)) {
    return [a, b];
  }

  const keys = Object.keys(a);
  const output = {};

  for (const key of keys) {
    if (b.hasOwnProperty(key)) {
      const diff = objectDiff(a[key], b[key]);
      const hasDiff = !!Object.keys(diff).length;

      if (hasDiff) {
        output[key] = diff;
      }
    }
  }

  return output;
}

const assert = require('assert');

const a = {
  a: 1,
  v: 3,
  x: [],
  z: {
    a: null,
  },
};

const b = {
  a: 2,
  v: 4,
  x: [],
  z: {
    a: 2,
  },
};

assert.deepEqual(objectDiff(a, b), {
  a: [1, 2],
  v: [3, 4],
  z: {
    a: [null, 2],
  },
});
