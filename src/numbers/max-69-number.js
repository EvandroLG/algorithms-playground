/*
  Max 69 Number

  You are given a positive integer num consisting only of digits 6 and 9.
  Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

  Example:
  Input: 9669
  Output: 9969
*/

function max69Number(n) {
  const s = '' + n;
  const fragments = s.split('');

  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] === '6') {
      fragments[i] = '9';
      break;
    }
  }

  return +fragments.join('');
}

const assert = require('assert');
assert.equal(max69Number(9669), 9969);
