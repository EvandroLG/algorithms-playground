/*
  Letter Combinations Of A Phone Number

  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
  A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

  Example:
  Input: '23'
  Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

const hash = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function letterCombinationsOfAPhoneNumber(digits) {
  const output = [];

  (function backtrack(splitted, result = '') {
    if (result.length === digits.length) {
      output.push(result);
    } else {
      const key = splitted.shift();
      const letters = hash[key] || [];

      for (const letter of letters) {
        backtrack(splitted.slice(), `${result}${letter}`);
      }
    }
  })(digits.split(''));

  return output;
}

const assert = require('assert');
assert.ok(letterCombinationsOfAPhoneNumber('23'));
