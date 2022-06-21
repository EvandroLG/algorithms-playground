/*
  Minimum Sum

  You are given a positive integer num consisting of exactly four digits.
  Split num into two new integers new1 and new2 by using the digits found in num.
  Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

  Example:
  Input: 2932
  Output: 52
*/

function minimumSum(n) {
  const str = '' + n;
  const fragments = str.split('').map(Number);
  const sorted = fragments.sort((a, b) => a - b);
  const pair1 = [sorted[0], sorted[2]].join('');
  const pair2 = [sorted[1], sorted[3]].join('');

  return +pair1 + +pair2;
}

const assert = require('assert');
assert.equal(minimumSum(2932), 52);
