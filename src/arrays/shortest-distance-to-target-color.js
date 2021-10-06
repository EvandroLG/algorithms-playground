/*
  Shortest Distance To Target Color

  You are given an array colors, in which there are three colors: 1, 2 and 3.
  You are also given some queries. Each query consists of two integers i and c, return the shortest distance between the given index i and the target color c. If there is no solution return -1.

  Example:
  Input: colors = [1,1,2,1,3,2,2,3,3], queries = [[1,3],[2,2],[6,1]]
  Output: [3,0,3]
*/

function shortestDistanceHelper(colors, index, color) {
  if (colors[index] === color) {
    return 0;
  }

  const found = [];

  for (let i = index - 1; i >= 0; i--) {
    if (colors[i] === color) {
      found.push(index - i);
      break;
    }
  }

  for (let i = index + 1; i < colors.length; i++) {
    if (colors[i] === color) {
      found.push(i - index);
    }
  }

  if (found.length) {
    return Math.min(found[0], found[1] !== undefined ? found[1] : Infinity);
  }

  return -1;
}

function shortestDistanceToTargetColor(colors, queries) {
  const output = [];

  for (const [index, color] of queries) {
    const distance = shortestDistanceHelper(colors, index, color);
    output.push(distance);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(
  shortestDistanceToTargetColor(
    [1, 1, 2, 1, 3, 2, 2, 3, 3],
    [
      [1, 3],
      [2, 2],
      [6, 1],
    ]
  ),
  [3, 0, 3]
);
