/*
  Search For Range

  Write a function that takes in a sorted array of integers as well as a target integer. The function should use a variation of the Binary Search algorithm to find a range of indices in between which the target number is contained in the array and should return this range in the form of an array.
  The first number in the output array should represent the first index at which the target number is located, while the second number should represent the last index at which the target number is located. The function should return [-1, -1] if the integer isn't contained in the array.

  Sample Input
  array = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73]
  target = 45

  Sample Output
  [4, 9]
*/

function searchForRangeHelper(
  array,
  target,
  left,
  right,
  output,
  goLeft = false
) {
  if (left > right) {
    return;
  }

  const middle = Math.round((left + right) / 2);
  const item = array[middle];

  if (item === target) {
    if (goLeft) {
      if (middle === 0 || array[middle - 1] !== target) {
        output[0] = middle;
      } else {
        searchForRangeHelper(array, target, left, middle - 1, output, goLeft);
      }
    } else {
      if (middle === array.length - 1 || array[middle + 1] !== target) {
        output[1] = middle;
      } else {
        searchForRangeHelper(array, target, middle + 1, right, output, goLeft);
      }
    }
  }

  if (item < target) {
    searchForRangeHelper(array, target, middle + 1, right, output, goLeft);
  } else {
    searchForRangeHelper(array, target, left, middle - 1, output, goLeft);
  }
}

function searchForRange(array, target) {
  const output = [-1, -1];
  searchForRangeHelper(array, target, 0, array.length - 1, output, true);
  searchForRangeHelper(array, target, 0, array.length - 1, output);

  return output;
}

const assert = require('assert');
assert.deepEqual(
  searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45),
  [4, 9]
);
