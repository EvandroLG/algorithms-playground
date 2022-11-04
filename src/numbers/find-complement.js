/*
  Find Complement

  The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
  For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.

  Example:
  Input: 5
  Output: 2
*/

function findComplement(n) {
  const binary = n.toString(2);
  const flipped = binary
    .split('')
    .reduce((acc, c) => {
      acc.push(c === '0' ? '1' : '0');
      return acc;
    }, [])
    .join('');

  return parseInt(flipped, 2);
}

const assert = require('assert');
assert.equal(findComplement(5), 2);
