/*
  Matrix Diagonal Sum

  Given a square matrix mat, return the sum of the matrix diagonals.
  Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

  Example:
  Input: [[1,2,3],[4,5,6],[7,8,9]]
  Output: 25
*/

function matrixDiagonalSum(arr) {
  const set = new Set();
  const output = [];
  sumPrimary(arr, output, set);
  sumSecondary(arr, output, set);

  return arr.reduce((acc, item) => acc + item);
}

function sumPrimary(arr, output, set) {
  let i = 0;

  while (i < arr.length) {
    output.push(arr[i][i]);
    set.add(`${i}-${i}`);
    i++;
  }
}

function sumSecondary(arr, output, set) {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < arr.length) {
    if (!set.has(`${p1}-${p2}`)) {
      output.push(arr[p1][p2]);
    }

    p1++;
    p2--;
  }
}

const assert = require('assert');
assert.equal(
  matrixDiagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  25
);
