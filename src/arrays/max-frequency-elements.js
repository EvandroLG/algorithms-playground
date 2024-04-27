/*
  Max Frequency Elements

  You are given an array nums consisting of positive integers.
  Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
  The frequency of an element is the number of occurrences of that element in the array.

  Example:
  Input: [1,2,2,3,1,4]
  Output: 4
*/

function maxFrequencyElements(arr) {
  if (!arr.length) {
    return 0;
  }

  const counter = getCounter(arr);
  let largestFrequency = -1;
  let result = -1;

  for (const frequency of Object.values(counter)) {
    if (largestFrequency === frequency) {
      result += frequency;
    }

    if (frequency > largestFrequency) {
      largestFrequency = frequency;
      result = frequency;
    }
  }

  return result;
}

function getCounter(arr) {
  return arr.reduce((acc, n) => {
    if (!acc.hasOwnProperty(n)) {
      acc[n] = 0;
    }

    acc[n]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.deepStrictEqual(maxFrequencyElements([1, 2, 2, 3, 1, 4]), 4);
