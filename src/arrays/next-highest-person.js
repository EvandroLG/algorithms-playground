/*
  Next Highest Person

  Write a solution to find the next highest person in a given an array.

  Example:
  Input: [2, 1, 2, 4, 3]
  Output: [4, 2, 4, -1, -1]
*/

function nextHighestPerson(arr) {
  const output = Array(arr.length).fill(-1);
  const stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];

    if (!stack.length) {
      stack.push(current);
      continue;
    }

    while (stack.length && current >= stack.at(-1)) {
      stack.pop();
    }

    if (current < stack.at(-1)) {
      output[i] = stack.at(-1);
    }

    stack.push(current);
  }

  return output;
}

const assert = require('assert');
assert.deepStrictEqual(nextHighestPerson([2, 1, 2, 4, 3]), [4, 2, 4, -1, -1]);
