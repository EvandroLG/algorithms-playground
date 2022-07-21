/*
  Decompress Encoded List

  We are given a list nums of integers representing a list compressed with run-length encoding.
  Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
  For each such pair, there are freq elements with value val concatenated in a sublist.
  Concatenate all the sublists from left to right to generate the decompressed list.

  Example:
  Input: [1,2,3,4]
  Output: [2,4,4,4]
*/

function decompressEncodedList(arr) {
  const output = [];
  let p1 = 0;
  let p2 = 1;

  while (p2 < arr.length) {
    const frequency = arr[p1];
    const value = arr[p2];
    const values = generateValues(frequency, value);
    output.push(...values);

    p1 += 2;
    p2 += 2;
  }

  return output;
}

function generateValues(frequency, value) {
  const output = [];

  while (frequency) {
    output.push(value);
    frequency--;
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(decompressEncodedList([1, 2, 3, 4]), [2, 4, 4, 4]);
