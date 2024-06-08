/*
  Next Greater Element

  The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
  You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
  For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
  Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

  Example:
  Input: [4,1,2], [1,3,4,2]
  Output: [-1,3,-1]
*/

function nextGreaterElement(arr1, arr2) {
  const map = arr1.reduce((acc, item, idx) => {
    acc[item] = idx;
    return acc;
  }, {});

  const output = Array(arr1.length).fill(-1);
  const stack = [];

  for (const current of arr2) {
    while (stack.length && current > stack.at(-1)) {
      const value = stack.pop();
      const idx = map[value];
      output[idx] = current;
    }

    if (map.hasOwnProperty(current)) {
      stack.push(current);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]);
