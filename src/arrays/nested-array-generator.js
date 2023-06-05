/*
  Nested Array Generator

  Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.
  A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.
  inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.

  Example:
  Input: [[[6]],[1,3],[]]
  Output: [6,1,3]
*/

function* nestedArrayGenerator(arr) {
  const flatted = arr.flat(Infinity);
  let i = 0;

  while (i < flatted.length) {
    yield flatted[i];
    i++;
  }
}

const assert = require('assert');
const gen = nestedArrayGenerator([[[6]], [1, 3], []]);
const output = [];
let result = gen.next();

while (!result.done) {
  output.push(result.value);
  result = gen.next();
}

assert.deepEqual(output, [6, 1, 3]);
