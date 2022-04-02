/*
  Add Binary

  Given two binary strings a and b, return their sum as a binary string.

  Example:
  Input: '1010', '1011'
  Output: '10101'
*/

function addBinary(a, b) {
  const output = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (i >= 0) {
      sum += a[i] - '0';
      i--;
    }

    if (j >= 0) {
      sum += b[j] - '0';
      j--;
    }

    output.unshift(sum % 2);
    carry = Math.floor(sum / 2);
  }

  if (carry === 1) {
    output.unshift(1);
  }

  return output.join('');
}

const assert = require('assert');
assert.equal(addBinary('1010', '1011'), '10101');
