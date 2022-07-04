/*
  Uncompress String

  Given a compressed string, return its original form.
  1) a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
  2) inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.

  Example:
  Input: '3(ab2(c))'
  Output: 'abccabccabcc'
*/

function uncompressString(str) {
  const numberStack = [];
  const stringStack = [];
  const currentString = [];

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (isDigit(c)) {
      const digit = [c];

      while (isDigit(str[i + 1])) {
        digit.push(str[i + 1]);
        i++;
      }

      const k = +digit.join('');
      numberStack.push(k);
    } else if (c === '(') {
      stringStack.push(currentString.join(''));
      currentString.length = 0;
    } else if (c === ')') {
      const number = numberStack.pop();
      const str = stringStack.pop();
      const decoded = currentString.join('').repeat(number);
      currentString.length = 0;
      currentString.push([str, decoded].join(''));
    } else {
      currentString.push(c);
    }
  }

  return currentString.join('');
}

function isDigit(c) {
  return /\d/.test(c);
}

const assert = require('assert');
assert.equal(uncompressString('3(ab2(c))'), 'abccabccabcc');
