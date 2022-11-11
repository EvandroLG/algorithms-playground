/*
  Can Be Equal

  You are given two integer arrays of equal length target and arr.
  In one step, you can select any non-empty subarray of arr and reverse it.
  You are allowed to make any number of steps.

  Example:
  Input: [1,2,3,4], [2,4,1,3]
  Output: true
*/

function canBeEqual(target, arr) {
  if (target.length !== arr.length) {
    return false;
  }

  const counterTarget = buildCounter(target);
  const counterArr = buildCounter(arr);

  return equal(counterTarget, counterArr);
}

function equal(obj1, obj2) {
  const keys = Object.keys(obj1);

  if (keys.length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function buildCounter(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.ok(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
