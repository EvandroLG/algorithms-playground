/*
  Self Dividing Numbers

  A self-dividing number is a number that is divisible by every digit it contains.
  For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
  A self-dividing number is not allowed to contain the digit zero.
  Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

  Example:
  Input: 47, 85
  Output: [48,55,66,77]
*/

function selfDividingNumbers(left, right) {
  const output = [];

  for (let i = left; i <= right; i++) {
    if (i < 10) {
      output.push(i);
    } else {
      const digits = getDigits(i);

      if (digits.includes(0)) {
        continue;
      }

      if (isDivisibleByDigits(i, digits)) {
        output.push(i);
      }
    }
  }

  return output;
}

function getDigits(n) {
  return ('' + n).split('').map(Number);
}

function isDivisibleByDigits(n, digits) {
  for (const digit of digits) {
    if (n % digit !== 0) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.deepEqual(selfDividingNumbers(47, 85), [48, 55, 66, 77]);
