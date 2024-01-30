/*
  Find Peaks

  You are given a 0-indexed array mountain. Your task is to find all the peaks in the mountain array.
  Return an array that consists of indices of peaks in the given array in any order.

  Example:
  Input: [1,4,3,8,5]
  output: [1,3]
*/

function findPeaks(mountain) {
  const output = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    const value = mountain[i];

    if (value > mountain[i - 1] && value > mountain[i + 1]) {
      output.push(i);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(findPeaks([1, 4, 3, 8, 5]), [1, 3]);
