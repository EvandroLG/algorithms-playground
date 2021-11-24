/*
  Intersection Of Two Arrays

  Given two integer arrays nums1 and nums2, return an array of their intersection.
  Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

  Example:
  Input: [1,2,2,1], [2,2]
  Output: [2, 2]
*/

function counter(arr) {
  return arr.reduce((acc, item) => {
    if (acc.hasOwnProperty(item)) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }

    return acc;
  }, {});
}

function intersectionOfTwoArrays(arr1, arr2) {
  const output = [];
  const counter2 = counter(arr2);

  for (const item of arr1) {
    if (counter2.hasOwnProperty(item) && counter2[item] > 0) {
      output.push(item);
      counter2[item]--;
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(intersectionOfTwoArrays([1, 2, 2, 1], [2, 2]), [2, 2]);
