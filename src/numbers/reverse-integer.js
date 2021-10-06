/*
  Reverse Integer

  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
  Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

  Example 1:

  Input: x = 123
  Output: 321
*/

function reverseInteger(value) {
  const str = '' + value;
  const splitted = str.split('');
  const reverse = splitted.reverse();
  let isNegative = false;

  if (reverse[splitted.length - 1] === '-') {
    reverse.pop();
    isNegative = true;
  }

  const number = Number(reverse.join(''));

  if (number > 0x7fffffff) {
    return 0;
  }

  return isNegative ? number * -1 : number;
}

const assert = require('assert');
assert.equal(reverseInteger(-123), -321);
