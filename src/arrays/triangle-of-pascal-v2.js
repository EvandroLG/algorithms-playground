/*
  Triangle Of Pascal V2

  Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

  Example:
  Input: 3
  Output: [1, 3, 3, 1]
*/

function updateRow(prevRow, currentRow) {
  let idx = 0;
  let p1 = 0;
  let p2 = 1;

  while (p2 < prevRow.length) {
    const sum = prevRow[p1] + currentRow[p2];
    currentRow[idx] = sum;

    p1++;
    p2++;
    idx++;
  }
}

function createTriangle(size) {
  const output = [];

  for (let row = 0; row < size; row++) {
    const columns = Array(row + 1).fill(1);

    if (row > 1) {
      updateRow(output[row - 1], columns);
    }

    output.push(columns);
  }

  return output;
}

function triangleOfPascalV2(rowIdx) {
  const triangle = createTriangle(rowIdx + 1);
  return triangle[rowIdx];
}

const assert = require('assert');
assert.deepEqual(triangleOfPascalV2(3), [1, 3, 3, 1]);
