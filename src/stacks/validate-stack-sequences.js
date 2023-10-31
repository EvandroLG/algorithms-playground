/*
  Validate Stack Sequences

  Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

  Example:
  Input: [1,2,3,4,5], [4,5,3,2,1]
*/

function validateStackSequences(pushed, popped) {
  if (pushed.length !== popped.length) {
    return false;
  }

  const output = [];

  while (pushed.length) {
    if (popped.at(0) === output.at(-1)) {
      output.pop();
      popped.shift();
    } else {
      const item = pushed.shift();
      output.push(item);
    }
  }

  while (popped.length) {
    if (popped.at(0) !== output.at(-1)) {
      return false;
    }

    output.pop();
    popped.shift();
  }

  return true;
}

const assert = require('assert');
assert.ok(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
