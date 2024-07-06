/*
  Kth Distinct

  A distinct string is a string that is present only once in an array.
  Given an array of strings arr, and an integer k, return the kth distinct string present in arr.
  If there are fewer than k distinct strings, return an empty string "".
  Note that the strings are considered in the order in which they appear in the array.

  Example:
  Input: ["d","b","c","b","c","a"], 2
  Output: "a"
*/

function kthDistinct(arr, k) {
  const map = new Map();

  for (const item of arr) {
    if (!map.has(item)) {
      map.set(item, 0);
    }

    map.set(item, map.get(item) + 1);
  }

  let i = 1;

  for (const [key, value] of map) {
    if (value === 1) {
      if (i === k) {
        return key;
      }

      i++;
    }
  }

  return '';
}

const assert = require('assert');
assert.strictEqual(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2), 'a');
