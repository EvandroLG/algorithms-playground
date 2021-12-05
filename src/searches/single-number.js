/*
  Single Number

  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  Example:
  Input: [2,2,1]
  Output: 1
*/

function singleNumber(arr) {
  const counter = {};

  for (const item of arr) {
    if (counter.hasOwnProperty(item)) {
      counter[item]++;
    } else {
      counter[item] = 1;
    }
  }

  return Object.keys(counter).find((key) => counter[key] === 1);
}

const assert = require('assert');
assert.equal(singleNumber([2, 2, 1]), 1);
