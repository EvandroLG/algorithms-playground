/*
  Flatten

  Write a function that flattens an Array of Array into a flat Array.

  Input:
  [[1, 2, 3], 4, [5, [6, [7]]]]

  Output:
  [1, 2, 3, 4, 5, 6, 7]
*/

function flatten(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.push(flatten(cur));
    } else {
      acc.push(cur);
    }

    return acc;
  }, []);
}

const assert = require('assert');
const arr = [[1, 2, 3], 4, [5, [6, [7]]]];

assert.ok(flatten(arr), [1, 2, 3, 4, 5, 6, 7]);
