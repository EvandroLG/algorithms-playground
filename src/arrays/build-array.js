/*
  Build Array

  You are given an integer array target and an integer n.
  You have an empty stack with the two following operations:
  - "Push": pushes an integer to the top of the stack.
  - "Pop": removes the integer on the top of the stack.

  You also have a stream of the integers in the range [1, n].
  Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to target.
  You should follow the following rules:
  - If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.
  - If the stack is not empty, pop the integer at the top of the stack.
  - If, at any moment, the elements in the stack (from the bottom to the top) are equal to target

  Example:
  Input: [1,3], 3
  Output: ["Push","Push","Pop","Push"]
*/

function buildArray(target, n) {
  const stack = [];
  const output = [];

  for (let i = 1; i <= n; i++) {
    const idx = stack.length;

    if (target[idx] === i) {
      stack.push(i);
      output.push('Push');
    } else if (target[idx] > i) {
      output.push('Push');
      output.push('Pop');
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(buildArray([1, 3], 3), ['Push', 'Push', 'Pop', 'Push']);
