/*
  Find Diagonal Order

  Given an m x n matrix mat, return an array of all the elements of the array in a left diagonal order.

  Example:
  Input: [[1, 2, 3], [4, 5, 6],[7, 8, 9]]
  Output: [1, 2, 4, 3, 5, 7, 6, 8, 9]
*/

function findDiagonalOrder(arr) {
  const output = [];
  const visited = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      getDiagonal(arr, i, j, output, visited);
    }
  }

  return output;
}

function getDiagonal(arr, row, col, output, visited) {
  const key = `${row}-${col}`;

  if (visited.has(key)) {
    return;
  }

  if (row < 0 || row >= arr.length) {
    return;
  }

  if (col < 0 || col >= arr[0].lenght) {
    return;
  }

  visited.add(key);
  output.push(arr[row][col]);

  getDiagonal(arr, row + 1, col - 1, output, visited);
}

const assert = require('assert');
assert.deepStrictEqual(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 4, 3, 5, 7, 6, 8, 9]
);
