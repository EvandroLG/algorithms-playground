/*
  Custom Sort String

  You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.
  Permute the characters of s so that they match the order that order was sorted.
  More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.
  Return any permutation of s that satisfies this property.

  Example:
  Input: "cba", "abcd"
  Output: "cbad"
*/

function customSortString(order, s) {
  const counter = getCounter(s);
  const result = [];

  for (const c of order) {
    result.push(c.repeat(counter[c]));
    delete counter[c];
  }

  for (const k of Object.keys(counter)) {
    result.push(k.repeat(counter[k]));
  }

  return result.join('');
}

function getCounter(s) {
  return s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.strictEqual(customSortString('cba', 'abcd'), 'cbad');
