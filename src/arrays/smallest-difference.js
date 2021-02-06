/*
  Smallest Difference

  Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.
  Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.
  You can assume that there will only be one pair of numbers with the smallest difference.

  Sample Input
  arrayOne = [-1, 5, 10, 20, 28, 3]
  arrayTwo = [26, 134, 135, 15, 17]

  Sample Output
  [28, 26]
*/

function smallestDifference(arrayOne, arrayTwo) {
  const sortedOne = arrayOne.slice().sort((a, b) => a - b);
  const sortedTwo = arrayTwo.slice().sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let smallest = Infinity;
  let pair = [];

  while (p1 < sortedOne.length && p2 < sortedTwo.length) {
    const first = sortedOne[p1];
    const second = sortedTwo[p2];
    const difference = Math.abs(first - second);

    if (difference === 0) {
      return [first, second];
    }

    if (difference < smallest) {
      smallest = difference;
      pair = [first, second];
    }

    if (first < second) {
      p1 = p1 + 1;
    } else {
      p2 = p2 + 1;
    }
  }

  return pair;
}

const assert = require('assert');

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];
assert.deepEqual(smallestDifference(arrayOne, arrayTwo), [28, 26]);
