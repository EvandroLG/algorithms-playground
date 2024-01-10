/*
  Find Greatest Common Divisor

  Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
  The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

  Example:
  Input: [2,5,6,9,10]
  Output: 2 
*/

function findGreatestCommonDivisor(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i > 1; i--) {
    if (min % i === 0 && max % i === 0) {
      return i;
    }
  }

  return 1;
}

const assert = require('assert');
assert.equal(findGreatestCommonDivisor([2, 5, 6, 9, 10]), 2);
