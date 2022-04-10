/*
  Validate Number String

  Give a number string, check if it is valid number.
  By "valid", we mean if it validates as one of below formats:
  - integer, such as '0', '-1'
  - decimal number like '1.0', '-2.335'
  - exponential notation '-12.3e45'

  Example:
  Input: '-12.3e45'
  Output: true
*/

function validateNumberString(str) {
  if (!str.length) {
    return false;
  }

  const isNumber = /\d/;
  const memo = new Set();
  const signs = ['-', '+', '*'];
  let lastC = null;

  for (let i = 0; i < str.length; i++) {
    const c = str[i].toLowerCase();
    const isValid =
      (i === 0 && signs.includes(c) && str.length > 1) ||
      (signs.includes(c) && lastC === 'e') ||
      (c === '.' && str.length > 1 && !memo.has('.') && lastC !== 'e') ||
      isNumber.test(c) ||
      (i > 0 && i < str.length - 1 && c === 'e' && lastC !== 'e');

    if (isValid) {
      lastC = c;
      memo.add(c);
      continue;
    }

    return false;
  }

  return true;
}

const assert = require('assert');
assert.ok(validateNumberString('-12.3e45'));
