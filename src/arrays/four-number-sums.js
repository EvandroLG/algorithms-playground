/*
  Four Number Sums

  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order.
  If no four numbers sum up to the target sum, the function should return an empty array.

  Sample Input
  array = [7, 6, 4, -1, 1, 2]
  targetSum = 16

  Sample Output
  [[7, 6, 4, -1], [7, 6, 1, 2]] // the quadruplets could be ordered differently
*/

function updateOutput(pairs, a, b, output) {
  for (const pair of pairs) {
    const item = [a, b, ...pair];
    output.push(item);
  }
}

function fourNumberSums(arr, target) {
  const output = [];
  const allPairs = {};
  const size = arr.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = i + 1; j < size; j++) {
      const sum = arr[i] + arr[j];
      const diff = target - sum;

      if (diff in allPairs) {
        updateOutput(allPairs[diff], arr[i], arr[j], output);
      }
    }

    for (let k = 0; k < i; k++) {
      const sum = arr[i] + arr[k];

      if (sum in allPairs) {
        allPairs[sum].push([arr[i], arr[k]]);
      } else {
        allPairs[sum] = [[arr[i], arr[k]]];
      }
    }
  }

  return output;
}

const assert = require('assert');

function sortArr(arr) {
  return arr.map((item) => {
    return item.sort((a, b) => a - b);
  });
}

assert.deepEqual(
  sortArr(fourNumberSums([7, 6, 4, -1, 1, 2], 16)),
  sortArr([
    [7, 6, 4, -1],
    [7, 6, 1, 2],
  ])
);
