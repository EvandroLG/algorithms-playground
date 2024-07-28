/*
  Remove Stars

  You are given a string s, which contains stars *.
  In one operation, you can:
  - Choose a star in s.
  - Remove the closest non-star character to its left, as well as remove the star itself.
  Return the string after all stars have been removed.

  Example:
  Input: "leet**cod*e"
  Output: "lecoe"
*/

function removeStars(s) {
  const stack = [];

  for (const c of s) {
    if (c === '*') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
}

const assert = require('assert');
assert.strictEqual(removeStars('leet**cod*e'), 'lecoe');
