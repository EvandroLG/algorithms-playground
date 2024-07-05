/*
  Clear Digits

  You are given a string s.
  Your task is to remove all digits by doing this operation repeatedly:
  - Delete the first digit and the closest non-digit character to its left.
  Return the resulting string after removing all digits.

  Example:
  Input: "cb34"
  Output: ""
*/

function clearDigits(s) {
  const fragments = s.split('');
  let i = 0;

  while (i < fragments.length) {
    const c = fragments[i];

    if (isNumber(c)) {
      fragments.splice(i - 1, 2);
      i--;
    } else {
      i++;
    }
  }

  return fragments.join('');
}

function isNumber(c) {
  return !isNaN(c);
}

const assert = require('assert');
assert.strictEqual(clearDigits('cb34'), '');
