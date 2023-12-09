/*
  Find Unique Binary Strings

  Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

  Example:
  Input: ["01","10"]
  Output: "11"
*/

function findUniqueBinaryStrings(arr) {
  const set = buildBinaryNumbers(arr[0].length);

  for (const item of arr) {
    set.delete(item);
  }

  for (const item of set) {
    return item;
  }
}

function buildBinaryNumbers(size) {
  const set = new Set();

  (function backtrack(s = '') {
    if (s.length === size) {
      set.add(s);
    } else {
      ['0', '1'].forEach((item) => backtrack(s + item));
    }
  })();

  return set;
}

const assert = require('assert');
assert.equal(findUniqueBinaryStrings(['00', '01', '10']), '11');
