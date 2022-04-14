/*
  Add Digits

  Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

  Example:
  Input: 38
  Output: 2
*/

function addDigits(value) {
  if (value < 10) {
    return value;
  }

  const str = '' + value;
  const fragments = str.split('');
  const sum = fragments.reduce((acc, item) => acc + Number(item), 0);

  return addDigits(sum);
}

const assert = require('assert');
assert.equal(addDigits(38), 2);
