/*
  Remove Trailing Zeros

  Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

  Example:
  Input: "51230100"
  Output: "512301"
*/

function removeTrailingZeros(arr) {
  const output = [];
  let found = false;

  for (let i = arr.length - 1; i >= 0; i--) {
    const item = arr[i];

    if (found) {
      output.push(item);
      continue;
    }

    if (item === '0') {
      continue;
    }

    found = true;
    output.push(item);
  }

  return output.reverse().join('');
}

const assert = require('assert');
assert.equal(removeTrailingZeros('51230100'), '512301');
