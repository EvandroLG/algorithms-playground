/*
  Transpose

  Given a 2D integer array matrix, return the transpose of matrix.
  The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

  Example:
  Input: [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[1,4,7],[2,5,8],[3,6,9]]
*/

function transpose(matrix) {
  const output = generateMatrix(matrix);
  const queue = matrix.slice();

  let i = 0;
  let j = 0;

  while (queue.length) {
    const row = queue.shift();

    for (const item of row) {
      output[i++][j] = item;
    }

    i = 0;
    j++;
  }

  return output;
}

function generateMatrix(arr) {
  const output = [];

  for (let i = 0; i < arr[0].length; i++) {
    const item = Array(arr.length).fill(1);
    output.push(item);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]
);
