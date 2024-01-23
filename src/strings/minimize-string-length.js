/*
  Minimize String Length

  Given a 0-indexed string s, repeatedly perform the following operation any number of times:
  - Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the left of i (if any) and the closest occurrence of c to the right of i (if any).
  Your task is to minimize the length of s by performing the above operation any number of times.
  Return an integer denoting the length of the minimized string.

  Example:
  Input: s = "aaabc"
  Output: 3
*/

function minimizeStringLength(s) {
  let counter = 0;
  const memo = {};

  for (const c of s) {
    counter++;

    if (!memo.hasOwnProperty(c)) {
      memo[c] = 1;
    } else {
      counter--;
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(minimizeStringLength('aaabc'), 3);
