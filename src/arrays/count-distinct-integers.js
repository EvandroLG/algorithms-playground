/*
  Count Distinct Integers

  You are given an array nums consisting of positive integers.
  You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.
  Return the number of distinct integers in the final array.

  Example:
  Input: [1,13,10,12,31]
  Output: 6
*/

function countDistinctIntegers(arr) {
  const set = new Set(arr);

  for (const n of arr) {
    const reversed = reverseNumber(n);
    set.add(reversed);
  }

  return set.size;
}

function reverseNumber(n) {
  return +('' + n).split('').reverse().join('');
}

const assert = require('assert');
assert.equal(countDistinctIntegers([1, 13, 10, 12, 31]), 6);
