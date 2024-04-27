/*
  Score Of Strings

  You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
  
  Example:
  Input: "hello"
  Output: 13
*/

function scoreOfStrings(s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    result += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
  }

  return result;
}

const assert = require('assert');
assert.deepStrictEqual(scoreOfStrings('hello'), 13);
