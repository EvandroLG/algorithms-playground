/*
  Flatten

  Write a function that flattens an Array of Array into a flat Array using iterative approach.
  You are not allowed to use recursion for solving this problem.

  Input:
  [[1, 2, 3], 4, [5, [6, [7]]]]

  Output:
  [1, 2, 3, 4, 5, 6, 7]
*/

// [[1, 2, 3, 4]]
function flatten(arr) {
  const copyArray = arr.slice();
  // [[1, 2, 3, 4]]
  const stack = [copyArray.pop()];
  const output = [];

  while (stack.length) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      output.push(item);
    }

    if (!stack.length && copyArray.length) {
      stack.push(copyArray.pop());
    }
  }

  return output.reverse();
}

const assert = require('assert');
const arr = [[1, 2, 3], 4, [5, [6, [7]]]];

assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5, 6, 7]);
