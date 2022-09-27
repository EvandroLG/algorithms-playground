/*
  Sort People

  You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
  For each index i, names[i] and heights[i] denote the name and height of the ith person.
  Return names sorted in descending order by the people's heights.

  Example:
  Input: ["Mary","John","Emma"], [180,165,170]
  Output: ["Mary","Emma","John"]
*/

function sortPeople(names, heights) {
  const map = names.reduce((acc, name, idx) => {
    const height = heights[idx];
    acc[height] = name;
    return acc;
  }, {});

  const sorted = heights.slice().sort((a, b) => b - a);

  return sorted.map((height) => map[height]);
}

const assert = require('assert');
assert.deepEqual(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]), [
  'Mary',
  'Emma',
  'John',
]);
