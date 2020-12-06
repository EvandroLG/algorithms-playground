/*
  CanSum
  Write a function that returns a boolean indicating wheather or not it is possible to generate the target value using numbers from the array.

  Example:
  Input: [5, 3, 4, 7], 7
  Output: true
*/

function canSum(arr, target, _memo = {}) {
  if (target in _memo) {
    return _memo[target];
  }

  if (target === 0) {
    return true;
  }

  if (target < 0) {
    return false;
  }

  for (const value of arr) {
    const remainder = target - value;
    _memo[target] = canSum(arr, remainder, _memo);

    if (_memo[target]) {
      return true;
    }
  }

  return false;
}

const assert = require('assert');
assert.ok(canSum([5, 3, 4, 7], 7));
assert.ok(!canSum([2, 4], 7));
assert.ok(!canSum([7, 14], 300));
