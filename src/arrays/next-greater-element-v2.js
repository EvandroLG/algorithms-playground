/*
  Next Greater Element V2

  Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.
  The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number.
  If it doesn't exist, return -1 for this number.

  Example:
  Input: [1,2,3,4,3]
  Output: [2,3,4,-1,4]
*/

function nextGreaterElementV2(arr) {
  const output = Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let next = i + 1;
    let found = false;

    while (next < arr.length) {
      if (current < arr[next]) {
        found = true;
        output[i] = arr[next];
        break;
      }

      next++;
    }

    if (found) {
      continue;
    }

    next = 0;

    while (next < i) {
      if (current < arr[next]) {
        output[i] = arr[next];
        break;
      }

      next++;
    }
  }

  return output;
}

const assert = require('assert');
assert.ok(nextGreaterElementV2([1, 2, 3, 4, 3]), [2, 3, 4, -1, 4]);
