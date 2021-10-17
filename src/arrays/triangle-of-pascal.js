/*
  Triangle Of Pascal

  Given an integer numRows, return the first numRows of Pascal's triangle.
  In Pascal's triangle, each number is the sum of the two numbers directly above it.

  Example:
  Input: 5
  Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

function triangleOfPascal(n) {
  const output = [];
  let lastArr = null;
  let rows = n;
  let cols = 1;

  while (rows) {
    const arr = Array(cols).fill(1);

    if (cols > 2) {
      let first = 0;
      let last = 1;

      for (let i = 1; i < arr.length - 1; i++) {
        arr[i] = lastArr[first] + lastArr[last];
        first++;
        last++;
      }
    }

    output.push(arr);

    cols++;
    rows--;
    lastArr = arr;
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
