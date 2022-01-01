/*
  Buildings With An Ocean View

  There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.
  The ocean is to the right of the buildings.
  A building has an ocean view if the building can see the ocean without obstructions.
  Formally, a building has an ocean view if all the buildings to its right have a smaller height.

  Example:
  Input: [4,2,3,1]
  Output: [0, 2, 3]
*/

function buildingsWithAnOceanView(heights) {
  const output = [];

  for (let i = 0; i < heights.length; i++) {
    while (output.length && heights[output[output.length - 1]] <= heights[i]) {
      output.pop();
    }

    output.push(i);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(buildingsWithAnOceanView([4, 2, 3, 1]), [0, 2, 3]);
