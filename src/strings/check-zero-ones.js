/*
  Check Zero Ones

  Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.
  Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0.
  The same applies if there is no 1's.

  Example:
  Input: '111000'
  Output: false
*/

function checkZeroOnes(s) {
  if (s.length === 1) {
    return !!+s[0];
  }

  let max = 0;
  let counter = 0;
  let result = null;
  let p1 = 0;
  let p2 = 1;

  while (p2 < s.length) {
    if (s[p1] === s[p2]) {
      counter++;
      p1++;
      p2++;
    } else {
      if (counter > max || (s[p1] === '0' && counter === max)) {
        max = counter;
        result = s[p1];
      }

      counter = 0;
      p1 = p2;
      p2++;
    }
  }

  if (counter > max || (s[p1] === '0' && counter === max)) {
    max = counter;
    result = s[p1];
  }

  return !!+result;
}

const assert = require('assert');
assert.ok(!checkZeroOnes('111000'));
