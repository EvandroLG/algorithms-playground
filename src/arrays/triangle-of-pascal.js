/*
  Triangle Of Pascal

  Given an integer numRows, return the first numRows of Pascal's triangle.
  In Pascal's triangle, each number is the sum of the two numbers directly above it.

  Example:
  Input: 5
  Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

function updateArr(above, arr) {
  if (!above || arr.length <= 2) {
    return;
  }

  let p1 = 0;
  let p2 = 1;

  for (let i = 1; i < arr.length - 1; i++) {
    arr[i] = above[p1] + above[p2];
    p1++;
    p2++;
  }
}

function triangleOfPascal(n) {
  const output = [];
  let rows = 0;

  while (rows < n) {
    const arr = Array(rows + 1).fill(1);
    updateArr(output[rows - 1], arr);
    output.push(arr);
    rows++;
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(triangleOfPascal(5), [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1],
]);
