/*
  Find Prefix Score

  We define the conversion array conver of an array arr as follows:
  - conver[i] = arr[i] + max(arr[0..i]) where max(arr[0..i]) is the maximum value of arr[j] over 0 <= j <= i.
  We also define the score of an array arr as the sum of the values of the conversion array of arr.
  Given a 0-indexed integer array nums of length n, return an array ans of length n where ans[i] is the score of the prefix nums[0..i].

  Example:
  Input: [2,3,7,5,10]
  Output: [4,10,24,36,56]
*/

function findPrefixScore(arr) {
  const conversion = getConversion(arr);
  return getScores(conversion);
}

function getConversion(arr) {
  const output = [];
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    output.push(arr[i] + max);
  }

  return output;
}

function getScores(arr) {
  const output = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    output.push(sum);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(findPrefixScore([2, 3, 7, 5, 10]), [4, 10, 24, 36, 56]);
