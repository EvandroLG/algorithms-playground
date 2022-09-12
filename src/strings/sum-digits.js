/*
  Sum Digits

  You are given a string s consisting of lowercase English letters, and an integer k.
  First, convert s into an integer by replacing each letter with its position in the alphabet.
  Then, transform the integer by replacing it with the sum of its digits.
  Repeat the transform operation k times in total.

  Example:
  Input: "leetcode", 2
  Output: 6
*/

function sumDigits(s, k) {
  const numbers = getNumbers(s);
  let joined = numbers.join('');
  let result = null;

  while (k) {
    result = sum(joined);
    joined = '' + result;
    k--;
  }

  return result;
}

function getNumbers(s) {
  return s.split('').reduce((acc, item) => {
    const n = item.charCodeAt(0) - 96;
    acc.push(n);
    return acc;
  }, []);
}

function sum(s) {
  return s.split('').reduce((acc, item) => acc + +item, 0);
}

const assert = require('assert');
assert.equal(sumDigits('leetcode', 2), 6);
