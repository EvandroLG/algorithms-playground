/*
  Count Elements

  Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

  Example:
  Input: [11,7,2,15]
  Output: 2
*/

function countElements(arr) {
  const counter = getCounter(arr);
  let output = 0;
  const keys = Object.keys(counter)
    .map(Number)
    .sort((a, b) => a - b);

  for (let i = 1; i < keys.length - 1; i++) {
    const key = keys[i];
    output += counter[key];
  }

  return output;
}

function getCounter(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.equal(countElements([11, 7, 2, 15]), 2);
