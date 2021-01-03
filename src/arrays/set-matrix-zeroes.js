/*
  Set Matrix Zeroes

  Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

  Follow up:
  A straight forward solution using O(mn) space is probably a bad idea.
  A simple improvement uses O(m + n) space, but still not the best solution.
  Could you devise a constant space solution?

   

  Example 1:

  Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
  Output: [[1,0,1],[0,0,0],[1,0,1]]


  Example 2:

  Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
  Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

function updateColumnToZero(matrix, j) {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    row[j] = 0;
  }
}

function updateRowToZero(matrix, i) {
  const row = matrix[i];

  for (let i = 0; i < row.length; i++) {
    row[i] = 0;
  }
}

function setMatrixZeroes(matrix) {
  const cacheRow = [];
  const cacheColumn = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      if (row[j] === 0) {
        cacheRow.push(i);
        cacheColumn.push(j);
      }
    }
  }

  for (const index of cacheRow) {
    updateRowToZero(matrix, index);
  }

  for (const index of cacheColumn) {
    updateColumnToZero(matrix, index);
  }
}

const assert = require('assert');

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setMatrixZeroes(matrix);

assert.deepEqual(matrix, [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
]);
