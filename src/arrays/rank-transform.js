/*
  Rank Transform

  Given an array of integers arr, replace each element with its rank.
  The rank represents how large the element is. The rank has the following rules:
  - Rank is an integer starting from 1.
  - The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
  - Rank should be as small as possible.

  Example:
  Input: [40,10,20,30]
  Output: [4,1,2,3]
*/

function rankTransform(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const map = generateMap(sorted);
  const output = [];

  for (const item of arr) {
    output.push(map[item]);
  }

  return output;
}

function generateMap(arr) {
  let rank = 1;
  const map = arr.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = rank;
      rank++;
    }

    return acc;
  }, {});

  return map;
}

const assert = require('assert');
assert.deepEqual(rankTransform([40, 10, 20, 30]), [4, 1, 2, 3]);
