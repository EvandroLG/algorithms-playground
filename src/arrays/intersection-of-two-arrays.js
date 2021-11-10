/*
  Intersection Of Two Arrays

  Given two integer arrays nums1 and nums2, return an array of their intersection.
  Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

  Example:
  Input: [1,2,2,1], [2,2]
  Output: [2, 2]
*/

function intersectionOfTwoArrays(arr1, arr2) {
  const [smaller, larger] =
    arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];

  smaller.sort((a, b) => a - b);
  larger.sort((a, b) => a - b);

  const output = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < smaller.length && p2 < larger.length) {
    if (smaller[p1] === larger[p2]) {
      output.push(smaller[p1]);
      p1++;
      p2++;

      continue;
    }

    if (smaller[p1] > larger[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(intersectionOfTwoArrays([1, 2, 2, 1], [2, 2]), [2, 2]);
