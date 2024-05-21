/*
  H Index

  Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
  The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

  Example:
  Input: [3,0,6,1,5]
  Output: 3
*/

function hIndex(arr) {
  const sorted = arr.slice().sort((a, b) => b - a);
  let output = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > i) {
      output++;
    } else {
      break;
    }
  }

  return output;
}

const assert = require('assert');
assert.strictEqual(hIndex([3, 0, 6, 1, 5]), 3);
