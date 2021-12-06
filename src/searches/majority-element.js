/*
  Majority Element

  Given an array nums of size n, return the majority element.
  The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

  Example:
  Input: [3,2,3]
  Output: 3
*/

function majorityElement(arr) {
  const counter = {};

  for (const item of arr) {
    if (counter.hasOwnProperty(item)) {
      counter[item]++;
    } else {
      counter[item] = 1;
    }
  }

  return Object.keys(counter).reduce(
    (acc, key) => {
      if (acc.counter < counter[key]) {
        return {
          key,
          counter: counter[key],
        };
      }

      return acc;
    },
    {
      key: null,
      counter: 0,
    }
  ).key;
}

const assert = require('assert');
assert.equal(majorityElement([3, 2, 3]), 3);
