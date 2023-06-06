/*
  Chunk

  Given an array arr and a chunk size size, return a chunked array.
  A chunked array contains the original elements in arr, but consists of subarrays each of length size.
  The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

  Example:
  Input: [1,9,6,3,2], size = 3
  Output: [[1,9,6],[3,2]]
*/

function chunk(arr, size) {
  if (!arr.length) {
    return [];
  }

  if (arr.length <= size || !size) {
    return [arr.slice()];
  }

  const output = [];
  let internal = [];
  let p1 = 0;
  let p2 = 0;

  while (arr.length > p1) {
    internal.push(arr[p1]);
    p1++;
    p2++;

    if (p2 === size) {
      p2 = 0;
      output.push(internal);
      internal = [];
    }
  }

  if (internal.length) {
    output.push(internal);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(chunk([1, 9, 6, 3, 2], 3), [
  [1, 9, 6],
  [3, 2],
]);
