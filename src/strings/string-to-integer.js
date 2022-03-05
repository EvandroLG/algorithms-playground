/*
  String To Integer

  Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

  Example:
  Input: "4193 with words"
  Output: 4193
*/

function stringToInteger(s) {
  const symbols = new Set(['+', '-']);
  const output = [];
  const fragments = s.trim().split('');
  const lastIdx = fragments.length - 1;

  for (let i = 0; i < s.length; i++) {
    const c = fragments[i];

    if (/\d/.test(c) || (!output.length && symbols.has(c))) {
      output.push(c);
    } else {
      break;
    }
  }

  while (symbols.has(output.at(-1))) {
    output.pop();
  }

  const result = +output.join('');

  if (result > 2147483647) {
    return 2147483647;
  }

  if (result < -2147483648) {
    return -2147483648;
  }

  return result;
}

const assert = require('assert');
assert.equal(stringToInteger('4193 with words'), 4193);
