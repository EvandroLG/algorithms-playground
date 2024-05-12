/*
  Max Subarray Length K

  You are given an integer array nums and an integer k.
  The frequency of an element x is the number of times it occurs in an array.
  An array is called good if the frequency of each element in this array is less than or equal to k.
  Return the length of the longest good subarray of nums.
  A subarray is a contiguous non-empty sequence of elements within an array.

  Example:
  Input: [1,2,3,1,2,3,1,2], 2
  Output: 6
*/

function maxSubarrayLengthK(arr, k) {
  if (!k) {
    return 0;
  }

  let p1 = 0;
  let p2 = 1;
  let tmp = 1;
  let longest = 1;
  const counter = {
    [arr[p1]]: 1,
  };

  while (p2 < arr.length) {
    const item = arr[p2];

    if (!counter.hasOwnProperty(item)) {
      counter[item] = 0;
    }

    counter[item]++;

    if (counter[item] > k) {
      while (counter[item] > k) {
        counter[arr[p1]]--;
        p1++;
        tmp--;
      }
    }

    tmp++;
    p2++;
    longest = Math.max(longest, tmp);
  }

  return longest;
}

const assert = require('assert');
assert.strictEqual(maxSubarrayLengthK([1, 2, 3, 1, 2, 3, 1, 2], 2), 6);
