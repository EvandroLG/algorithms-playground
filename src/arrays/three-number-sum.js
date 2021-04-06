/*
  Three Number Sum

  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
  If no three numbers sum up to the target sum, the function should return an empty array.

  Sample Input
  array = [12, 3, 1, 2, -6, 5, -8, 6]
  targetSum = 0

  Sample Output
  [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
*/

function sort(arr) {
  return arr.slice().sort((a, b) => a - b);
}

function threeNumberSum(arr, target) {
  const sortedArray = sort(arr);
  const size = sortedArray.length;
  const output = [];

  for (let i = 0; i < size; i++) {
    const item = sortedArray[i];
    let left = i + 1;
    let right = size - 1;

    while (left < right) {
      const sum = item + sortedArray[left] + sortedArray[right];

      if (sum === target) {
        output.push([item, sortedArray[left], sortedArray[right]]);
        left = left + 1;
        right = right - 1;
      } else if (sum < target) {
        left = left + 1;
      } else {
        right = right - 1;
      }
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0), [
  [-8, 2, 6],
  [-8, 3, 5],
  [-6, 1, 5],
]);
