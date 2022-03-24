/*
  Is Monotonic

  An array is monotonic if it is either monotone increasing or monotone decreasing.
  An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

  Example:
  Input: [1,2,2,3]
  Output: true
*/

function isMonotonic(arr) {
  let store = 0;

  for (let i = 1; i < arr.length; i++) {
    const result = compare(arr[i - 1], arr[i]);

    if (result !== 0) {
      if (result !== store && store !== 0) {
        return false;
      }

      store = result;
    }
  }

  return true;
}

function compare(a, b) {
  if (a > b) {
    return 1;
  }

  if (b < a) {
    return -1;
  }

  return 0;
}

const assert = require('assert');
assert.ok(isMonotonic([1, 2, 2, 3]));
