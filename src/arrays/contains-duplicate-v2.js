/*
  Contains Duplicate V2

  Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

  Example:
  Input: [1,2,3,1], 3
  Output: true
*/

function containsNearbyDuplicate(nums, k) {
  const map = nums.reduce((acc, item, idx) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = [];
    }

    acc[item].push(idx);

    return acc;
  }, {});

  for ([key, indexes] of Object.entries(map)) {
    if (indexes.length > 1 && isValid(indexes, indexes.pop(), k)) {
      return true;
    }
  }

  return false;
}

function isValid(indexes, currIdx, k) {
  if (!indexes.length) {
    return false;
  }

  for (const idx of indexes) {
    if (Math.abs(currIdx - idx) <= k) {
      return true;
    }
  }

  return isValid(indexes, indexes.pop(), k);
}

const assert = require('assert');
assert.ok(containsNearbyDuplicate([1, 2, 3, 1], 3));
