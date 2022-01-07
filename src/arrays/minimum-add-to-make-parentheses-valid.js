/*
  Minimum Add To Make Parentheses Valid

  A parentheses string is valid if and only if:
  - It is the empty string,
  - It can be written as AB (A concatenated with B), where A and B are valid strings, or
  - It can be written as (A), where A is a valid string.

  You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

  Example:
  Input: ())
  Output: 1
*/

function minimumAddToMakeParenthesesValid(str) {
  const stack = [];
  let counter = 0;

  for (const c of str) {
    if (c === '(') {
      stack.push(true);
    } else if (c === ')' && !stack.pop()) {
      counter++;
    }
  }

  return stack.length + counter;
}

const assert = require('assert');
assert.equal(minimumAddToMakeParenthesesValid('())'), 1);
