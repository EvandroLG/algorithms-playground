/*
  Longest Common Subsequence

  Given an array of integer arrays arrays where each arrays[i] is sorted in strictly increasing order, return an integer array representing the longest common subsequence between all the arrays.
  A subsequence is a sequence that can be derived from another sequence by deleting some elements (possibly none) without changing the order of the remaining elements.

  Example:
  Input: [[2,3,6,8], [1,2,3,5,6,7,10], [2,3,4,6,9]]
  Output: [2,3,6]
*/

function longestCommonSubsequence(arr) {
  const copy = arr.slice().sort((arr1, arr2) => arr2.length - arr1.length);
  const initial = copy.pop();

  return (function helper(output) {
    if (!copy.length) {
      return output;
    }

    const counter = getCounter(output);
    const next = copy.pop();
    const newOutput = [];

    for (const item of next) {
      if (counter.hasOwnProperty(item) && counter[item]) {
        counter[item]--;
        newOutput.push(item);
      }
    }

    return helper(newOutput);
  })(initial);
}

function getCounter(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.deepEqual(
  longestCommonSubsequence([
    [2, 3, 6, 8],
    [1, 2, 3, 5, 6, 7, 10],
    [2, 3, 4, 6, 9],
  ]),
  [2, 3, 6]
);
