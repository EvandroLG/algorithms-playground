/*
  Generate Parentheses

  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  Example:
  Input: 3
  Output: ["((()))","(()())","(())()","()(())","()()()"]
*/

function isValid(arr) {
  let balance = 0;

  for (c of arr) {
    if (c === '(') {
      balance++;
    } else {
      balance--;
    }

    if (balance < 0) {
      return false;
    }
  }

  return !balance;
}

function generateParentheses(n) {
  const output = [];

  (function generateHelper(arr = []) {
    if (arr.length === n * 2) {
      if (isValid(arr)) {
        output.push(arr.join(''));
      }
    } else {
      arr.push('(');
      generateHelper(arr);
      arr.pop();
      arr.push(')');
      generateHelper(arr);
      arr.pop();
    }
  })();

  return output;
}

const assert = require('assert');
assert.deepEqual(generateParentheses(3), [
  '((()))',
  '(()())',
  '(())()',
  '()(())',
  '()()()',
]);
