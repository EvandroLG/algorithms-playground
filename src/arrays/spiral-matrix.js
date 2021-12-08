/*
  Spiral Matrix

  Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

  Example:
  Input: 3
  Output: [[1,2,3],[8,9,4],[7,6,5]]
*/

function createMatrix(size) {
  const output = [];

  while (size--) {
    const row = Array(3).fill(1);
    output.push(row);
  }

  return output;
}

function spiralMatrix(n) {
  const matrix = createMatrix(n);

  let value = 1;
  let size = n * n;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (size--) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = value;
      value++;
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = value;
      value++;
    }

    right--;

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = value;
      value++;
    }

    bottom--;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = value;
      value++;
    }

    left++;
  }

  return matrix;
}

const assert = require('assert');
assert.deepEqual(spiralMatrix(3), [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
]);
