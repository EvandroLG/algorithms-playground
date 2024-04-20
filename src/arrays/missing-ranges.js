/*
  Missing Ranges

  You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.
  A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
  Return the shortest sorted list of ranges that exactly covers all the missing numbers.
  That is, no element of nums is included in any of the ranges, and each missing number is covered by one of the ranges.

  Example:
  Input: [0,1,3,50,75], 0, 99
  Output: [[2,2],[4,49],[51,74],[76,99]]
*/

function missingRanges(arr, lower, upper) {
  if (!arr.length) {
    return [[lower, upper]];
  }

  const output = [];
  let p1 = 0;
  let p2 = 1;

  if (lower < arr[0]) {
    const first = lower;
    const last = arr[0] - 1;
    output.push([first, last]);
  }

  while (p2 < arr.length) {
    if (arr[p1] + 1 !== arr[p2]) {
      const first = arr[p1] + 1;
      const last = arr[p2] - 1;
      output.push([first, last]);
    }

    p1++;
    p2++;
  }

  if (upper > arr.at(-1)) {
    const first = arr.at(-1) + 1;
    const last = upper;
    output.push([first, last]);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(missingRanges([0, 1, 3, 50, 75], 0, 99), [
  [2, 2],
  [4, 49],
  [51, 74],
  [76, 99],
]);
