/*
  Find Shortest Subarray

  Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
  Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

  Example:
  Input: [1,2,2,3,1,4,2]
  Output: 6
*/

function findShortestSubarray(arr) {
  const map = buildMap(arr);
  const keys = Object.keys(map);
  let key = null;
  let maxLength = -1;
  let shortestLength = Infinity;

  for (const k of keys) {
    const newShortestLength =
      map[k].length > 1 ? map[k].at(-1) - map[k][0] + 1 : 1;

    if (map[k].length > maxLength) {
      maxLength = map[k].length;
      key = k;
      shortestLength = newShortestLength;
    } else if (
      map[k].length === maxLength &&
      newShortestLength < shortestLength
    ) {
      maxLength = map[k].length;
      key = k;
      shortestLength = newShortestLength;
    }
  }

  return shortestLength;
}

function buildMap(nums) {
  return nums.reduce((acc, item, idx) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = [];
    }

    acc[item].push(idx);

    return acc;
  }, {});
}

const assert = require('assert');
assert.strictEqual(findShortestSubarray([1, 2, 2, 3, 1, 4, 2]), 6);
