/*
  Rotate Image

  You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
  You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

  Example:
  Input: [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[7,4,1],[8,5,2],[9,6,3]]
*/

function transpose(matrix) {
  const size = matrix.length;

  for (let i = 0; i < size; i++) {
    for (let j = i; j < size; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
}

function reflect(matrix) {
  const size = matrix.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size / 2; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[i][size - j - 1];
      matrix[i][size - j - 1] = tmp;
    }
  }
}

function rotateImage(matrix) {
  transpose(matrix);
  reflect(matrix);
}

const assert = require('assert');
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateImage(matrix);

assert.deepEqual(matrix, [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
]);
