/*
  Minimum Operations

  You are given a non-negative integer array nums. In one operation, you must:
  - Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
  - Subtract x from every positive element in nums.
  Return the minimum number of operations to make every element in nums equal to 0.

  Example:
  Input: [1,5,0,3,5]
  Output: 3
*/

function minimumOperations(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  return minimumOperationsHelper(sorted, 0);
}

function minimumOperationsHelper(arr, operations) {
  const found = arr.find((item) => item > 0);

  if (found === undefined) {
    return operations;
  }

  const result = arr.map((item) => {
    if (item === 0) {
      return item;
    }

    return item - found;
  });

  return minimumOperationsHelper(result, operations + 1);
}

const assert = require('assert');
assert.equal(minimumOperations([1, 5, 0, 3, 5]), 3);
