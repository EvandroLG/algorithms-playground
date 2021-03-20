/*
  Shifted Binary Search

  Write a function that takes in a sorted array of distinct integers as well as a target integer. The caveat is that the integers in the array have been shifted by some amount; in other words, they've been moved to the left or to the right by one or more positions. For example, [1, 2, 3, 4] might have turned into [3, 4, 1, 2].
  The function should use a variation of the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1.
  If you're unfamiliar with Binary Search, we recommend watching the Conceptual Overview section of the Binary Search question's video explanation before starting to code.

  Sample Input
  array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37]
  target = 33

  Sample Output
  8
*/

function shiftedBinarySearchHelper(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);
  const middleItem = arr[middle];
  const leftItem = arr[left];
  const rightItem = arr[right];

  if (middleItem === target) {
    return middle;
  }

  if (leftItem <= middleItem) {
    if (target < middleItem && target >= leftItem) {
      return shiftedBinarySearchHelper(arr, target, left, middle - 1);
    }

    return shiftedBinarySearchHelper(arr, target, middle + 1, right);
  }

  if (target > middleItem && target <= rightItem) {
    return shiftedBinarySearchHelper(arr, target, middle + 1, right);
  }

  return shiftedBinarySearchHelper(arr, target, left, middle - 1);
}

function shiftedBinarySearch(arr, target) {
  return shiftedBinarySearchHelper(arr, target, 0, arr.length - 1);
}

const assert = require('assert');
assert.equal(
  shiftedBinarySearch([45, 61, 71, 72, 73, 0, 1, 21, 33, 37], 33),
  8
);
