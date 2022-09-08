/*
  Height Checker

  A school is trying to take an annual photo of all the students.
  The students are asked to stand in a single file line in non-decreasing order by height.
  Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
  Return the number of indices where heights[i] != expected[i].

  Example:
  Input: [1,1,4,2,1,3]
  Output: 3
*/

function heightChecker(heights) {
  const sorted = heights.slice().sort((a, b) => a - b);
  let counter = 0;

  for (let i = 0; i < heights.length; i++) {
    if (sorted[i] !== heights[i]) {
      counter++;
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(heightChecker([1, 1, 4, 2, 1, 3]), 3);
